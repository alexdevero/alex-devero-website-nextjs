import type { FC } from 'react'

import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'

import { QuickInfo } from './QuickInfo'
import { Skills } from './Skills'

export const CvPage: FC = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1">
      My CV
    </Typography>

    <QuickInfo />

    <Skills />

    <Cta />
  </DefaultLayout>
)
