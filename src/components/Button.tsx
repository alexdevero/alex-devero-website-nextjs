import classNames from 'classnames'
import type { FC, HTMLAttributes } from 'react'

export const buttonClasses =
  'flex h-9 items-center justify-center rounded-sm bg-blue-600 px-5 text-sm text-white transition-all duration-300 hover:bg-blue-700 active:bg-blue-900 disabled:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:disabled:bg-blue-800'

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  centered?: boolean
  fullWidth?: boolean
}

export const Button: FC<Props> = ({
  centered = true,
  className,
  disabled,
  fullWidth = false,
  children,
  type = 'button',
  ...props
}) => (
  <button
    type={type}
    className={classNames(
      buttonClasses,

      className,
      {
        'mx-auto': centered,
        'w-full': fullWidth,
      }
    )}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
)
