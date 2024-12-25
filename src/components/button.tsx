import type { FC, HTMLAttributes } from 'react'

import classNames from 'classnames'

export const buttonClasses =
  'flex h-9 items-center justify-center rounded-md bg-gray-800 px-5 text-sm text-white transition-all hover:bg-gray-600 active:bg-gray-900 disabled:bg-gray-400'

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  centered?: boolean
}

export const Button: FC<Props> = ({ children, disabled, className, centered = true, type = 'button', ...props }) => (
  <button
    type={type}
    className={classNames(buttonClasses, className, {
      'mx-auto': centered,
    })}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
)
