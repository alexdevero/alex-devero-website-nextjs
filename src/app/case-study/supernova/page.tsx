import { SupernovaCaseStudyPage } from '@/components/Pages/CaseStudy/Supernova/SupernovaCaseStudyPage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Building from Scratch at Supernova: Laying the Foundation for a Y Combinator Startup',
  description:
    'Joined as an early frontend developer to architect the product, scale the codebase, and drive the mission that redefined design-to-code tooling.',
  pathname: routes.caseStudySupernova,
  ogType: 'article',
})

export default SupernovaCaseStudyPage
