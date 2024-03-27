import { HTMLAttributes, forwardRef } from 'react'

import classNames from 'classnames'

import { ErrorMessage } from './error-message'

type Props = HTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  hasError?: boolean
  errorMessage?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, id, hasError, errorMessage, ...rest }, ref) => (
    <div className='flex flex-col gap-1'>
      <div className='flex justify-between gap-2'>
        {label && <label htmlFor={id}>{label}</label>}
        <textarea
          ref={ref}
          id={id}
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
