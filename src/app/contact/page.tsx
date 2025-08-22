import { ContactPage } from '@/components/Pages/ContactPage/ContactPage'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Contact',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routers.contact,
})

export default ContactPage
