import type { FC } from 'react'

import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { FaqSection } from '@/components/FaqSection/FaqSection'
import { Typography } from '@/components/Typography'
import type { FaqItem } from '@/constants/metadata'

import { Timeline } from './Timeline'

const faqItems: FaqItem[] = [
  {
    question: 'What companies has Alex Devero worked with?',
    answer:
      'Over 10+ years, Alex Devero has built and scaled products for CDN77, Digitoo, Persoo (as co-founder), Supernova, and StartMonday — in frontend and tech-lead roles using React, Next.js, and TypeScript.',
  },
  {
    question: 'What is Alex Devero’s career background?',
    answer:
      'Alex is a Senior Frontend Engineer and current Frontend Tech Lead. He co-founded Persoo (acquired by Luigi’s Box in 2024), was an early engineer at Supernova (the first Czech startup accepted into Y Combinator, 2019), and now leads frontend at CDN77.',
  },
]

export const WorkPage: FC = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1" centered>
      Selected Work
    </Typography>

    <Typography as="p" className="mx-auto mb-10 max-w-2xl" variant="body" centered>
      A timeline of the companies Alex Devero has built and scaled products for as a frontend
      engineer and tech lead — from CDN77 and Digitoo to Persoo, Supernova, and StartMonday.
    </Typography>

    <Timeline />

    <div className="mx-auto mt-12 w-full max-w-3xl">
      <FaqSection items={faqItems} />
    </div>

    <Cta
      className="mt-12!"
      text="Want the full picture? See my résumé, or get in touch about senior frontend and tech-lead roles."
    />
  </DefaultLayout>
)
