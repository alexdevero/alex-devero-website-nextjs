'use client'

import type { FC } from 'react'
import { useEffect, useState } from 'react'

import classNames from 'classnames'

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
          {navigationLinks.map(link =>
            link.visible ? (
              <span key={link.path} onClick={() => handleMobileMenuToggle(!isMobileMenuVisible)}>
                <Link href={link.path} initialUnderline={false} className="max-md:text-lg">
                  {link.title}
                </Link>
              </span>
            ) : null
          )}
        </ul>

        <div className="flex items-center gap-4">
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
