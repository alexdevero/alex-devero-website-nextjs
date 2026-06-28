import { HomePage } from '@/components/Pages/Homepage/Homepage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Senior Frontend Engineer (React/Next.js) & Frontend Tech Lead',
  description:
    'Alex Devero is a Senior Frontend Engineer and Frontend Tech Lead with 10+ years building React, Next.js, and TypeScript applications for companies including CDN77, Digitoo, and Persoo.',
  pathname: routes.home,
})

export default HomePage
