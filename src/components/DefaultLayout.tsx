import type { FC, PropsWithChildren } from 'react'

import { Footer } from './Footer'
import { Header } from './Header/Header'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex min-h-screen w-screen flex-1 flex-col bg-white px-7 dark:bg-gray-900 dark:text-white">
    <Header />

    <main className="flex flex-1 flex-col">{children}</main>

    <Footer />
  </div>
)
