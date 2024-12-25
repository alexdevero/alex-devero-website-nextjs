'use client'

import type { FC } from 'react'
import { useState } from 'react'

import { usePathname } from 'next/navigation'

import { navigationLinks } from '@/constants/navigation'

import { Link } from './link'

export const Header: FC = () => {
  const pathname = usePathname()
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false)

  return (
    <header className="header">
      <nav className="flex py-6">
        <Link href="/" className="font-bold no-underline hover:no-underline">
          AD
        </Link>
        <ul className="flex flex-1 items-center justify-center gap-4">
          <li>
            <button className="nav__toggler nav__toggler--close" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
              <span />
              <span />
            </button>
          </li>

          {navigationLinks.map(link =>
            link.visible ? (
              <span key={link.path} onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                <Link active={pathname === link.path} href={link.path} initialUnderline={false}>
                  {link.title}
                </Link>
              </span>
            ) : null
          )}
        </ul>

        <button className="max-md:flex" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
