'use client'

import type { FC } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card/Card'
import { Input } from '@/components/FormElements/Input'
import { Textarea } from '@/components/FormElements/Textarea'
import { Link } from '@/components/Link'
import { Typography } from '@/components/Typography'
import { email } from '@/constants/links'

import { useContactForm } from './useContactForm'

export const ContactForm: FC = () => {
  const {
    errors,
    handleSubmit,
    handleFormSubmit,
    isSubmitting,
    isSubmitSuccessful,
    register,
    submitError,
    messageSent,
  } = useContactForm()

  return (
    <Card>
      <Typography as="h2" centered={false} className="mb-2! mt-0" variant="h4">
        Send a message
      </Typography>

      <div className="mt-5 w-full">
        <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            errorMessage={errors.name?.message}
            hasError={!!errors.name}
            id="name"
            label="Name:"
            {...register('name')}
          />

          <Input
            errorMessage={errors.email?.message}
            hasError={!!errors.email}
            id="email"
            label="E-mail:"
            {...register('email')}
          />

          <Textarea
            errorMessage={errors.message?.message}
            hasError={!!errors.message}
            id="formMessage"
            label="Message:"
            {...register('message')}
          />

          {isSubmitSuccessful && (
            <Typography as="div" className="text-green-500">
              Your message is on the way. I will reply within 24 hours CET.
            </Typography>
          )}
          {Boolean(submitError) && (
            <Typography as="div" className="text-red-500">
              {submitError}
            </Typography>
          )}

          <div className="flex justify-center">
            <Button disabled={isSubmitting || isSubmitSuccessful} type="submit" fullWidth>
              {messageSent ? 'Message sent' : 'Send message'}
            </Button>
          </div>
        </form>
      </div>

      <Typography className="mt-4">
        Prefer email? Reach me at{' '}
        <Link className="underline" href={`mailto:${email}`}>
          {email}
        </Link>
        .
      </Typography>
    </Card>
  )
}
