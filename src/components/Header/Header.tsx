'use client'

import classNames from 'classnames'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { navigationLinks } from '@/constants/navigation'

import { Link } from '../Link'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import { NavToggleButton } from './NavToggleButton'

export const Header: FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleMobileMenuToggle = (isVisible: boolean) => {
    if (!isMounted) return
    setIsMobileMenuVisible(isVisible)
    document.body.style.overflow = isVisible ? 'hidden' : 'auto'
  }

  useEffect(() => {
    if (!isMounted) return

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuVisible(false)
        document.body.style.overflow = 'auto'
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMounted])

  if (!isMounted) {
    return null // Return null on server-side and initial client-side render
  }

  return (
    <header className="header">
      <nav className="flex justify-between py-6">
        <Link
          className="font-bold !text-gray-800 no-underline hover:no-underline dark:!text-gray-1000"
          href="/"
        >
          AlexDevero
        </Link>

        <ul
          className={classNames(
            'flex flex-1 items-center justify-center sm:gap-4 md:gap-2 lg:gap-6',
            {
              'max-md:fixed max-md:inset-0 max-md:z-10 max-md:flex-col max-md:bg-white max-md:dark:bg-black-100':
                isMobileMenuVisible,
              'hidden md:flex': !isMobileMenuVisible,
            }
          )}
        >
          <li className="max-md:py-2">
            <NavToggleButton
              navOpen={isMobileMenuVisible}
              onClick={() => handleMobileMenuToggle(!isMobileMenuVisible)}
            />
          </li>
          {navigationLinks.map(link =>
            link.visible ? (
              <li
                key={link.path}
                className="max-md:py-2"
                onClick={() => handleMobileMenuToggle(!isMobileMenuVisible)}
              >
                <Link className="max-md:text-xl" href={link.path} initialUnderline={false}>
                  {link.title}
                </Link>
              </li>
            ) : null
          )}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <NavToggleButton
            navOpen={isMobileMenuVisible}
            onClick={() => handleMobileMenuToggle(!isMobileMenuVisible)}
          />
        </div>
      </nav>
    </header>
  )
}
