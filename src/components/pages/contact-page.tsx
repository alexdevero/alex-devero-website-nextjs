'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import { useState } from 'react'

import { useReCaptcha } from 'next-recaptcha-v3'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../button'
import { Input } from '../form-elements/input'
import { Textarea } from '../form-elements/textarea'
import Layout from '../layout'
import { Typography } from '../typography'

const formEnabled = true

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  message: z.string().min(1, 'Message is required'),
})

const initialValues = {
  firstName: '',
  lastName: '',
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
    <Layout title="Contact">
      <Typography as="h1" variant="h1">
        Let's get in touch
      </Typography>

      <div className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col gap-3">
          <Typography>
            Ready to start your project? fill out the form below. Contact me on my{' '}
            <a href="mailto:deveroalex@gmail.com" className="underline">
              email
            </a>
            .
          </Typography>
        </div>

        {formEnabled && (
          <div className="flex flex-col items-center justify-center">
            <div className="mt-5 w-full max-w-lg">
              <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="flex flex-col gap-3 md:flex-row">
                  <Input
                    id="firstName"
                    label="First name:"
                    hasError={!!errors.firstName}
                    errorMessage={errors.firstName?.message}
                    {...register('firstName')}
                  />

                  <Input
                    id="lastName"
                    label="Last name:"
                    hasError={!!errors.lastName}
                    errorMessage={errors.lastName?.message}
                    {...register('lastName')}
                  />
                </div>

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

                <div>
                  <Button disabled={isSubmitting || isSubmitSuccessful} type="submit">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
