import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import classNames from 'classnames'

import { ErrorMessage } from './ErrorMessage'
import { InputWrapper } from './InputWrapper'
import { Label } from './Label'

export const inputClasses =
  'rounded-sm border border-gray-300 py-1 px-1.5 text-sm transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_0_2px_rgba(96,165,250,0.6)] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
export const inputErrorClasses = '!border-red-500 hover:!shadow-[0_0_0_2px_rgba(239,68,68,0.4)]'

type Props = HTMLAttributes<HTMLInputElement> & {
  label?: string
  type?: 'text' | 'email' | 'password'
  hasError?: boolean
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ hasError, id, errorMessage, label, type = 'text', ...rest }, ref) => (
    <div className="flex w-full flex-col gap-1">
      <InputWrapper>
        {label && <Label htmlFor={id}>{label}</Label>}
        <input
          ref={ref}
          id={id}
          type={type}
          className={classNames(inputClasses, {
            [inputErrorClasses]: hasError,
          })}
          {...rest}
        />
      </InputWrapper>
      {hasError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
)
