import { memo, ReactChild } from 'react'
import Head from 'next/head'

import Footer from './footer'
import Header from './header'

export const Layout = memo(({ children, page, title }: { children: ReactChild | ReactChild[]; page: string; title: string}) => (
  <>
    {title && (
      <Head>
        <title>{title}</title>
      </Head>
    )}

    <div className={`page-wrapper page--${page}`}>
      <Header />

      <main className="page-content">{children}</main>

      <Footer />
    </div>
  </>
))

Layout.displayName = 'Layout'

export default Layout
