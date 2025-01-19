import type { FC } from 'react'

import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'
import { pageTitles } from '@/constants/page-titles'

import { QuickInfo } from './QuickInfo'
import { Skills } from './Skills'

export const ResumePage: FC = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1">
      {pageTitles.resume}
    </Typography>

    <QuickInfo />

    <Skills />

    <Cta text="Ready to bring your project to life?" />
  </DefaultLayout>
)
