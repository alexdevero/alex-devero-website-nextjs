import type { FC } from 'react'

import { work } from '@/data/work'

import { TimelineNode } from './TimelineNode'

export const Timeline: FC = () => (
  <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-8 rounded-full before:absolute before:top-0 before:h-full before:w-px before:bg-gray-300/80 before:content-[''] md:before:left-1/2 md:before:-translate-x-1/2 dark:before:bg-gray-500/50">
    {work.map((item, index) => (
      <TimelineNode
        key={item.company}
        caseStudyLink={item.caseStudy}
        className="w-full md:max-w-1/2"
        list={item.highlights}
        position={index % 2 === 0 ? 'left' : 'right'}
        role={item.position}
        title={item.company}
        yearFrom={item.yearFrom}
        yearTo={item.yearTo}
      />
    ))}
  </div>
)
