import React from 'react'
import type { ReactNode } from 'react'

import Cdn77Logo from '@/public/images/logos/cdn77-logo.svg'
import DigitooLogo from '@/public/images/logos/digitoo-logo.svg'
import PersooLogo from '@/public/images/logos/persoo-logo.svg'
import RetinoLogo from '@/public/images/logos/retino-logo.svg'
import StartMondayLogo from '@/public/images/logos/start-monday-logo.svg'
import SupernovaLogo from '@/public/images/logos/supernova-logo.svg'

type Work = {
  company: string
  position: string
  yearFrom: string
  yearTo: string
  logo?: ReactNode
}

export const work: Work[] = [
  {
    company: 'CDN77',
    position: 'Fullstack developer',
    yearFrom: '2023',
    yearTo: 'present',
    logo: <Cdn77Logo />,
  },
  {
    company: 'Digitoo',
    position: 'Front-end & React Developer',
    yearFrom: '2021',
    yearTo: '2023',
    logo: <DigitooLogo />,
  },
  {
    company: 'Persoo',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2019',
    yearTo: '2021',
    logo: <PersooLogo />,
  },
  {
    company: 'Retino',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2019',
    yearTo: '2019',
    logo: <RetinoLogo />,
  },
  {
    company: 'Supernova',
    position: 'Front-end & React Developer',
    yearFrom: '2017',
    yearTo: '2019',
    logo: <SupernovaLogo />,
  },
  {
    company: 'StartMonday',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2016',
    yearTo: '2017',
    logo: <StartMondayLogo />,
  },
]
