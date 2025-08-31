import classNames from 'classnames'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { ErrorMessage } from './ErrorMessage'
import { inputClasses, inputErrorClasses } from './Input'
import { InputWrapper } from './InputWrapper'
import { Label } from './Label'

type Props = HTMLAttributes<HTMLTextAreaElement> & {
  errorMessage?: string
  hasError?: boolean
  label?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, id, hasError, errorMessage, ...rest }, ref) => (
    <div className="flex flex-col gap-1">
      <InputWrapper>
        {Boolean(label) && <Label htmlFor={id}>{label}</Label>}
        <textarea
          ref={ref}
          className={classNames(inputClasses, 'min-h-12 resize-y', {
            [inputErrorClasses]: hasError,
          })}
          id={id}
          {...rest}
        />
      </InputWrapper>
      {Boolean(hasError && errorMessage) && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
)

Textarea.displayName = 'Textarea'
