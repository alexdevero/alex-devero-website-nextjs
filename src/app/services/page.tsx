import { ServicesPage } from '@/components/Pages/Services/ServicesPage'
import { getMetadata } from '@/constants/metadata'

export const metadata = getMetadata({
  title: 'Services',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: '/services',
})

export default ServicesPage
