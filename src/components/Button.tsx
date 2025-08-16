import classNames from 'classnames'
import type { FC, HTMLAttributes } from 'react'

import { Link } from './Link'

export const buttonClasses =
  'flex h-9 items-center justify-center rounded-sm bg-blue-600 px-5 text-sm text-white transition-all duration-300 hover:bg-blue-700 active:bg-blue-900 disabled:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:disabled:bg-blue-800'

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  centered?: boolean
  fullWidth?: boolean
  href?: string
  variant?: 'default' | 'outline'
}

export const Button: FC<Props> = ({
  centered = true,
  className,
  disabled,
  fullWidth = false,
  children,
  type = 'button',
  href,
  variant = 'default',
  ...props
}) => {
  const classes = classNames(buttonClasses, className, {
    'mx-auto': centered,
    'w-full': fullWidth,
    'bg-blue-600 hover:bg-blue-700 active:bg-blue-900 disabled:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:disabled:bg-blue-800':
      variant === 'default',
    'bg-transparent text-white/70 border border-white/15 hover:bg-gray-600/25 hover:text-white dark:bg-transparent dark:text-white/70 dark:border-white/15 active:bg-gray-600/25 dark:active:bg-gray-600/25 dark:hover:bg-gray-600/25 dark:hover:text-white':
      variant === 'outline',
  })

  if (href) {
    return (
      <Link href={href} className={classNames(classes, 'no-underline hover:no-underline')}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
