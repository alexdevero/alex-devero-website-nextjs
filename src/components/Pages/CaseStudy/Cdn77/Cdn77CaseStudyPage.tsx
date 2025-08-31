import { Button } from '@/components/Button'
import { Card } from '@/components/Card/Card'
import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { List } from '@/components/List/List'
import { Tag } from '@/components/Tag/Tag'
import { Typography } from '@/components/Typography'
import { routes } from '@/constants/router'

import { getWorkDuration } from './utils'

export const Cdn77CaseStudyPage = () => (
  <DefaultLayout>
    <Button href={routes.work} variant="outline">
      {'<- Back'}
    </Button>

    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="flex flex-col items-center">
        <Typography as="h1" className="mb-4 max-w-3xl" variant="h1">
          Modernizing CDN77&apos;s Internal App
        </Typography>

        <Typography as="p" variant="body">
          Refactor + design-system migration of a three-year-old Next.js app to improve performance,
          maintainability, and developer velocity.
        </Typography>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
        <Tag label="Role: Full-Stack Developer" />
        <Tag label={`Duration: ${getWorkDuration('2023-12-01', 'present')} months`} />
        <Tag label="Stack: Next.js, TS, Node.js, REST/GraphQL, Tailwind CSS, Vitest" />
      </div>

      <Card fitContent>
        <Typography as="h2" centered={false} className="mt-0! mb-3!" variant="h4">
          Quick Results
        </Typography>

        <List
          items={[
            'Swapped legacy UI for a custom design system—consistent, future-proof UI',
            'Refactored for modularity—less coupling, cleaner code',
            'Integrated tests—deployment confidence, fewer regressions',
            'Ship velocity increased',
            'Scalable foundation set for next-gen app work',
          ]}
        />
      </Card>

      <Cta className="my-4!" ctaText="See more work" ctaUrl={routes.work} />

      <article className="space-y-6 lg:col-span-2">
        <Typography as="h2" variant="h3">
          Client & Context
        </Typography>
        <Typography>
          CDN77 is a global content delivery network (CDN) provider. Combining full live streaming
          and video-on-demand (VOD) services, CDN77 delivers seamless user experiences for its
          customers, covering everything from video streaming to infrastructure management.
        </Typography>

        <Typography as="h3" variant="h4">
          Problem / Constraints
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Legacy patterns slowing feature work',
            'Third-party UI lock-in',
            'Low test coverage → fragile deploys',
            'Refactor while shipping',
          ]}
        />

        <Typography as="h3" variant="h4">
          Approach
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Migrated from deprecated UI components to a custom design system',
            'Refactored monolithic components into modular ones with clear boundaries',
            'Added integration and unit tests with CI enforcement',
            'Performance audit with bundle optimizations',
          ]}
        />

        <Typography as="h3" variant="h4">
          Solution Highlights
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'New DS across key flows',
            'Lower coupling, clearer boundaries',
            'CI-backed tests prevent regressions',
            'Kept delivery on schedule',
          ]}
        />

        <Typography as="h3" variant="h4">
          Results
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'New features shipped seamlessly',
            'PR reviews faster and more confident',
            'Reduced bug chatter in deployment channels',
            'Onboarding new team members became smoother due to clearer patterns',
          ]}
        />

        <Typography as="h3" variant="h4">
          Learnings
        </Typography>
        <Typography>
          Refactoring and adding tests on the go doesn’t block delivery—it sets you up for
          sustainable velocity.
        </Typography>
      </article>

      <Cta className="my-4!" ctaText="See more work" ctaUrl={routes.work} />
    </div>
  </DefaultLayout>
)
