import { AboutPage } from '@/components/Pages/AboutPage/AboutPage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'About Alex Devero – Senior Frontend Engineer (React/Next.js)',
  description:
    'Who is Alex Devero? A Senior Frontend Engineer and Frontend Tech Lead in Prague with 10+ years in React, Next.js, and TypeScript, building scalable web apps and frontend architecture.',
  pathname: routes.about,
})

export default AboutPage
