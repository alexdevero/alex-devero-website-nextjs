'use client'

import { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false)

  return (
    <header className='header'>
      <nav className='flex py-6'>
        <ul className='flex flex-1 items-center justify-center gap-4'>
          <li>
            <button className='nav__toggler nav__toggler--close' onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
              <span />
              <span />
            </button>
          </li>

          <li>
            <span
              className={pathname === '/' ? 'underline' : ''}
              onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
            >
              <Link href='/'>Home</Link>
            </span>
          </li>

          <li>
            <span
              className={pathname === '/projects' ? 'underline' : ''}
              onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
            >
              <Link href='/projects'>Projects</Link>
            </span>
          </li>

          <li>
            <span
              className={pathname === '/about' ? 'underline' : ''}
              onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
            >
              <Link href='/about'>About</Link>
            </span>
          </li>

          <li>
            <span
              className={pathname === '/cv' ? 'underline' : ''}
              onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
            >
              <Link href='/cv'>CV</Link>
            </span>
          </li>

          <li>
            <a
              href='https://blog.alexdevero.com/'
              rel='noopener noreferrer'
              target='_blank'
              onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
            >
              Blog
            </a>
          </li>

          <li>
            <a
              href='https://devero.io/'
              rel='noopener noreferrer'
              target='_blank'
              onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
            >
              Devero
            </a>
          </li>

          {/* <li>
            <a href="https://studio.devero.io/" rel="noopener noreferrer" target="_blank" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Studio</a>
          </li> */}

          <li>
            <span
              className={pathname === '/contact' ? 'underline' : ''}
              onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
            >
              <Link href='/contact'>Contact</Link>
            </span>
          </li>
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
