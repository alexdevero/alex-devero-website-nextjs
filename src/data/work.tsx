import React from 'react'
import type { ReactNode, SVGProps } from 'react'

import Cdn77Logo from '@/public/images/logos/cdn77-logo.svg'
import DigitooLogo from '@/public/images/logos/digitoo-logo.svg'
import PersooLogo from '@/public/images/logos/persoo-logo.svg'
import RetinoLogo from '@/public/images/logos/retino-logo.svg'
import StartMondayLogo from '@/public/images/logos/start-monday-logo.svg'
import SupernovaLogo from '@/public/images/logos/supernova-logo.svg'

export type LogoProps = SVGProps<SVGSVGElement>

export type Company = 'CDN77' | 'Digitoo' | 'Persoo' | 'Retino' | 'Supernova' | 'StartMonday'

export type StackCategory = 'frontend' | 'backend' | 'devops' | 'database'

export type TechStack = Partial<Record<StackCategory, string>>

type Work = {
  caseStudy?: string
  company: Company
  logo: (props: LogoProps) => ReactNode
  position: string
  responsibilities: string[]
  technologies: TechStack
  yearFrom: string
  yearTo: string
}

export const work: Work[] = [
  {
    company: 'CDN77',
    position: 'Fullstack developer',
    yearFrom: '2023',
    yearTo: 'present',
    logo: (props: LogoProps) => <Cdn77Logo {...props} />,
    technologies: {
      frontend: 'React, Next.js, TypeScript, Tailwind CSS',
      backend: 'Express, GraphQL, REST, PostgreSQL',
      devops: 'Docker',
      database: 'PostgreSQL',
    },
    responsibilities: [
      'Developing web apps using React, Next.js, TypeScript and Tailwind CSS.',
      'Optimizing application performance and code quality.',
      'Refactoring legacy code to improve maintainability and performance.',
      'Establishing culture of React/Next.js testing practices.',
    ],
    caseStudy: '/case-study/cdn77',
  },
  {
    company: 'Digitoo',
    position: 'Front-end & React Developer',
    yearFrom: '2021',
    yearTo: '2023',
    logo: (props: LogoProps) => <DigitooLogo {...props} />,
    technologies: {
      frontend: 'React, Next.js, TypeScript, Sass (Scss), Tailwind CSS',
      backend: 'Nest.js, GraphQL, REST, PostgreSQL',
      devops: 'Docker',
      database: 'PostgreSQL',
    },
    responsibilities: [
      'Developed web apps using React, Next.js, TypeScript and Tailwind CSS.',
      'Led migration of legacy codebase to Next.js',
      'Collaborated on setting direction for frontend architecture.',
      'Mentored junior developers and provided guidance.',
    ],
    caseStudy: '/case-study/digitoo',
  },
  {
    company: 'Persoo',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2019',
    yearTo: '2021',
    logo: (props: LogoProps) => <PersooLogo {...props} />,
    technologies: {
      frontend: 'JavaScript, TypeScript, CSS, HTML',
    },
    responsibilities: [
      'Developed web app using JavaScript and TypeScript.',
      'Worked directly with clients to provide solutions.',
      'Led frontend development team and mentored junior developers.',
    ],
    caseStudy: '/case-study/persoo',
  },
  {
    company: 'Retino',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2019',
    yearTo: '2019',
    logo: (props: LogoProps) => <RetinoLogo {...props} />,
    technologies: {
      frontend: 'React, TypeScript, CSS, Sass (Scss)',
    },
    responsibilities: [
      'Developed web app using TypeScript and React.',
      'Provided guidance on React development best practices.',
    ],
  },
  {
    company: 'Supernova',
    position: 'Front-end & React Developer',
    yearFrom: '2017',
    yearTo: '2019',
    logo: (props: LogoProps) => <SupernovaLogo {...props} />,
    technologies: {
      frontend: 'React, TypeScript, CSS, Sass (Scss)',
    },
    responsibilities: [
      'Developed web app using TypeScript and React.',
      'Worked alongside CEO to build a new product from scratch.',
      'Set direction for frontend architecture.',
    ],
  },
  {
    company: 'StartMonday',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2016',
    yearTo: '2017',
    logo: (props: LogoProps) => <StartMondayLogo {...props} />,
    technologies: {
      frontend: 'TypeScript, CSS, HTML',
    },
    responsibilities: ['Developed web apps using TypeScript.'],
  },
]
