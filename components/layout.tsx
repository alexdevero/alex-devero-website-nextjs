import React from 'react'
import Head from 'next/head'

import Footer from './footer'
import Header from './header'

export const Layout = ({ children, page, title }) => (
  <>
    {title && <Head>
      <title>{title}</title>
    </Head>}

    <div className={`page-wrapper page--${page}`}>
      <Header />

      <main className="page-content">{children}</main>

      <Footer />
    </div>
  </>
)

export default Layout
