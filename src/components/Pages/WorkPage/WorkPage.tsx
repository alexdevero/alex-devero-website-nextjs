import type { FC } from 'react'

import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'
import { pageTitles } from '@/constants/page-titles'

import { Timeline } from './Timeline'

export const WorkPage: FC = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1" centered>
      {pageTitles.work}
    </Typography>

    <Timeline />

    <Cta
      className="mt-12!"
      text="Want the full picture? See my résumé, or get in touch about senior frontend and tech-lead roles."
    />
  </DefaultLayout>
)
