'use client'

import classNames from 'classnames'
import type { FC } from 'react'

import { useDarkMode } from '@/contexts/dark-mode'
import MoonIcon from '@/public/images/icons/moon.svg'
import SunIcon from '@/public/images/icons/sun.svg'

import { Icon } from '../Icon/Icon'

const themeOptions = [
  { label: 'Light', value: false, icon: SunIcon },
  { label: 'Dark', value: true, icon: MoonIcon },
] as const

export const ThemeSwitcher: FC = () => {
  const { darkMode, handleDarkModeChange } = useDarkMode()

  return (
    <div>
      <ul className="flex gap-3">
        {themeOptions.map(option => (
          <li key={option.label}>
            <button
              className={classNames('flex items-center gap-2 hover:cursor-pointer', {
                'text-gray-400 hover:text-gray-600 hover:underline dark:text-gray-500 dark:hover:text-gray-400':
                  darkMode !== option.value,
                'text-gray-800 dark:text-gray-400': darkMode === option.value,
              })}
              type="button"
              onClick={() => handleDarkModeChange(option.value)}
            >
              <Icon
                className="size-7 text-inherit transition-colors duration-300 md:size-6"
                icon={option.icon}
              />
              <span className="sr-only">{option.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
