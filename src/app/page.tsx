import { HomePage } from '@/components/Pages/Homepage/Homepage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Home',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routes.home,
})

export default HomePage
