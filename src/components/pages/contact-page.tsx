'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../button'
import { Input } from '../form-elements/input'
import { Textarea } from '../form-elements/textarea'
import { Heading } from '../heading'
import Layout from '../layout'

const formEnabled = false

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
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  })

  const handleFormSubmit = async (values: FormValues) => {
    console.log('Contact', values)
  }

  return (
    <Layout title="Contact">
      <Heading>Let's get in touch</Heading>

      <div className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col gap-3">
          <p>
            Do you have some project you want to realize? Let's get in touch! Contact me on my{' '}
            <a href="mailto:deveroalex@gmail.com" className="underline">
              email
            </a>
            .
          </p>
        </div>

        {formEnabled && (
          <div className="flex flex-col items-center justify-center">
            <div className="mt-5 w-full max-w-lg">
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

                {/* <fieldset>
                  <Recaptcha
                    onloadCallback={this.onCaptchaLoad}
                    sitekey="6Ldt6RgUAAAAAKtaxY2787y3S7uP5Wp9kzL0PMMg"
                    render="explicit"
                    verifyCallback={this.onCaptchaVerify}
                  />
                </fieldset> */}

                {isSubmitSuccessful && (
                  <p>
                    <strong>Your message is on the way. I will reply in three days.</strong>
                  </p>
                )}

                <div>
                  <Button disabled={isSubmitting || isSubmitSuccessful} type="submit">
                    Send
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
