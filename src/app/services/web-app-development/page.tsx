import { WebAppDevelopmentPage } from '@/components/Pages/WebAppDevelopment/WebAppDevelopment'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Web App Development',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routers.servicesWebAppDevelopment,
})

export default WebAppDevelopmentPage
