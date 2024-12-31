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

type Work = {
  company: Company
  position: string
  yearFrom: string
  yearTo: string
  logo: (props: LogoProps) => ReactNode
  responsibilities: string[]
}

export const work: Work[] = [
  {
    company: 'CDN77',
    position: 'Fullstack developer',
    yearFrom: '2023',
    yearTo: 'present',
    logo: (props: LogoProps) => <Cdn77Logo {...props} />,
    responsibilities: [
      'Developing web applications using React, Next.js, TypeScript and Tailwind CSS.',
      'Optimizing application performance and code quality.',
      'Refactoring legacy code to improve maintainability and performance.',
      'Establishing culture of React/Next.js testing practices.',
    ],
  },
  {
    company: 'Digitoo',
    position: 'Front-end & React Developer',
    yearFrom: '2021',
    yearTo: '2023',
    logo: (props: LogoProps) => <DigitooLogo {...props} />,
    responsibilities: [
      'Developing web application using React, Next.js, TypeScript and Tailwind CSS.',
      'Leading migration of legacy codebase to Next.js',
      'Collaborating on setting direction for frontend architecture.',
      'Mentoring junior developers and providing guidance.',
    ],
  },
  {
    company: 'Persoo',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2019',
    yearTo: '2021',
    logo: (props: LogoProps) => <PersooLogo {...props} />,
    responsibilities: [
      'Developing web applications using JavaScript and TypeScript.',
      'Working directly with clients to provide solutions.',
      'Leading frontend development team and mentoring junior developers.',
    ],
  },
  {
    company: 'Retino',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2019',
    yearTo: '2019',
    logo: (props: LogoProps) => <RetinoLogo {...props} />,
    responsibilities: [
      'Developing web application using TypeScript and React.',
      'Providing guidance on React development best practices.',
    ],
  },
  {
    company: 'Supernova',
    position: 'Front-end & React Developer',
    yearFrom: '2017',
    yearTo: '2019',
    logo: (props: LogoProps) => <SupernovaLogo {...props} />,
    responsibilities: [
      'Working alongside CEO to build a new product from scratch.',
      'Setting direction for frontend architecture.',
    ],
  },
  {
    company: 'StartMonday',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2016',
    yearTo: '2017',
    logo: (props: LogoProps) => <StartMondayLogo {...props} />,
    responsibilities: ['Developing web applications using TypeScript.'],
  },
]
