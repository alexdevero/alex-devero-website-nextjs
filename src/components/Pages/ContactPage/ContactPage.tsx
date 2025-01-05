'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import { useState } from 'react'

import { useReCaptcha } from 'next-recaptcha-v3'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Link } from '@/components/Link'

import { Button } from '../../Button'
import { DefaultLayout } from '../../DefaultLayout'
import { Input } from '../../FormElements/Input'
import { Textarea } from '../../FormElements/Textarea'
import { Typography } from '../../Typography'

const formEnabled = true

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  message: z.string().min(1, 'Message is required'),
})

const initialValues = {
  name: '',
  email: '',
  message: '',
}

type FormValues = typeof initialValues

export const ContactPage = () => {
  const { executeRecaptcha } = useReCaptcha()
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  })
  const [error, setError] = useState<string | null>(null)
  const [messageSent, setMessageSent] = useState(false)

  const handleFormSubmit = async (values: FormValues) => {
    try {
      const token = await executeRecaptcha('form_submit')

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, token }),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      setError(null)
      setMessageSent(true)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }

      if (typeof error === 'string') {
        setError(error)
      }
    }
  }

  return (
    <DefaultLayout>
      <Typography as="h1" variant="h1">
        Let's get in touch
      </Typography>

      <div className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col gap-3">
          <Typography>Let's create something amazing together. Get in touch!</Typography>
        </div>

        {formEnabled && (
          <div className="flex w-full flex-col items-center justify-center">
            <div className="mt-5 w-full max-w-lg">
              <form
                action=""
                className="flex flex-col gap-3"
                onSubmit={handleSubmit(handleFormSubmit)}
              >
                <Input
                  id="name"
                  label="Name:"
                  hasError={!!errors.name}
                  errorMessage={errors.name?.message}
                  {...register('name')}
                />

                <Input
                  id="email"
                  label="E-mail:"
                  hasError={!!errors.email}
                  errorMessage={errors.email?.message}
                  {...register('email')}
                />

                <Textarea
                  id="formMessage"
                  label="Message:"
                  hasError={!!errors.message}
                  errorMessage={errors.message?.message}
                  {...register('message')}
                />

                {isSubmitSuccessful && (
                  <Typography as="div" className="text-green-500">
                    Your message is on the way. I will reply in three days.
                  </Typography>
                )}
                {error && (
                  <Typography as="div" className="text-red-500">
                    {error}
                  </Typography>
                )}

                <div className="flex justify-center">
                  <Button disabled={isSubmitting || isSubmitSuccessful} type="submit" fullWidth>
                    {messageSent ? 'Message sent' : 'Send message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col items-center">
          <Typography>
            Prefer email? Reach me at{' '}
            <Link href="mailto:deveroalex@gmail.com" className="underline">
              email
            </Link>
            .
          </Typography>
        </div>
      </div>
    </DefaultLayout>
  )
}
