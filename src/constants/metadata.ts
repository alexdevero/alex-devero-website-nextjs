import type { Metadata } from 'next'

export const baseMetaTitle = 'Full-Stack TypeScript Development Services | React & Next.js Specialist'

export const baseMetadata = {
  title: `Alex Devero | ${baseMetaTitle}`,
  description:
    'Offering expert full-stack TypeScript development, specializing in React and Next.js applications. Available for freelance projects and consulting. Limited availability—book your project today.',
}

export const getMetadata = (title: string, description?: string): Metadata => ({
  ...baseMetadata,
  title: `${title} | ${baseMetaTitle}`,
  description: description || baseMetadata.description,
})
