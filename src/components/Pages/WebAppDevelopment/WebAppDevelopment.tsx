import type { FC } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card/Card'
import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'
import { pageTitles } from '@/constants/page-titles'

export const WebAppDevelopmentPage: FC = () => (
  <DefaultLayout>
    <Button href="/services" variant="outline">
      {'<- Back'}
    </Button>

    <Typography as="h1" variant="h1" centered>
      {pageTitles.webAppDevelopment}
    </Typography>

    <div className="mx-auto flex max-w-3xl flex-col gap-8 md:gap-12">
      <Typography>
        Build blazing-fast, scalable TypeScript/React/Next.js applications—clean architecture,
        lightning-fast performance, delivered on time.
      </Typography>

      <Card fitContent>
        <Typography as="h2" centered={false} className="mb-3! mt-0" variant="h4">
          Quick Results
        </Typography>

        <List
          items={[
            'Load times improved 40% (LCP/FCP)',
            'Test coverage maintained ≥ 80%',
            'Delivered MVPs in 4–8 weeks',
          ]}
          listStyle="dashes"
        />
      </Card>

      <div className="flex flex-col gap-2">
        <Typography as="h2" centered={false} className="mb-3! mt-0" variant="h4">
          What This Includes
        </Typography>

        <List
          items={[
            'MVP → full product build using TS/Next.js',
            'Modular, maintainable architecture + clean code',
            'Performance-first setup: image optimization, SSR, caching',
            'End-to-end testing, deploy pipelines, and monitoring',
            'Documentation + handoff support',
          ]}
          listStyle="dashes"
        />
      </div>

      <div className="mb-8 flex flex-col gap-2">
        <Typography as="h2" centered={false} className="mb-3! mt-0" variant="h4">
          Ideal For
        </Typography>

        <Typography centered={false}>
          Mentally exhausted product teams needing “ship-ready” web apps—or businesses sick of slow
          iterations.
        </Typography>
      </div>
    </div>

    <Cta ctaText="Contact me" text={undefined} centered />
  </DefaultLayout>
)
