import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import classNames from 'classnames'

import { ErrorMessage } from './error-message'

type Props = HTMLAttributes<HTMLInputElement> & {
  label?: string
  type?: 'text' | 'email' | 'password'
  hasError?: boolean
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ hasError, id, errorMessage, label, type = 'text', ...rest }, ref) => (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between gap-2">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          ref={ref}
          id={id}
          type={type}
          className={classNames('rounded-md border border-solid border-gray-400', {
            'border-red-500': hasError,
          })}
          {...rest}
        />
      </div>
      {hasError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
)
