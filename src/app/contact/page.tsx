import { ContactPage } from '@/components/Pages/ContactPage/ContactPage'
import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Contact Alex Devero',
  description:
    'Get in touch with Alex Devero, Senior Frontend Engineer and Frontend Tech Lead. Open to senior frontend and tech-lead roles across the EU and remote.',
  pathname: routes.contact,
})

export default ContactPage
