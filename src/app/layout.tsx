import { ReactNode } from 'react'

import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'react-medium-image-zoom/dist/styles.css'

import '@/styles/global.css'

const inter = Inter({
  display: 'swap',
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'Alex Devero',
  description: 'Entrepreneur, designer and developer from Czech Republic.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <head>
        {/* <!-- Font Awesome --> */}
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.5.0/css/all.css'
          integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU'
          crossOrigin='anonymous'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
