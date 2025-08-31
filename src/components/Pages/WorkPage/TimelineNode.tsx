import classNames from 'classnames'
import type { FC } from 'react'

import { Link } from '@/components/Link'
import { List } from '@/components/List/List'
import { Tag } from '@/components/Tag/Tag'
import { Typography } from '@/components/Typography'

type Position = 'left' | 'right'

export type TimelineNodeProps = {
  caseStudyLink?: string
  className?: string
  list: string[]
  position: Position
  role: string
  title: string
  yearFrom: string
  yearTo: string
}

export const TimelineNode: FC<TimelineNodeProps> = ({
  title,
  list,
  caseStudyLink,
  className,
  position,
  role,
  yearFrom,
  yearTo,
}) => (
  <div
    className={classNames(
      'flex flex-col gap-4 rounded-full',
      className,
      position === 'left' ? 'self-start' : 'self-start md:self-end'
    )}
  >
    <Typography
      as="h2"
      className={classNames(
        "relative z-10 m-0! pl-10 before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-gray-300/80 before:content-[''] after:absolute after:-bottom-1.5 after:size-3 after:rounded-full after:bg-gray-200 after:content-[''] dark:before:bg-gray-500/50 dark:after:bg-gray-600/75",
        {
          'after:-left-1.5': position === 'right',
          'after:-right-1.5 max-md:after:-left-1.5': position === 'left',
        }
      )}
      variant="h4"
    >
      {title} ({yearFrom}&ndash;{yearTo})
    </Typography>

    <div className="flex flex-col gap-2 px-10 sm:max-w-3/4 md:max-w-full">
      <Tag label={role} />

      <List items={list} />

      {caseStudyLink !== undefined && (
        <div className="flex items-center gap-1">
          <span className="fa fa-link dark:text-gray-1300 text-sm text-gray-500" />
          <Link className="flex items-center gap-1" href={caseStudyLink}>
            See case study
          </Link>
        </div>
      )}
    </div>
  </div>
)
