import { DigitooCaseStudyPage } from '@/components/Pages/CaseStudy/Digitoo/DigitooCaseStudyPage'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Digitoo Case Study',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routers.caseStudyDevero,
})

export default DigitooCaseStudyPage
