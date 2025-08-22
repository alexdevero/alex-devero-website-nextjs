import { Cdn77CaseStudyPage } from '@/components/Pages/CaseStudy/Cdn77/Cdn77CaseStudyPage'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'CDN77 Case Study',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routers.caseStudyCdn77,
})

export default Cdn77CaseStudyPage
