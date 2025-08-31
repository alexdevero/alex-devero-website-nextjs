'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Input } from '@/components/FormElements/Input'
import { Heading } from '@/components/Heading'

const formSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
})

const initialValues = {
  email: '',
  password: '',
}

type FormValues = typeof initialValues

export const LoginPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  })

  const handleLogin = async (values: FormValues) => {
    // eslint-disable-next-line no-console
    console.log('Login', values)
  }

  return (
    <DefaultLayout>
      <Heading>Login</Heading>

      <div className="mx-auto max-w-[280px]">
        <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit(handleLogin)}>
          <Input
            errorMessage={errors.email?.message}
            hasError={!!errors.email}
            id="email"
            label="E-mail:"
            type="email"
            {...register('email')}
          />
          <Input
            errorMessage={errors.password?.message}
            hasError={!!errors.password}
            id="password"
            label="Password:"
            type="password"
            {...register('password')}
          />

          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  )
}
