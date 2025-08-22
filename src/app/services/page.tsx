import { ServicesPage } from '@/components/Pages/Services/ServicesPage'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Services',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routers.services,
})

export default ServicesPage
