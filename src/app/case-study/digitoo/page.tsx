import { DigitooCaseStudyPage } from '@/components/Pages/CaseStudy/Digitoo/DigitooCaseStudyPage'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Transforming Digitoo’s MVP into a Scalable Customer-Facing Platform',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routers.caseStudyDigitoo,
  ogType: 'article',
})

export default DigitooCaseStudyPage
