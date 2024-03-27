import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: string
  type?: 'button' | 'submit' | 'reset'
  centered?: boolean
}

export const Button = ({ children, className, centered = true, type = 'button', ...rest }: Props) => (
  <button
    type={type}
    className={classNames('flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 text-white', className, {
      'mx-auto': centered,
    })}
    {...rest}
  >
    {children}
  </button>
)
