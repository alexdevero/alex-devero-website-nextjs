import type { FC } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card/Card'
import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { List } from '@/components/List/List'
import { Tag } from '@/components/Tag/Tag'
import { Typography } from '@/components/Typography'
import { routers } from '@/constants/router'

import { getWorkDuration } from '../Cdn77/utils'

export const PersooCaseStudyPage: FC = () => (
  <DefaultLayout>
    <Button href={routers.work} variant="outline">
      {'<- Back'}
    </Button>

    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="flex flex-col items-center">
        <Typography as="h1" className="max-w-3xl" variant="h1">
          Evolving Persoo: From Integration to Leadership in Personalized E-Commerce
        </Typography>

        <Typography as="p" variant="body">
          Custom JavaScript widget revamps, UI modernization, and team leadership that scaled
          delivery and set the company&apos;s product vision.
        </Typography>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
        <Tag label="Role: Frontend Developer → Co-Founder" />
        <Tag label={`Duration: ${getWorkDuration('2019-03-01', '2021-04-30')} months`} />
        <Tag label="Stack: JavaScript (ES6+), HTML, CSS" />
      </div>

      <Card fitContent>
        <Typography as="h2" centered={false} className="mt-0! mb-3!" variant="h4">
          Quick Results
        </Typography>

        <List
          items={[
            'Rebuilt search widget for performance & accuracy',
            'Developed responsive, customizable recommendation carousels',
            'Eliminated jQuery → modern JavaScript stack',
            'Reduced project delivery time via refactored workflows',
            'Led and mentored team to level up implementation standards',
            'Influenced product strategy as co-founder',
          ]}
        />
      </Card>

      <Cta className="my-4!" ctaText="See more work" ctaUrl={routers.work} />

      <article className="space-y-6 lg:col-span-2">
        <Typography as="h2" variant="h3">
          Client & Context
        </Typography>
        <Typography>
          Persoo, a Czech e-commerce startup offering behavior-based search, recommendations, and
          dynamic upsell/cross-sell tools, needed us to elevate its client integrations and product
          reliability. I joined as a frontend developer, later becoming a co-founder and
          contributing strategically.
        </Typography>

        <Typography as="h3" variant="h4">
          Challenges / Constraints
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Legacy widgets slowed load times and were not responsive',
            'Implementation workflows were slow and inconsistent',
            'UI depended on jQuery, limiting flexibility',
            'No team codified best practices or modern standards',
          ]}
        />

        <Typography as="h3" variant="h4">
          Approach
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Rewrote the search widget using modern JS for performance and search accuracy',
            'Redeveloped recommendation carousels to be responsive and easily stylable per client',
            'Removed jQuery—migrated to vanilla and ES6 patterns',
            'Formalized onboarding and implementation practices; mentored junior developers',
            'Collaborated cross-functionally in product strategy and roadmap definition',
          ]}
        />

        <Typography as="h3" variant="h4">
          Results
        </Typography>

        <List
          className="list-disc pl-5"
          items={[
            'Performance Improved: Search and carousel UIs load faster and are more reliable',
            'Deployment Accelerated: Workflow efficiency reduced delivery time',
            'Modern Codebase: Scalable, maintainable code without legacy dependencies',
            'Stronger Team: Onboarded and guided high-performing implementation developers',
            'Strategic Impact: As co-founder, shaped product direction and growth',
          ]}
        />

        <Typography as="h3" variant="h4">
          Learnings
        </Typography>
        <List
          className="list-disc pl-5"
          items={[
            'Balance between building and leading—mentoring engineers while owning delivery',
            'Modern JS transformation allows performance and agility gains',
            'Developer advocacy in product decisions yields better alignment and execution',
          ]}
        />

        <Typography as="h3" variant="h4">
          Aftermath
        </Typography>
        <Typography>
          Persoo was acquired by Slovak competitor Luigi’s Box in a multi‑million‑euro deal in early
          2024, consolidating their position as the leader in search optimization across the Czech
          and Slovak markets.
        </Typography>
      </article>

      <Cta className="my-4!" ctaText="See more work" ctaUrl={routers.work} />
    </div>
  </DefaultLayout>
)
