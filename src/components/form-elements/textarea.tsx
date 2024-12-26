import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import classNames from 'classnames'

import { ErrorMessage } from './error-message'
import { inputClasses, inputErrorClasses } from './input'
import { InputWrapper } from './input-wrapper'
import { Label } from './label'

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
