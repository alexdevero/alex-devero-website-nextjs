import classNames from 'classnames'
import type { HTMLAttributes } from 'react'

import { Link } from './Link'

export const buttonClasses =
  'flex h-9 items-center justify-center rounded-sm bg-blue-600 px-5 text-sm transition-all duration-300 hover:bg-blue-700 active:bg-blue-900 disabled:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:disabled:bg-blue-800'

type Props<T extends 'link' | 'button'> = HTMLAttributes<
  T extends 'link' ? HTMLAnchorElement : HTMLButtonElement
> & {
  children: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  centered?: boolean
  fullWidth?: boolean
  href?: string
  variant?: 'default' | 'outline'
}

export const Button = <T extends 'link' | 'button'>({
  centered = true,
  className,
  disabled,
  fullWidth = false,
  children,
  type = 'button',
  href,
  variant = 'default',
  ...props
}: Props<T>) => {
  const classes = classNames(buttonClasses, className, {
    'mx-auto': centered,
    'w-full': fullWidth,
    'bg-blue-600 hover:bg-blue-700 active:bg-blue-900 disabled:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 text-white dark:disabled:bg-blue-800 hover:text-white':
      variant === 'default',
    'bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-600/15 hover:text-gray-700 dark:bg-transparent dark:text-gray-1300 dark:border-gray-1300 dark:hover:bg-gray-600/25 dark:hover:text-gray-1500 dark:hover:border-gray-1500':
      variant === 'outline',
  })

  if (href) {
    return (
      <Link
        href={href}
        className={classNames(classes, 'no-underline hover:no-underline')}
        hasStylesOverride
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      {...(props as HTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
