import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import { AppProviders } from '@/contexts/providers'
import '@/styles/global.css'

const gaId = process.env.GA_ID

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
        <AppProviders>{children}</AppProviders>

        <Analytics />
      </body>

      {gaId !== undefined && <GoogleAnalytics gaId={gaId} />}
    </html>
  )
}
