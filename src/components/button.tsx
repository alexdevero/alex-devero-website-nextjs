import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  centered?: boolean
}

export const Button = ({ children, disabled, className, centered = true, type = 'button', ...rest }: Props) => (
  <button
    type={type}
    className={classNames('flex h-9 items-center justify-center rounded-md bg-blue-500 px-5 text-white', className, {
      'mx-auto': centered,
      'bg-gray-400': disabled,
    })}
    {...rest}
  >
    {children}
  </button>
)
