'use client'

import { useState } from 'react'

import { usePathname } from 'next/navigation'

import { navigationLinks } from '@/constants/navigation'

import { Link } from './link'

const Header = () => {
  const pathname = usePathname()
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false)

  return (
    <header className='header'>
      <nav className='flex py-6'>
        <Link href='/' className='font-bold'>
          AD
        </Link>
        <ul className='flex flex-1 items-center justify-center gap-4'>
          <li>
            <button className='nav__toggler nav__toggler--close' onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
              <span />
              <span />
            </button>
          </li>

          {navigationLinks.map(link =>
            link.visible ? (
              <span
                key={link.path}
                className={pathname === link.path ? 'underline' : ''}
                onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
              >
                <Link href={link.path}>{link.title}</Link>
              </span>
            ) : null
          )}
        </ul>

        <button className='max-md:flex' onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

export default Header
