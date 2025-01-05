'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import { useReCaptcha } from 'next-recaptcha-v3'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { formSchema, initialValues } from './constants'
import type { FormValues } from './types'

export const useContactForm = () => {
  const { executeRecaptcha } = useReCaptcha()
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  })
  const [submitError, setSubmitError] = useState<string | null>(null)
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

      reset()
      setSubmitError(null)
      setMessageSent(true)
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message)
      }

      if (typeof error === 'string') {
        setSubmitError(error)
      }
    }
  }

  return {
    errors,
    isSubmitting,
    isSubmitSuccessful,
    handleSubmit,
    register,
    handleFormSubmit,
    submitError,
    messageSent,
  }
}
