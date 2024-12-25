import type { FC, HTMLAttributes, PropsWithChildren } from 'react'

import classNames from 'classnames'

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const InputWrapper: FC<Props> = ({ className, ...props }) => (
  <div className={classNames('flex flex-col justify-between gap-0.5', className)} {...props} />
)
