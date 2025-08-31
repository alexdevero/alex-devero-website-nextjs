import { ContactPage } from '@/components/Pages/ContactPage/ContactPage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Contact',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routes.contact,
})

export default ContactPage
