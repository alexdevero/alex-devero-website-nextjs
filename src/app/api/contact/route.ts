import type { ErrorResponse } from 'resend'
import { Resend } from 'resend'

type RecaptchaResponse = {
  success: boolean // whether this request was a valid reCAPTCHA token for your site
  challenge_ts: Date // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  hostname: string // the hostname of the site where the reCAPTCHA was solved
  'error-codes': unknown[] // optional
  score: number // the score for this request (0.0 - 1.0), 1 is very likely a good interaction, 0.0 is very likely a bot
  action: string // the action name for this request (important to verify)
}

type ContactRequest = {
  name: string
  email: string
  message: string
  token: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const requestFormData = (await request.json()) as ContactRequest

  const recatpchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${requestFormData.token}`,
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

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { message: 'No ReSend API key provided' },
      {
        status: 400,
      }
    )
  }

  if (recatpchaResponseJson.score < 0.5) {
    return Response.json(
      { message: 'Failed reCAPTCHA score' },
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

  // Send email to yourself
  try {
    await resend.emails.send({
      // This must be from verified domain, otherwise it will not work (can't verify gmail since it is not my domain)
      from: 'Alex Devero website <website@alexdevero.com>',
      to: process.env.CONTACT_EMAIL,
      subject: 'Contact from alexdevero.com',
      html: `
<p>Name: ${requestFormData.name}</p>
<p>E-mail: ${requestFormData.email}</p>
<p>Message: ${requestFormData.message}</p>
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
