import type { FC, PropsWithChildren } from 'react'

import { Footer } from './Footer'
import { Header } from './Header/Header'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="dark:bg-black-100 bg-white-200 text-black-200 dark:text-gray-1100 flex min-h-screen w-screen flex-1 flex-col px-7">
    <Header />

    <main className="dark:text-gray-1000 flex flex-1 flex-col">{children}</main>

    <Footer />
  </div>
)
