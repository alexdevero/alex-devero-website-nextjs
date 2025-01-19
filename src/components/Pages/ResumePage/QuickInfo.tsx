import type { FC } from 'react'

import { Typography } from '@/components/Typography'

import { personalInfo } from './data'

export const QuickInfo: FC = () => (
  <div className="mb-8 ml-auto mr-auto flex max-w-md flex-col gap-2">
    {personalInfo.map(item => (
      <div key={item.heading}>
        <Typography as="span" className="inline-flex items-center gap-1" muted>
          <span className={item.iconClass} />
          {item.heading}:
        </Typography>{' '}
        <Typography as="span">{item.text}</Typography>
      </div>
    ))}
  </div>
)
