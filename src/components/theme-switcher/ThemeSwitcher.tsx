import type { FC } from 'react'

import classNames from 'classnames'

import { useDarkMode } from '@/contexts/dark-mode'
import MoonIcon from '@/public/images/icons/moon.svg'
import SunIcon from '@/public/images/icons/sun.svg'

const themeOptions = [
  { label: 'Light', value: false, icon: <SunIcon className="size-5 text-inherit transition-colors duration-300" /> },
  { label: 'Dark', value: true, icon: <MoonIcon className="size-5 text-inherit transition-colors duration-300" /> },
] as const

export const ThemeSwitcher: FC = () => {
  const { darkMode, handleDarkModeChange } = useDarkMode()

  return (
    <div>
      <ul className="flex gap-2">
        {themeOptions.map(option => (
          <li key={option.label}>
            <button
              type="button"
              className={classNames('flex items-center gap-2', {
                'text-gray-400 hover:text-gray-600 hover:underline dark:text-gray-500 dark:hover:text-gray-400':
                  darkMode !== option.value,
                'text-gray-800 dark:text-gray-400': darkMode === option.value,
              })}
              onClick={() => handleDarkModeChange(option.value)}
            >
              {option.icon}
              <span className="sr-only">{option.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}