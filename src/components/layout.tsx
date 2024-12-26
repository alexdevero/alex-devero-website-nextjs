import type { ReactNode } from 'react'

import Head from 'next/head'

import { Footer } from './footer'
import { Header } from './header'

export const Layout = ({ children, title }: { children: ReactNode | ReactNode[]; title: string }) => (
  <>
    {title && (
      <Head>
        <title>{`${title} | Alex Devero`}</title>
      </Head>
    )}

    <div className="flex min-h-screen w-screen flex-1 flex-col bg-white px-7 dark:bg-gray-900 dark:text-white">
      <Header />

      <main className="flex flex-1 flex-col">{children}</main>

      <Footer />
    </div>
  </>
)

export default Layout
