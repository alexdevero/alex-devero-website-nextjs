import type { FC, PropsWithChildren } from 'react'

import { Footer } from './Footer'
import { Header } from './Header/Header'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="dark:bg-black-100 flex min-h-screen w-screen flex-1 flex-col bg-white px-7 dark:text-white">
    <Header />

    <main className="dark:text-gray-1000 flex flex-1 flex-col">{children}</main>

    <Footer />
  </div>
)
