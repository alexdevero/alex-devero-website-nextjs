import classNames from 'classnames'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { ErrorMessage } from './ErrorMessage'
import { InputWrapper } from './InputWrapper'
import { Label } from './Label'

export const inputClasses =
  'rounded-[4px] border border-gray-200 py-1 px-1.5 text-sm transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_0_2px_rgba(96,165,250,0.6)] bg-gray-100 dark:border-gray-700 dark:bg-black-100 dark:text-white'
export const inputErrorClasses = 'border-red-500! hover:shadow-[0_0_0_2px_rgba(239,68,68,0.4)]!'

type Props = HTMLAttributes<HTMLInputElement> & {
  errorMessage?: string
  hasError?: boolean
  label?: string
  type?: 'text' | 'email' | 'password'
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ hasError, id, errorMessage, label, type = 'text', ...rest }, ref) => (
    <div className="flex w-full flex-col gap-1">
      <InputWrapper>
        {Boolean(label) && <Label htmlFor={id}>{label}</Label>}
        <input
          ref={ref}
          className={classNames(inputClasses, {
            [inputErrorClasses]: hasError,
          })}
          id={id}
          type={type}
          {...rest}
        />
      </InputWrapper>
      {Boolean(hasError && errorMessage) && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
)

Input.displayName = 'Input'
