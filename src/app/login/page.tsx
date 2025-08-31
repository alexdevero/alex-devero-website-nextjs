import { LoginPage } from '@/components/Pages/LoginPage/LoginPage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Login',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routes.login,
  index: false,
})

export default LoginPage
