import classNames from 'classnames'
import type { FC } from 'react'

import { Typography } from '../Typography'

type Props = {
  className?: string
  label: string
}

export const Tag: FC<Props> = ({ label, className }) => (
  <Typography
    as="span"
    className={classNames(
      'rounded border border-zinc-800 bg-zinc-700/70 px-2 py-1 !text-gray-400',
      className
    )}
    variant="small"
  >
    {label}
  </Typography>
)
