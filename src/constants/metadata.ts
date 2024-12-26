import type { Metadata } from 'next'

export const baseMetaTitle = 'Full-Stack TypeScript Development Services | React & Next.js Specialist'

export const baseMetadata = {
  title: `Alex Devero | ${baseMetaTitle}`,
  description: 'Full-stack TypeScript developer and React & Next.js specialist from Czech Republic.',
}

export const getMetadata = (title: string, description?: string): Metadata => ({
  ...baseMetadata,
  title: `${title} | ${baseMetaTitle}`,
  description: description || baseMetadata.description,
})
