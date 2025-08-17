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
      <Typography as="p" centered className="mb-0">
        Fast, scalable web apps. Avoid rewrite debt. Solve problems — then scale.
      </Typography>

      <Cta text={undefined} ctaText="Contact me" centered />
    </div>

    <div className="flex justify-center">
      <div className="flex max-w-3xl flex-col gap-6 lg:gap-10">
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
          <Card isInteractive>
            <Typography as="h3" variant="h6" centered={false} className="!mb-2 mt-0">
              Web Application Development
            </Typography>
            <Typography>
              Fast, scalable apps with clean code and device-safe UX, built reliably from MVP to v1.
            </Typography>
          </Card>
          <Card isInteractive>
            <Typography as="h3" variant="h6" centered={false} className="!mb-2 mt-0">
              Consulting & Code Audit
            </Typography>
            <Typography>
              Deep dive into performance, architecture, test suite, and technical health. Actionable
              fixes in 2–3 days.
            </Typography>
          </Card>
          <Card isInteractive>
            <Typography as="h3" variant="h6" centered={false} className="!mb-2 mt-0">
              Project-Based Delivery
            </Typography>
            <Typography>
              Need a feature or full web app? I deliver it with precision, testing, and a
              high-performance mindset.
            </Typography>
          </Card>
        </div>

        <div>
          <Card fitContent>
            <Typography as="h2" variant="h4" className="mb-4 mt-0" centered={false}>
              Why Work With Me
            </Typography>

            <List
              listStyle="dashes"
              items={[
                '9+ years years in JavaScript, TypeScript, React, Next.js.',
                'Built and scaled apps for CDN77, Digitoo (visual logos)',
                'UX-first approach meets code discipline',
                'Performance, test coverage, and velocity = standard',
              ]}
            />
          </Card>
        </div>

        <div className="mb-8">
          <Typography as="h2" variant="h4" className="mb-4" centered={false}>
            Availability
          </Typography>

          <Typography>Open to 3 projects per quarter. Book early.</Typography>
        </div>
      </div>
    </div>
  </DefaultLayout>
)
