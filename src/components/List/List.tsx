import classNames from 'classnames'
import type { FC, ReactNode } from 'react'

import { Typography } from '../Typography'

type Props = {
  className?: string
  items: (string | ReactNode)[]
  listStyle?: 'disc' | 'decimal' | 'dashes'
}

export const List: FC<Props> = ({ className, items, listStyle = 'disc' }) => (
  <ul
    className={classNames(
      'text-gray-500 dark:text-gray-500',
      {
        'list-disc': listStyle === 'disc',
        'list-decimal': listStyle === 'decimal',
        'pl-[17px]': listStyle !== 'dashes',
      },
      className
    )}
  >
    {items.map(item => (
      <li key={typeof item === 'string' ? item : item?.toString()}>
        <Typography as="span">
          {listStyle === 'dashes' ? <>&ndash; </> : null}
          {item}
        </Typography>
      </li>
    ))}
  </ul>
)
