import type { Metadata } from 'next'

type MetaOpts = {
  description?: string
  index?: boolean // control robots
  ogImage?: { alt?: string; height?: number; url: string; width?: number }
  ogType?: 'website' | 'article'
  pathname?: string // e.g. '/services'
  title: string
  twitterImage?: string // can mirror ogImage.url
}

export const siteName = 'Alex Devero'

// One canonical identity, repeated across the site so search and AI answer
// engines can attach a single stable description to the "Alex Devero" entity.
export const roleTitle = 'Senior Frontend Engineer (React/Next.js)'

const defaultDescription =
  'Alex Devero is a Senior Frontend Engineer and Frontend Tech Lead with 10+ years building React and Next.js applications - frontend architecture that holds up under real product complexity.'

export const getMetadata = ({
  title,
  description,
  pathname = '/',
  ogImage,
  twitterImage,
  ogType = 'website',
  index = true,
}: MetaOpts): Metadata => {
  const fullTitle = `${title} | ${siteName}`
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
      locale: 'en_GB',
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

const siteUrl = 'https://alexdevero.com'

type CaseStudyJsonLdOpts = {
  about: string // the company the case study is about
  datePublished: string // ISO date, e.g. '2025-01-05'
  description: string
  headline: string
  keywords?: string[]
  pathname: string // e.g. '/case-study/cdn77'
}

// Article structured data for a case study, attributed to the Alex Devero
// Person entity so AI answer engines can connect the write-up to its author.
export const getCaseStudyJsonLd = ({
  about,
  datePublished,
  description,
  headline,
  keywords,
  pathname,
}: CaseStudyJsonLdOpts): Record<string, unknown> => {
  const url = new URL(pathname, siteUrl).toString()

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage: 'en',
    datePublished,
    author: {
      '@type': 'Person',
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: siteName,
      url: siteUrl,
    },
    about: {
      '@type': 'Organization',
      name: about,
    },
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
  }
}
