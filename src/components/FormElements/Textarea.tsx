import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import classNames from 'classnames'

import { ErrorMessage } from './ErrorMessage'
import { inputClasses, inputErrorClasses } from './Input'
import { InputWrapper } from './InputWrapper'
import { Label } from './Label'

type Props = HTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  hasError?: boolean
  errorMessage?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, id, hasError, errorMessage, ...rest }, ref) => (
    <div className="flex flex-col gap-1">
      <InputWrapper>
        {label && <Label htmlFor={id}>{label}</Label>}
        <textarea
          ref={ref}
          id={id}
          className={classNames(inputClasses, 'min-h-12 resize-y', {
            [inputErrorClasses]: hasError,
          })}
          {...rest}
        />
      </InputWrapper>
      {hasError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
)
