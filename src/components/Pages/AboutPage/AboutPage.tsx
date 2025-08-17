import { List } from '@/components/List/List'
import { personalLinks, socialMedia } from '@/constants/links'

import { Cta } from '../../Cta/Cta'
import { DefaultLayout } from '../../DefaultLayout'
import { Link } from '../../Link'
import { Typography } from '../../Typography'

export const AboutPage = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1" centered>
      About Alex Devero
    </Typography>

    <div className="flex flex-1 justify-center">
      <div className="flex max-w-3xl flex-col gap-3">
        <Typography>
          Hi, I’m Alex Devero — a TypeScript/React/Next.js specialist based in Prague. I help
          companies build fast, reliable, and scalable web apps that cut load times, improve
          conversions, and ship on schedule.
        </Typography>

        <Typography>
          I combine 5+ years of front-end expertise with a strong product design background, which
          means I don’t just code features — I deliver products users love.
        </Typography>

        <Typography as="h2" variant="h4" className="mb-1" centered={false}>
          What Drives Me
        </Typography>

        <Typography>
          Building things is what I do best. Whether it’s an app, a business idea, or a new product
          concept, I’m wired to turn ideas into execution.
        </Typography>

        <Typography>Outside of code, you’ll usually find me:</Typography>
        <List
          listStyle="dashes"
          items={[
            'Training at the gym (my daily discipline anchor).',
            'Reading about startups, tech innovation, and the great builders of history.',
            'Experimenting with new tools and frameworks to push what’s possible.',
          ]}
        />

        <Typography>
          This mix of curiosity and execution helps me spot problems fast and create solutions that
          last.
        </Typography>

        <Typography as="h2" variant="h4" className="mb-1" centered={false}>
          Beyond the Code
        </Typography>

        <Typography>
          I believe in sharing knowledge and giving back. On my{' '}
          <Link href={personalLinks.blog}>blog</Link>, I write about React, Next.js, startups, and
          the lessons learned building projects from the ground up.
        </Typography>

        <Typography>
          I’m also a lifelong learner — you’ll find my{' '}
          <Link href={socialMedia.goodreads}>Goodreads</Link> filled with everything from software
          engineering to business strategy and biographies of great founders.
        </Typography>

        <Cta
          text="Whether you need a high-performance React/Next.js app or want to brainstorm your next big project, let’s connect."
          centered
        />
      </div>
    </div>
  </DefaultLayout>
)
