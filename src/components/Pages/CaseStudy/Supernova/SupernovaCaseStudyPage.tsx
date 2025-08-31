import type { FC } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card/Card'
import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { List } from '@/components/List/List'
import { Tag } from '@/components/Tag/Tag'
import { Typography } from '@/components/Typography'
import { routes } from '@/constants/router'

import { getWorkDuration } from '../Cdn77/utils'

export const SupernovaCaseStudyPage: FC = () => (
  <DefaultLayout>
    <Button href={routes.work} variant="outline">
      {'<- Back'}
    </Button>

    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="flex flex-col items-center">
        <Typography as="h1" className="max-w-3xl" variant="h1">
          Building from Scratch at Supernova: Laying the Foundation for a Y Combinator Startup
        </Typography>

        <Typography as="p" variant="body">
          Joined as an early frontend developer to architect the product, scale the codebase, and
          drive the mission that redefined design-to-code tooling.
        </Typography>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
        <Tag label="Role: Frontend & React Developer" />
        <Tag label={`Duration: ${getWorkDuration('2017-03-01', '2019-02-28')} months`} />
        <Tag label="Stack: React, TypeScript, SCSS/Sass" />
      </div>

      <Card fitContent>
        <Typography as="h2" centered={false} className="mt-0! mb-3!" variant="h4">
          Quick Results
        </Typography>

        <List
          items={[
            'Built core React + TypeScript MVP from the ground up',
            'Architected scalable frontend structure in a 4–5 person startup',
            'Delivered high-fidelity design-to-code features from Sketch files',
            'Set direction for maintainable, scalable frontend architecture',
            'Supernova later became the first Czech startup accepted into YC (2019)',
          ]}
        />
      </Card>

      <Cta className="my-4!" ctaText="See more work" ctaUrl={routes.work} />

      <article className="space-y-6 lg:col-span-2">
        <Typography as="h2" variant="h3">
          Client & Context
        </Typography>
        <Typography>
          Supernova was a Prague-based seed-stage startup (4–5 people) in 2017–18, focused on
          automating the process of converting Sketch design files into production-ready React/React
          Native code—primarily to build an MVP to attract early users and capital.
        </Typography>

        <Typography as="h3" variant="h4">
          Challenges / Constraints
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Small team under time pressure to ship MVP',
            'No existing frontend structure—had to build from scratch',
            'Need to transform design assets into reusable, maintainable code',
            'UI had to be flexible, dynamic, and scalable amidst evolving requirements',
          ]}
        />

        <Typography as="h3" variant="h4">
          Approach
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Bootstrapped core web app using React + TypeScript from day one',
            'Collaborated directly with CEO (front-end & product/UX) to shape the architecture',
            'Crafted modular component patterns to handle design-to-code flow',
            'Used SCSS for structured styling and maintainability',
            'Integrated evolving product feedback into continuous iterations',
          ]}
        />

        <Typography as="h3" variant="h4">
          Results & Impact
        </Typography>

        <List
          className="list-disc pl-5"
          items={[
            'A functional MVP capable of supporting early testers and investors',
            'Scalability—Supernova evolved into a company, later accepted into Y Combinator’s Winter 2019 batch, the first Czech startup to do so',
            'Foundation for current product evolution into a sophisticated design system automation platform used by thousands and raising multi-million-dollar funding rounds',
          ]}
        />

        <Typography as="h3" variant="h4">
          Learnings
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Early architecture choices drive or derail future scale',
            'Partnering with product leadership tightens implementation and vision',
            'MVP, done cleanly, becomes the launchpad—not the endpoint',
          ]}
        />

        <Typography as="h3" variant="h4">
          Aftermath
        </Typography>
        <Typography>
          Supernova was accepted into Y Combinator’s Winter 2019 batch, the first Czech startup to
          do so. In 2022, Supernova raised $4.8M in its first seed round and grew to 30+ employees.
        </Typography>
      </article>

      <Cta className="my-4!" ctaText="See more work" ctaUrl={routes.work} />
    </div>
  </DefaultLayout>
)
