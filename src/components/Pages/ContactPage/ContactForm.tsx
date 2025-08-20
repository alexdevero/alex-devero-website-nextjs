'use client'

import type { FC } from 'react'

import { Card } from '@/components/Card/Card'
import { Link } from '@/components/Link'
import { email } from '@/constants/links'

import { Button } from '../../Button'
import { Input } from '../../FormElements/Input'
import { Textarea } from '../../FormElements/Textarea'
import { Typography } from '../../Typography'
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
      <Typography as="h2" variant="h4" centered={false} className="!mb-2 mt-0">
        Send a message
      </Typography>

      <div className="mt-5 w-full">
        <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit(handleFormSubmit)}>
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
              Your message is on the way. I will reply within 24 hours CET.
            </Typography>
          )}
          {submitError && (
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
        <Link href={`mailto:${email}`} className="underline">
          {email}
        </Link>
        .
      </Typography>
    </Card>
  )
}
