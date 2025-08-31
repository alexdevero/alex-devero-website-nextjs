import type { FC } from 'react'

import { Card } from '@/components/Card/Card'
import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'
import { pageTitles } from '@/constants/page-titles'

export const ServicesPage: FC = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1" centered>
      {pageTitles.services}
    </Typography>

    <div className="mx-auto flex max-w-3xl flex-col">
      <Typography as="p" className="mb-0" centered>
        Fast, scalable web apps. Avoid rewrite debt. Solve problems — then scale.
      </Typography>

      <Cta ctaText="Contact me" text={undefined} centered />
    </div>

    <div className="mt-4 flex justify-center">
      <div className="flex max-w-3xl flex-col gap-6 lg:gap-14">
        {/* <Typography>
            Hi! I'm Alex Devero, a full-stack TypeScript developer with over 10 years of experience
            building web applications that don't just work—they wow. I specialize in React and
            Next.js, crafting scalable, high-performance apps with a focus on great user
            experiences.
          </Typography>

          <Typography>
            Whether you're an individual with an idea, a startup in need of momentum, or a business
            aiming to level up your digital game, I'm here to help you turn your vision into
            reality.
          </Typography>

          <Typography>
            With a background in product design, I bring a unique mix of technical expertise and
            UX-first thinking to every project. My goal? To create solutions that not only solve
            real-world problems but make life a little easier (and more enjoyable) for the people
            who use them.
          </Typography> */}

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <Card href="/services/web-app-development" isInteractive>
            <Typography as="h3" centered={false} className="!mb-2 mt-0" variant="h6">
              Web Application Development
            </Typography>
            <Typography>
              Build fast, scalable TypeScript/Next.js applications—MVP through full-scale
              product—built with clean architecture, and on-time delivery.
            </Typography>
            <span className="block text-right text-gray-400">→</span>
          </Card>
          <Card href="/services/consulting" isInteractive>
            <Typography as="h3" centered={false} className="!mb-2 mt-0" variant="h6">
              Consulting & Code Audit
            </Typography>
            <Typography>
              Deep-dive performance, testing, and architecture audits with actionable feedback in
              days—not weeks—to optimize velocity and delivery quality.
            </Typography>
            <span className="block text-right text-gray-400">→</span>
          </Card>
          <Card href="/services/project-based-delivery" isInteractive>
            <Typography as="h3" centered={false} className="!mb-2 mt-0" variant="h6">
              Project-Based Delivery
            </Typography>
            <Typography>
              Need a feature or full app delivered right, first time? I deliver polished,
              high-performance solutions end-to-end—with test coverage and quality built-in.
            </Typography>
            <span className="block text-right text-gray-400">→</span>
          </Card>
        </div>

        <Card fitContent>
          <Typography as="h2" centered={false} className="mb-4 mt-0" variant="h4">
            Why Work With Me
          </Typography>

          <List
            items={[
              '9+ years years in JavaScript, TypeScript, React, Next.js.',
              'Built and scaled apps for CDN77, Digitoo (visual logos)',
              'UX-first approach meets code discipline',
              'Performance, test coverage, and velocity = standard',
            ]}
            listStyle="dashes"
          />
        </Card>

        <div className="mb-8">
          <Typography as="h2" centered={false} className="mb-4" variant="h4">
            Availability
          </Typography>

          <Typography>Open to 3 projects per quarter. Book early.</Typography>
        </div>
      </div>
    </div>
  </DefaultLayout>
)
