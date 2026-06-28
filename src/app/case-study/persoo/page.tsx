import { PersooCaseStudyPage } from '@/components/Pages/CaseStudy/Persoo/PersooCaseStudyPage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Evolving Persoo: From Frontend Developer to Co-Founder',
  description:
    'Case study: rebuilding Persoo’s personalization widgets, modernizing the JavaScript stack, and leading the team — from frontend developer to co-founder of the e-commerce startup.',
  pathname: routes.caseStudyPersoo,
  ogType: 'article',
})

export default PersooCaseStudyPage
