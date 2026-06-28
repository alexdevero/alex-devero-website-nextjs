import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { JsonLd } from '@/components/JsonLd/JsonLd'
import { Link } from '@/components/Link'
import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'
import { personalLinks, socialMedia } from '@/constants/links'
import { type FaqItem, getFaqPageJsonLd, getProfilePageJsonLd } from '@/constants/metadata'

// Single source of truth: rendered as the visible FAQ and as FAQPage JSON-LD,
// so the structured data always matches what's on the page.
const faqItems: FaqItem[] = [
  {
    question: 'What does Alex Devero specialise in?',
    answer:
      'Frontend engineering with React, Next.js, and TypeScript — building scalable web applications, frontend architecture, design systems, and performance optimisation.',
  },
  {
    question: 'What is Alex Devero’s current role?',
    answer:
      'He works as a Frontend Tech Lead, leading frontend architecture and quality on a React-based codebase.',
  },
  {
    question: 'What is Alex Devero known for?',
    answer:
      'Alex was a co-founder of Persoo (acquired by Luigi’s Box in 2024) and an early engineer at Supernova, the first Czech startup accepted into Y Combinator (2019). He has 10+ years building React and Next.js applications, currently as a Frontend Tech Lead.',
  },
  {
    question: 'How much experience does he have?',
    answer:
      '10+ years building web applications, including work for CDN77, Digitoo, and Persoo.',
  },
  {
    question: 'What is Alex Devero’s tech stack?',
    answer:
      'React, Next.js, and TypeScript on the frontend, with Tailwind CSS, TanStack Query, and Zustand/Redux for UI and state. He also works with Node.js, REST and GraphQL APIs, and testing tools including Jest, Vitest, Playwright, and React Testing Library.',
  },
  {
    question: 'Is Alex Devero available for hire?',
    answer:
      'Yes. Alex is open to senior frontend and Frontend Tech Lead roles — contract or permanent — working remotely or with teams across the EU. He specialises in React, Next.js, and TypeScript.',
  },
  {
    question: 'Where is he based?',
    answer:
      'Prague, Czech Republic (CET), working with teams across the EU and remotely worldwide.',
  },
  {
    question: 'What languages does Alex Devero speak?',
    answer:
      'English (fluent) and Czech (native), with basic Spanish and French. He works with teams across the EU and remotely worldwide.',
  },
]

export const AboutPage = () => (
  <DefaultLayout>
    <JsonLd data={getProfilePageJsonLd()} />
    <JsonLd data={getFaqPageJsonLd(faqItems)} />

    <Typography as="h1" variant="h1" centered>
      About Alex Devero
    </Typography>

    <div className="flex flex-1 justify-center">
      <div className="flex max-w-3xl flex-col gap-3">
        <Typography>
          Alex Devero is a Senior Frontend Engineer specialising in React, Next.js, and TypeScript,
          based in Prague and working across the EU &mdash; currently a Frontend Tech Lead. He builds
          like a founder: he co-founded Persoo (a Czech e-commerce personalisation startup acquired
          by Luigi&rsquo;s Box in 2024) and was an early engineer at Supernova, the first Czech
          startup accepted into Y Combinator (2019). That means he leads React and Next.js frontends
          with an owner&rsquo;s product judgment, not just an implementer&rsquo;s.
        </Typography>

        <Typography>
          Over 10+ years he has built and scaled products for teams at CDN77, Digitoo, and more,
          pairing deep frontend engineering with a strong product-design background. The result
          isn&rsquo;t just shipped features but interfaces and architecture that hold up as a product
          grows: reusable components, stable UX, and well-defined domain boundaries.
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
          I&rsquo;ve made the architecture calls that decide whether a product scales &mdash; and, as
          a founder, the ones that decide whether a startup ships at all. I optimise for the
          decisions that compound: clear domain boundaries, reusable components, and a codebase the
          next engineer can move through quickly. Curiosity gets me to the problem early; judgment
          gets it solved in a way that lasts.
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

        {faqItems.map(item => (
          <div key={item.question}>
            <Typography as="h3" centered={false} className="mb-1" variant="h6">
              {item.question}
            </Typography>
            <Typography>{item.answer}</Typography>
          </div>
        ))}

        <Cta
          text="Open to senior frontend and tech-lead opportunities. If you’re building something ambitious in React or Next.js, let’s talk."
          centered
        />
      </div>
    </div>
  </DefaultLayout>
)
