import { AboutPage } from '@/components/Pages/AboutPage/AboutPage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'About',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routes.about,
})

export default AboutPage
