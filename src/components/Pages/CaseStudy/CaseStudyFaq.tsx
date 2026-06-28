import type { FC } from 'react'

import { JsonLd } from '@/components/JsonLd/JsonLd'
import { Typography } from '@/components/Typography'
import { type FaqItem, getFaqPageJsonLd } from '@/constants/metadata'

// Renders a case study's FAQ as both visible Q&A and FAQPage JSON-LD from a
// single item list, so the structured data always matches the page.
export const CaseStudyFaq: FC<{ items: FaqItem[] }> = ({ items }) => (
  <section className="flex flex-col gap-3">
    <JsonLd data={getFaqPageJsonLd(items)} />

    <Typography as="h2" variant="h3">
      Frequently asked questions
    </Typography>

    {items.map(item => (
      <div key={item.question}>
        <Typography as="h3" centered={false} className="mb-1" variant="h4">
          {item.question}
        </Typography>
        <Typography>{item.answer}</Typography>
      </div>
    ))}
  </section>
)
