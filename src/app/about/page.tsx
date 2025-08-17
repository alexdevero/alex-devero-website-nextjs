import { AboutPage } from '@/components/Pages/AboutPage/AboutPage'
import { getMetadata } from '@/constants/metadata'

export const metadata = getMetadata({
  title: 'About',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: '/about',
})

export default AboutPage
