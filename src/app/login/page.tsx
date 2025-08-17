import { LoginPage } from '@/components/Pages/LoginPage/LoginPage'
import { getMetadata } from '@/constants/metadata'

export const metadata = getMetadata({
  title: 'Login',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: '/login',
  index: false,
})

export default LoginPage
