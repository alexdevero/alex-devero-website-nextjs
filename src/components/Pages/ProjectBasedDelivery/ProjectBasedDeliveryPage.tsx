import type { FC } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card/Card'
import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'
import { pageTitles } from '@/constants/page-titles'

export const ProjectBasedDeliveryPage: FC = () => (
  <DefaultLayout>
    <Button href="/services" variant="outline">
      {'<- Back'}
    </Button>

    <Typography as="h1" variant="h1" centered>
      {pageTitles.projectBasedDelivery}
    </Typography>

    <div className="mx-auto flex max-w-3xl flex-col gap-8 md:gap-12">
      <Typography>
        Launching a feature or full app? Let me build it—clean, tested, high-performance, and
        totally finished.
      </Typography>

      <Card fitContent>
        <Typography as="h2" variant="h4" className="!mb-3 mt-0" centered={false}>
          Quick Results
        </Typography>

        <List
          listStyle="dashes"
          items={[
            'Feature shipped with ≥ 80% test coverage',
            'Project delivered below budget by 15%',
            'UX uplift via design-system templates applied',
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
            'Full scoping (requirements → dev plan)',
            'Efficient build with TS/React/Next, design system, responsive UI',
            'Built-in unit/integration testing, test suites, automation',
            'Documentation + post-launch support (30 days)',
            'Delivery-ready with clean pull-requests and deployment notes',
          ]}
        />
      </div>

      <div className="mb-8 flex flex-col gap-2">
        <Typography as="h2" variant="h4" className="!mb-3 mt-0" centered={false}>
          Ideal For
        </Typography>

        <Typography centered={false}>
          Startups or product teams needing a high-quality delivery, not hype: fast, clean, and
          exactly how you’d build it yourself.
        </Typography>
      </div>
    </div>

    <Cta text={undefined} ctaText="Contact me" centered />
  </DefaultLayout>
)
