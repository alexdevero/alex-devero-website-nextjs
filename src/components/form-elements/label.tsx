import type { FC, LabelHTMLAttributes, PropsWithChildren } from 'react'

import classNames from 'classnames'

type Props = PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>

export const Label: FC<Props> = ({ className, ...props }) => (
  <label className={classNames('text-sm text-gray-700', className)} {...props} />
)
