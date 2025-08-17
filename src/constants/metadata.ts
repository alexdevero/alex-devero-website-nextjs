import type { Metadata } from 'next'

type MetaOpts = {
  title: string
  description?: string
  pathname?: string // e.g. '/services'
  ogImage?: { url: string; width?: number; height?: number; alt?: string }
  twitterImage?: string // can mirror ogImage.url
  ogType?: 'website' | 'article'
  index?: boolean // control robots
}

export const baseMetaTitle = 'Full-stack developer - TypeScript, React & Next.js specialist'

export const siteName = 'Alex Devero'

const defaultDescription =
  'TypeScript/React/Next.js specialist. I build fast, reliable web apps, deliver on time, and improve performance. Available for select freelance and consulting engagements.'

export const baseMetadata = {
  title: `Alex Devero | ${baseMetaTitle}`,
  description:
    'Offering expert full-stack TypeScript development, specializing in React and Next.js applications. Available for freelance projects and consulting. Limited availability—book your project today.',
}

export const getMetadata = ({
  title,
  description,
  pathname = '/',
  ogImage,
  twitterImage,
  ogType = 'website',
  index = true,
}: MetaOpts): Metadata => {
  const fullTitle = `${title} | ${baseMetaTitle} | ${siteName}`
  const desc = description ?? defaultDescription
  const url = new URL(pathname, 'https://alexdevero.com').toString()

  return {
    title: fullTitle,
    description: desc,
    alternates: {
      canonical: url,
      // languages: { 'en-US': url, 'cs-CZ': 'https://alexdevero.com/cs' } // when/if localized
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      type: ogType,
      url,
      siteName,
      locale: 'en_US',
      images: ogImage
        ? [
            {
              url: ogImage.url,
              width: ogImage.width ?? 1200,
              height: ogImage.height ?? 630,
              alt: ogImage.alt ?? title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      site: '@alexdevero',
      creator: '@alexdevero',
      images: twitterImage ? [twitterImage] : ogImage ? [ogImage.url] : undefined,
    },
    robots: {
      index,
      follow: index,
      // Optional enhancements:
      // maxSnippet: -1,
      // maxImagePreview: 'large',
      // maxVideoPreview: -1,
    },
  }
}
