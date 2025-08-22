import { ResumePage } from '@/components/Pages/ResumePage/ResumePage'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Resume – TypeScript/React/Next.js Specialist | Alex Devero',
  description: 'Snapshot of skills, stack, selected work, and a downloadable PDF resume.',
  pathname: routers.resume,
})

export default ResumePage
