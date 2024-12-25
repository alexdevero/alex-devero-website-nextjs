import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import classNames from 'classnames'

import { ErrorMessage } from './error-message'
import { InputWrapper } from './input-wrapper'
import { Label } from './label'

type Props = HTMLAttributes<HTMLInputElement> & {
  label?: string
  type?: 'text' | 'email' | 'password'
  hasError?: boolean
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ hasError, id, errorMessage, label, type = 'text', ...rest }, ref) => (
    <div className="flex flex-col gap-1">
      <InputWrapper>
        {label && <Label htmlFor={id}>{label}</Label>}
        <input
          ref={ref}
          id={id}
          type={type}
          className={classNames('rounded-sm border border-solid border-gray-400 p-1 text-sm', {
            'border-red-500': hasError,
          })}
          {...rest}
        />
      </InputWrapper>
      {hasError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
)
