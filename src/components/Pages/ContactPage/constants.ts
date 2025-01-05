import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  message: z.string().min(1, 'Message is required'),
})

export const initialValues = {
  name: '',
  email: '',
  message: '',
}
