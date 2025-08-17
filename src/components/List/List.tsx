import classNames from 'classnames'
import type { FC } from 'react'

import { Typography } from '../Typography'

type Props = {
  className?: string
  items: string[]
  listStyle?: 'disc' | 'decimal' | 'dashes'
}

export const List: FC<Props> = ({ className, items, listStyle = 'disc' }) => (
  <ul
    className={classNames(
      'text-gray-500 dark:text-gray-500',
      {
        'list-disc': listStyle === 'disc',
        'list-decimal': listStyle === 'decimal',
        'pl-4': listStyle !== 'dashes',
      },
      className
    )}
  >
    {items.map(item => (
      <li key={item}>
        <Typography as="span">
          {listStyle === 'dashes' ? <>&ndash; </> : null}
          {item}
        </Typography>
      </li>
    ))}
  </ul>
)
