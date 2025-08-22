import { ConsultingPage } from '@/components/Pages/Consulting/Consulting'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Consulting & Code Audit',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routers.servicesConsulting,
})

export default ConsultingPage
