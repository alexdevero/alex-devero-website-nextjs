import type { FC } from 'react'

import { routes } from '@/constants/router'

import { TimelineNode, type TimelineNodeProps } from './TimelineNode'

const timeline: TimelineNodeProps[] = [
  {
    caseStudyLink: routes.caseStudyCdn77,
    list: [
      'Custom design-system migration, modular refactor, testing culture',
      'Future-ready codebase with improved velocity',
    ],
    position: 'left',
    role: 'Full-stack Developer',
    title: 'CDN77',
    yearFrom: '2023',
    yearTo: 'present',
  },
  {
    caseStudyLink: routes.caseStudyDigitoo,
    list: [
      'Migrated MVP to Next.js (SSR), lead UI migration to Tailwind',
      'Delivered 7 major features and enabled 40+ client onboard',
    ],
    position: 'right',
    role: 'Front-end & React Developer',
    title: 'Digitoo',
    yearFrom: '2021',
    yearTo: '2023',
  },
  {
    caseStudyLink: routes.caseStudyPersoo,
    list: [
      'Rebuilt widgets (search, carousels), modernized JS stack',
      'Mentored team, shaped product strategy as a co-founder',
    ],
    position: 'left',
    role: 'Frontend Developer → Co-Founder',
    title: 'Persoo',
    yearFrom: '2019',
    yearTo: '2021',
  },
  {
    caseStudyLink: routes.caseStudySupernova,
    list: [
      'Built React/TS MVP, revamped frontend architecture',
      'Partnered on product direction—foundation for YC pivot',
    ],
    position: 'right',
    role: 'Frontend & React Developer',
    title: 'Supernova',
    yearFrom: '2017',
    yearTo: '2019',
  },
  {
    // caseStudyLink: routes.caseStudyRetino,
    list: [
      'Developed web app using TypeScript and React',
      'Provided guidance on React development best practices',
    ],
    position: 'left',
    role: 'Frontend Developer',
    title: 'Retino',
    yearFrom: '2019',
    yearTo: '2019',
  },
  {
    // caseStudyLink: routes.caseStudyStartMonday,
    list: ['Developed web apps using TypeScript'],
    position: 'right',
    role: 'Frontend Developer',
    title: 'StartMonday',
    yearFrom: '2016',
    yearTo: '2017',
  },
]

export const Timeline: FC = () => (
  <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-8 rounded-full before:absolute before:top-0 before:h-full before:w-px before:bg-gray-300/80 before:content-[''] md:before:left-1/2 md:before:-translate-x-1/2 dark:before:bg-gray-500/50">
    {timeline.map(item => (
      <TimelineNode key={item.title} className="w-full md:max-w-1/2" {...item} />
    ))}
  </div>
)
