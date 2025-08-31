import { PersooCaseStudyPage } from '@/components/Pages/CaseStudy/Persoo/PersooCaseStudyPage'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Persoo Case Study',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routers.caseStudyPersoo,
  ogType: 'article',
})

export default PersooCaseStudyPage
