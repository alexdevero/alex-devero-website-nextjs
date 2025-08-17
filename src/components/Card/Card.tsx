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
      'rounded-lg bg-gray-50 p-6 dark:bg-gray-800/50',
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
