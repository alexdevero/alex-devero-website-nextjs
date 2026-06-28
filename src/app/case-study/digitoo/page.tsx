import { DigitooCaseStudyPage } from '@/components/Pages/CaseStudy/Digitoo/DigitooCaseStudyPage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Transforming Digitoo’s MVP into a Scalable Customer-Facing Platform',
  description:
    'Case study: migrating Digitoo’s React MVP to a server-rendered Next.js platform with a reusable Tailwind component library, shipping 7 major features and onboarding 40+ clients.',
  pathname: routes.caseStudyDigitoo,
  ogType: 'article',
})

export default DigitooCaseStudyPage
