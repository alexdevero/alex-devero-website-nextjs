import type { FC } from 'react'

type JsonLdProps = {
  data: Record<string, unknown>
}

// Renders a JSON-LD structured-data block. Search engines and AI answer
// engines read this to understand the page as a structured entity.
// `<` is escaped so a value containing "</script>" can't break out of the tag.
export const JsonLd: FC<JsonLdProps> = ({ data }) => (
  <script
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    type="application/ld+json"
  />
)
