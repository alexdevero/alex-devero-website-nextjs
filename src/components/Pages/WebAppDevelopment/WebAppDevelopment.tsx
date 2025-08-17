import type { FC } from 'react'

import { Card } from '@/components/Card/Card'
import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'
import { pageTitles } from '@/constants/page-titles'

export const WebAppDevelopmentPage: FC = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1" centered>
      {pageTitles.webAppDevelopment}
    </Typography>

    <div className="mx-auto flex max-w-3xl flex-col gap-8 md:gap-12">
      <Typography>
        Build blazing-fast, scalable TypeScript/React/Next.js applications—clean architecture,
        lightning-fast performance, delivered on time.
      </Typography>

      <Card fitContent>
        <Typography as="h2" variant="h4" className="!mb-3 mt-0" centered={false}>
          Quick Results
        </Typography>

        <List
          listStyle="dashes"
          items={[
            'Load times improved 40% (LCP/FCP)',
            'Test coverage maintained ≥ 80%',
            'Delivered MVPs in 4–8 weeks',
          ]}
        />
      </Card>

      <div className="flex flex-col gap-2">
        <Typography as="h2" variant="h4" className="!mb-3 mt-0" centered={false}>
          What This Includes
        </Typography>

        <List
          listStyle="dashes"
          items={[
            'MVP → full product build using TS/Next.js',
            'Modular, maintainable architecture + clean code',
            'Performance-first setup: image optimization, SSR, caching',
            'End-to-end testing, deploy pipelines, and monitoring',
            'Documentation + handoff support',
          ]}
        />
      </div>

      <div className="mb-8 flex flex-col gap-2">
        <Typography as="h2" variant="h4" className="!mb-3 mt-0" centered={false}>
          Ideal For
        </Typography>

        <Typography centered={false}>
          Mentally exhausted product teams needing “ship-ready” web apps—or businesses sick of slow
          iterations.
        </Typography>
      </div>
    </div>

    <Cta text={undefined} ctaText="Contact me" centered />
  </DefaultLayout>
)
