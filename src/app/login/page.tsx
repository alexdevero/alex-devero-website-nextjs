import { LoginPage } from '@/components/Pages/LoginPage/LoginPage'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Login',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routers.login,
  index: false,
})

export default LoginPage
