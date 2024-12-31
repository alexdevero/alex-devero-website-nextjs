'use client'

import type { FC, PropsWithChildren } from 'react'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

import { useContext } from '@/hooks/useContext'

type DarkModeContextType = {
  darkMode: boolean | null
  handleDarkModeChange: (darkMode: boolean) => void
}

const ctx = createContext<DarkModeContextType | undefined>(undefined)

export const DarkModeProvider: FC<PropsWithChildren> = props => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null)

  const handleDarkModeChange = useCallback((darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    const darkModeRecord = localStorage.getItem('theme')
    if (darkModeRecord) {
      handleDarkModeChange(darkModeRecord === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.theme === 'dark') {
      handleDarkModeChange(true)
    } else {
      handleDarkModeChange(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleStorageEventChange = () => {
      if (localStorage.theme === 'dark') {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    }
    window.addEventListener('storage', handleStorageEventChange)

    return () => window.removeEventListener('storage', handleStorageEventChange)
  }, [])

  const value = useMemo(
    () => ({
      darkMode,
      handleDarkModeChange,
    }),
    [darkMode, handleDarkModeChange]
  )

  return <ctx.Provider value={value} {...props} />
}

export const useDarkMode = () => useContext(ctx)
