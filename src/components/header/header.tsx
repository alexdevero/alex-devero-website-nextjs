'use client'

import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import classNames from 'classnames'

import { navigationLinks } from '@/constants/navigation'

import { Link } from '../link'
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher'
import { NavToggleButton } from './NavToggleButton'

export const Header: FC = () => {
  const pathname = usePathname()
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)

  const handleMobileMenuToggle = (isMobileMenuVisible: boolean) => {
    setIsMobileMenuVisible(isMobileMenuVisible)
    document.body.style.overflow = isMobileMenuVisible ? 'hidden' : 'auto'
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuVisible(false)
        document.body.style.overflow = 'auto'
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="header">
      <nav className="flex justify-between py-6">
        <Link href="/" className="font-bold no-underline hover:no-underline">
          AD
        </Link>
        <ul
          className={classNames('flex flex-1 items-center justify-center gap-4', {
            'max-md:fixed max-md:inset-0 max-md:z-10 max-md:flex-col max-md:bg-white max-md:dark:bg-gray-900':
              isMobileMenuVisible,
            'hidden md:flex': !isMobileMenuVisible,
          })}
        >
          <li>
            <NavToggleButton
              navOpen={isMobileMenuVisible}
              onClick={() => handleMobileMenuToggle(!isMobileMenuVisible)}
            />
          </li>

          {navigationLinks.map(link =>
            link.visible ? (
              <span key={link.path} onClick={() => handleMobileMenuToggle(!isMobileMenuVisible)}>
                <Link
                  active={pathname === link.path}
                  href={link.path}
                  initialUnderline={false}
                  className="max-md:text-lg"
                >
                  {link.title}
                </Link>
              </span>
            ) : null
          )}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />

          <NavToggleButton navOpen={isMobileMenuVisible} onClick={() => handleMobileMenuToggle(!isMobileMenuVisible)} />
        </div>
      </nav>
    </header>
  )
}
