import classNames from 'classnames'
import type { FC, PropsWithChildren } from 'react'

type Props = {
  className?: string
}

export const Card: FC<PropsWithChildren<Props>> = ({ children, className }) => (
  <div
    className={classNames('rounded-lg border border-gray-200 p-6 dark:border-slate-800', className)}
  >
    {children}
  </div>
)
