'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../button'
import { Input } from '../form-elements/input'
import { Heading } from '../heading'
import Layout from '../layout'

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
    console.log('Login', values)
  }

  return (
    <Layout title='Contact'>
      <Heading>Login</Heading>

      <div className='mx-auto max-w-[280px]'>
        <form className='flex flex-col gap-2' action='' onSubmit={handleSubmit(handleLogin)}>
          <Input
            id='email'
            type='email'
            label='E-mail:'
            hasError={!!errors.email}
            errorMessage={errors.email?.message}
            {...register('email')}
          />
          <Input
            id='password'
            type='password'
            label='Password:'
            hasError={!!errors.password}
            errorMessage={errors.password?.message}
            {...register('password')}
          />

          <div>
            <Button type='submit'>Login</Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
