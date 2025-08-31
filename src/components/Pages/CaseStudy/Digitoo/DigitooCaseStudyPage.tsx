import { Button } from '@/components/Button'
import { Card } from '@/components/Card/Card'
import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { List } from '@/components/List/List'
import { Tag } from '@/components/Tag/Tag'
import { Typography } from '@/components/Typography'
import { routes } from '@/constants/router'

import { getWorkDuration } from '../Cdn77/utils'

export const DigitooCaseStudyPage = () => (
  <DefaultLayout>
    <Button href={routes.work} variant="outline">
      {'<- Back'}
    </Button>

    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="flex flex-col items-center">
        <Typography as="h1" className="max-w-3xl" variant="h1">
          Transforming Digitoo’s MVP into a Scalable Customer-Facing Platform
        </Typography>

        <Typography as="p" variant="body">
          Convert MVP into SSR-powered Next.js app, reusable Tailwind components, and launch with
          40+ clients onboarded.
        </Typography>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
        <Tag label="Role: Frontend React → Next.js" />
        <Tag label={`Duration: ${getWorkDuration('2021-06-01', '2023-11-30')} months`} />
        <Tag label="Stack: Next.js, TS, Tailwind CSS, Nx monorepo" />
      </div>

      <Card fitContent>
        <Typography as="h2" centered={false} className="mt-0! mb-3!" variant="h4">
          Quick Results
        </Typography>

        <List
          items={[
            'Migrated React MVP → Next.js (SSR + scalability)',
            'Replaced Material-UI with Tailwind for speed & modern UI',
            'Built reusable component library → faster feature dev',
            'Delivered 7 major features (~9,000 LOC each)',
            'Onboarded 30+ new clients via platform',
            'Lifted frontend test coverage + reduced production bugs',
          ]}
        />
      </Card>

      <Cta className="my-4!" ctaText="See more work" ctaUrl={routes.work} />

      <article className="space-y-6 lg:col-span-2">
        <Typography as="h2" variant="h3">
          Client & Context
        </Typography>
        <Typography>
          Digitoo needed to evolve its React MVP into a scalable, client-facing platform. I joined
          early as a frontend contractor to drive modernization, launch key features, and enable
          secure customer onboarding.
        </Typography>

        <Typography as="h3" variant="h4">
          Challenges / Constraints
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Legacy React app with client-side rendering and performance hiccups',
            'Heavy Material-UI CSS slows builds and UI delivery',
            'Monolithic codebase slowing feature velocity',
            'No testing strategy → fragile deploys',
            'MVP-focused architecture—not ready for real-world scale',
          ]}
        />

        <Typography as="h3" variant="h4">
          Approach
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Migrated core platform to Next.js for SSR and scalability',
            'Replaced Material-UI with Tailwind — faster builds, leaner styles',
            'Refactored code into a modular structure within Nx monorepo',
            'Built a reusable component library to speed up future features',
            'Integrated frontend tests for stability',
            'Collaborated with backend + designers for core feature delivery',
          ]}
        />

        <Typography as="h3" variant="h4">
          Results
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Upgraded architecture and performance — improved UX and long-term maintainability',
            'Feature delivery ramped up — 7 major features shipped (~9k LOC each)',
            'Enabled onboarding of 40+ clients through the platform',
            'Reduced UI fragility, fewer production bugs thanks to tests',
            'Marketing landing pages delivered quickly, supporting growth initiatives',
          ]}
        />

        <Typography as="h3" variant="h4">
          Learnings
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'SSR and modular architecture transform app performance & team velocity',
            'Building with scalability in mind pays off exponentially later',
            'Startup environments reward clean, test-backed architecture and rapid experimentation',
          ]}
        />
      </article>

      <Cta className="my-4!" ctaText="See more work" ctaUrl={routes.work} />
    </div>
  </DefaultLayout>
)
