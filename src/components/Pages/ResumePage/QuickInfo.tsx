'use client'

import { track } from '@vercel/analytics'

import type { FC } from 'react'

import { Card } from '@/components/Card/Card'
import { Link } from '@/components/Link'
import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'
import { calendlyLink, email } from '@/constants/links'

export const QuickInfo: FC = () => (
  <Card fitContent>
    <Typography as="h2" className="!mt-0" variant="h2">
      Quick Facts
    </Typography>

    <List
      items={[
        'Location: Prague, Czech Republic (CET)',
        'Availability: Limited slots each quarter',
        <>
          Contact: <Link href={`mailto:${email}`}>{email}</Link> ·{' '}
          <Link href={calendlyLink} onClick={() => track('resume_schedule_call')}>
            Schedule a 20-min call
          </Link>
        </>,
      ]}
    />
  </Card>
)
