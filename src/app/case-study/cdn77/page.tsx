import { Cdn77CaseStudyPage } from '@/components/Pages/CaseStudy/Cdn77/Cdn77CaseStudyPage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Modernizing CDN77’s Internal App',
  description:
    'Refactor + design-system migration of a three-year-old Next.js app to improve performance, maintainability, and developer velocity.',
  pathname: routes.caseStudyCdn77,
  ogType: 'article',
})

export default Cdn77CaseStudyPage
