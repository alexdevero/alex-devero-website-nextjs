import type { FC } from 'react'

type JsonLdProps = {
  data: Record<string, unknown>
}

// Renders a JSON-LD structured-data block. Search engines and AI answer
// engines read this to understand the page as a structured entity.
export const JsonLd: FC<JsonLdProps> = ({ data }) => (
  <script
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    type="application/ld+json"
  />
)
