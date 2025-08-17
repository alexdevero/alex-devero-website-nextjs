import classNames from 'classnames'
import type { FC, PropsWithChildren } from 'react'

type Props = {
  className?: string
  fitContent?: boolean
  isInteractive?: boolean
}

export const Card: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  fitContent = false,
  isInteractive = false,
}) => (
  <div
    className={classNames(
      'rounded-lg border border-gray-200 p-6 dark:border-slate-800',
      {
        'w-fit': fitContent,
        'cursor-pointer transition-all duration-300 hover:shadow-lg': isInteractive,
      },
      className
    )}
  >
    {children}
  </div>
)
