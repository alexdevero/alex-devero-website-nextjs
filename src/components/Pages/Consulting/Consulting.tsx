import type { FC } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card/Card'
import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'
import { pageTitles } from '@/constants/page-titles'

export const ConsultingPage: FC = () => (
  <DefaultLayout>
    <Button href="/services" variant="outline">
      {'<- Back'}
    </Button>

    <Typography as="h1" variant="h1" centered>
      {pageTitles.consulting}
    </Typography>

    <div className="mx-auto flex max-w-3xl flex-col gap-8 md:gap-12">
      <Typography>
        Deep code audits and expert consulting that identify hidden performance bottlenecks,
        architecture flaws, and technical debt—results in days, not months.
      </Typography>

      <Card fitContent>
        <Typography as="h2" centered={false} className="!mb-3 mt-0" variant="h4">
          Quick Results
        </Typography>

        <List
          items={[
            '5–10 actionable findings per audit',
            'Speed bottlenecks located and numbered',
            'Test coverage and CI recommendations provided',
          ]}
          listStyle="dashes"
        />
      </Card>

      <div className="flex flex-col gap-2">
        <Typography as="h2" centered={false} className="!mb-3 mt-0" variant="h4">
          What This Includes
        </Typography>

        <List
          items={[
            'Performance review (Lighthouse, profiling, bundling)',
            'Architecture & tech stack health check (scalability, modularity)',
            'Test coverage audit + recommendation report',
            'CI/CD setup review, build pipelines, pull-request flow',
            'Written audit with prioritized fix list + video walkthrough',
          ]}
          listStyle="dashes"
        />
      </div>

      <div className="mb-8 flex flex-col gap-2">
        <Typography as="h2" centered={false} className="!mb-3 mt-0" variant="h4">
          Ideal For
        </Typography>

        <Typography centered={false}>
          Teams stuck in slow delivery cycles or inheriting legacy code—who want surgical clarity
          and fast wins.
        </Typography>
      </div>
    </div>

    <Cta ctaText="Contact me" text={undefined} centered />
  </DefaultLayout>
)
