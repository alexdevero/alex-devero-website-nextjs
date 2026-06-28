import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import { JsonLd } from '@/components/JsonLd/JsonLd'
import { AppProviders } from '@/contexts/providers'
import { socialMedia } from '@/constants/links'
import '@/styles/global.css'

const gaId = process.env.GA_ID

// Person entity for search + AI answer engines. A single, disambiguated entity
// (name + role + sameAs profiles) is what lets ChatGPT/Perplexity/Claude attach
// a stable description to "Alex Devero".
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alex Devero',
  url: 'https://alexdevero.com',
  jobTitle: 'Senior Frontend Engineer (React/Next.js), Frontend Tech Lead',
  description:
    'Senior Frontend Engineer and Frontend Tech Lead with 10+ years building React, Next.js, and TypeScript applications.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Prague',
    addressCountry: 'CZ',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Frontend architecture',
    'Web performance',
    'Design systems',
  ],
  sameAs: [
    socialMedia.linkedIn,
    socialMedia.github,
    socialMedia.twitter,
    socialMedia.stackoverflow,
    socialMedia.codepen,
  ],
}

const inter = Inter({
  display: 'swap',
  subsets: ['latin-ext'],
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://alexdevero.com'),
  applicationName: 'Alex Devero',
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={inter.className} lang="en">
      <head>
        {/* <!-- Font Awesome --> */}
        <link
          crossOrigin="anonymous"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          rel="stylesheet"
        />
        {/* Check for theme preference on page load to avoid FOUC */}
        {/* TODO: Disabled because of hydration error */}
        {/* <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.toggle(
              'dark',
              localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            )`,
          }}
        /> */}
      </head>
      <body>
        <JsonLd data={personJsonLd} />
        <AppProviders>{children}</AppProviders>

        <Analytics />
      </body>

      {gaId !== undefined && <GoogleAnalytics gaId={gaId} />}
    </html>
  )
}
