import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Link } from '@/components/Link'
import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'
import { personalLinks, socialMedia } from '@/constants/links'

export const AboutPage = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1" centered>
      About Alex Devero
    </Typography>

    <div className="flex flex-1 justify-center">
      <div className="flex max-w-3xl flex-col gap-3">
        <Typography>
          Alex Devero is a Senior Frontend Engineer specialising in React, Next.js, and TypeScript,
          based in Prague and working across the EU. He has 10+ years of experience building fast,
          reliable, and scalable web applications, and currently works as a Frontend Tech Lead.
        </Typography>

        <Typography>
          He has built and scaled products for companies including CDN77, Digitoo, and Persoo,
          pairing deep frontend engineering with a strong product design background &mdash; so the
          work isn&rsquo;t just shipped features, but interfaces and architecture that hold up as a
          product grows.
        </Typography>

        <Typography as="h2" centered={false} className="mb-1" variant="h4">
          What I do now
        </Typography>

        <Typography>
          As a Frontend Tech Lead, I set frontend architecture, raise code quality, and help teams
          ship complex React applications with confidence. My focus is on reusable components, stable
          UX behaviour, performance, and well-defined domain boundaries &mdash; the things that keep
          a codebase maintainable past the first release.
        </Typography>

        <Typography as="h2" centered={false} className="mb-1" variant="h4">
          How I work
        </Typography>

        <Typography>
          Building things is what I do best. Whether it&rsquo;s an app, a business idea, or a new
          product concept, I&rsquo;m wired to turn ideas into execution. That mix of curiosity and
          delivery helps me spot problems early and build solutions that last.
        </Typography>

        <Typography>Outside of code, you&rsquo;ll usually find me:</Typography>
        <List
          items={[
            'Training at the gym (my daily discipline anchor).',
            'Reading about startups, tech innovation, and the great builders of history.',
            'Experimenting with new tools and frameworks to push what’s possible.',
          ]}
          listStyle="dashes"
        />

        <Typography as="h2" centered={false} className="mb-1" variant="h4">
          Writing &amp; sharing
        </Typography>

        <Typography>
          I believe in sharing knowledge and giving back. On my{' '}
          <Link href={personalLinks.blog}>blog</Link>, I write about React, Next.js, frontend
          architecture, and the lessons learned building products from the ground up. I&rsquo;m also
          a lifelong learner &mdash; you&rsquo;ll find my{' '}
          <Link href={socialMedia.goodreads}>Goodreads</Link> filled with everything from software
          engineering to business strategy and biographies of great founders.
        </Typography>

        <Typography as="h2" centered={false} className="mb-1" variant="h4">
          Frequently asked questions
        </Typography>

        <Typography as="h3" centered={false} className="mb-1" variant="h6">
          What does Alex Devero specialise in?
        </Typography>
        <Typography>
          Frontend engineering with React, Next.js, and TypeScript &mdash; building scalable web
          applications, frontend architecture, design systems, and performance optimisation.
        </Typography>

        <Typography as="h3" centered={false} className="mb-1" variant="h6">
          What is Alex Devero&rsquo;s current role?
        </Typography>
        <Typography>
          He works as a Frontend Tech Lead, leading frontend architecture and quality on a
          React-based codebase.
        </Typography>

        <Typography as="h3" centered={false} className="mb-1" variant="h6">
          How much experience does he have?
        </Typography>
        <Typography>
          10+ years building web applications, including work for CDN77, Digitoo, and Persoo.
        </Typography>

        <Typography as="h3" centered={false} className="mb-1" variant="h6">
          Where is he based?
        </Typography>
        <Typography>
          Prague, Czech Republic (CET), working with teams across the EU and remotely worldwide.
        </Typography>

        <Cta
          text="Open to senior frontend and tech-lead opportunities. If you’re building something ambitious in React or Next.js, let’s talk."
          centered
        />
      </div>
    </div>
  </DefaultLayout>
)
