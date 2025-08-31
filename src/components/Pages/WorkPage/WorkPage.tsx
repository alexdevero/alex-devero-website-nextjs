import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'
import { pageTitles } from '@/constants/page-titles'

import { WorkPageOldContent } from './WorkPageOldContent'

export const WorkPage = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1" centered>
      {pageTitles.work}
    </Typography>

    <WorkPageOldContent />
  </DefaultLayout>
)
