import type { ErrorResponse } from 'resend'
import { Resend } from 'resend'
import { z } from 'zod'

import { formSchema } from '@/components/Pages/ContactPage/constants'
import { recaptchaAction } from '@/constants/recaptcha'
import { escapeHtml } from '@/utils/sanitization'

type RecaptchaResponse = {
  action: string // the action name for this request (important to verify)
  challenge_ts: Date // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  'error-codes': unknown[] // optional
  hostname: string // the hostname of the site where the reCAPTCHA was solved
  score: number // the score for this request (0.0 - 1.0), 1 is very likely a good interaction, 0.0 is very likely a bot
  success: boolean // whether this request was a valid reCAPTCHA token for your site
}

const contactSchema = formSchema.extend({
  token: z.string(),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { message: 'No ReSend API key provided' },
      {
        status: 400,
      }
    )
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return Response.json(
      { message: 'No reCAPTCHA secret key provided' },
      {
        status: 400,
      }
    )
  }

  if (!process.env.CONTACT_EMAIL) {
    return Response.json(
      { message: 'No contact email provided' },
      {
        status: 400,
      }
    )
  }

  const requestFormData = contactSchema.safeParse(await request.json())

  if (!requestFormData.success) {
    return Response.json(
      { message: 'Invalid email data provided' },
      {
        status: 400,
      }
    )
  }

  const recatpchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${requestFormData.data.token}`,
  })
  const recatpchaResponseJson = (await recatpchaResponse.json()) as RecaptchaResponse

  if (!recatpchaResponseJson.success) {
    return Response.json(
      { message: 'Failed reCAPTCHA' },
      {
        status: 400,
      }
    )
  }

  if (recatpchaResponseJson.action !== recaptchaAction) {
    return Response.json({ message: 'Unexpected reCAPTCHA action' }, { status: 400 })
  }

  if (recatpchaResponseJson.score < 0.5) {
    return Response.json(
      { message: 'Failed reCAPTCHA score' },
      {
        status: 400,
      }
    )
  }

  // Send email to yourself
  const { email, message, name } = requestFormData.data

  try {
    await resend.emails.send({
      // This must be from verified domain, otherwise it will not work (can't verify gmail since it is not my domain)
      from: 'Alex Devero website <website@alexdevero.com>',
      to: process.env.CONTACT_EMAIL,
      subject: 'Contact from alexdevero.com',
      // Plain-text part is never HTML-parsed, so it's inherently injection-proof.
      text: `Name: ${name}\nE-mail: ${email}\nMessage: ${message}`,
      html: `
<p>Name: ${escapeHtml(name)}</p>
<p>E-mail: ${escapeHtml(email)}</p>
<p>Message: ${escapeHtml(message).replace(/\n/g, '<br>')}</p>
`,
    })

    return Response.json(
      { message: 'Success' },
      {
        status: 201,
      }
    )
  } catch (error) {
    return Response.json(
      { message: (error as ErrorResponse).message ?? 'Failed to send email' },
      {
        status: 500,
      }
    )
  }
}
