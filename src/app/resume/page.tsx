import { ResumePage } from '@/components/Pages/ResumePage/ResumePage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Resume – Senior Frontend Engineer (React/Next.js)',
  description:
    'Resume of Alex Devero, Senior Frontend Engineer and Frontend Tech Lead: skills, tech stack, selected work, and a downloadable PDF. 10+ years in React, Next.js, and TypeScript.',
  pathname: routes.resume,
})

export default ResumePage
