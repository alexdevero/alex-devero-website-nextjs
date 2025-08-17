import type { Metadata } from 'next'

export const baseMetaTitle = 'Full-stack developer and TypeScript, React & Next.js specialist'

export const baseMetadata = {
  title: `Alex Devero | ${baseMetaTitle}`,
  description:
    'Offering expert full-stack TypeScript development, specializing in React and Next.js applications. Available for freelance projects and consulting. Limited availability—book your project today.',
}

export const getMetadata = (title: string, description?: string): Metadata => ({
  ...baseMetadata,
  title: `${title} | ${baseMetaTitle}`,
  description: description || baseMetadata.description,
  openGraph: {
    title: `${title} | ${baseMetaTitle}`,
    description: description || baseMetadata.description,
    type: 'website',
    url: 'https://alexdevero.com',
    siteName: 'Alex Devero',
  },
  twitter: {
    title: `${title} | ${baseMetaTitle}`,
    description: description || baseMetadata.description,
    card: 'summary_large_image',
  },
})
