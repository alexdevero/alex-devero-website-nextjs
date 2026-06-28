import { WorkPage } from '@/components/Pages/WorkPage/WorkPage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Selected Work & Case Studies',
  description:
    'Selected work and case studies from Alex Devero – React and Next.js products built and scaled for companies including CDN77, Digitoo, Persoo, and Supernova.',
  pathname: routes.work,
})

export default WorkPage
