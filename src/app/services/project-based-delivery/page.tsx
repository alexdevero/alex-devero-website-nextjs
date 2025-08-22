import { ProjectBasedDeliveryPage } from '@/components/Pages/ProjectBasedDelivery/ProjectBasedDeliveryPage'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Project-based Delivery',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routers.servicesProjectBasedDelivery,
})

export default ProjectBasedDeliveryPage
