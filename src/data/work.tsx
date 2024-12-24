import React from 'react'
import type { ReactNode, SVGProps } from 'react'

import Cdn77Logo from '@/public/images/logos/cdn77-logo.svg'
import DigitooLogo from '@/public/images/logos/digitoo-logo.svg'
import PersooLogo from '@/public/images/logos/persoo-logo.svg'
import RetinoLogo from '@/public/images/logos/retino-logo.svg'
import StartMondayLogo from '@/public/images/logos/start-monday-logo.svg'
import SupernovaLogo from '@/public/images/logos/supernova-logo.svg'

type LogoProps = SVGProps<SVGSVGElement>

type Work = {
  company: string
  position: string
  yearFrom: string
  yearTo: string
  logo: (props: LogoProps) => ReactNode
}

export const work: Work[] = [
  {
    company: 'CDN77',
    position: 'Fullstack developer',
    yearFrom: '2023',
    yearTo: 'present',
    logo: (props: LogoProps) => <Cdn77Logo {...props} />,
  },
  {
    company: 'Digitoo',
    position: 'Front-end & React Developer',
    yearFrom: '2021',
    yearTo: '2023',
    logo: (props: LogoProps) => <DigitooLogo {...props} />,
  },
  {
    company: 'Persoo',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2019',
    yearTo: '2021',
    logo: (props: LogoProps) => <PersooLogo {...props} />,
  },
  {
    company: 'Retino',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2019',
    yearTo: '2019',
    logo: (props: LogoProps) => <RetinoLogo {...props} />,
  },
  {
    company: 'Supernova',
    position: 'Front-end & React Developer',
    yearFrom: '2017',
    yearTo: '2019',
    logo: (props: LogoProps) => <SupernovaLogo {...props} />,
  },
  {
    company: 'StartMonday',
    position: 'Front-end TypeScript Developer',
    yearFrom: '2016',
    yearTo: '2017',
    logo: (props: LogoProps) => <StartMondayLogo {...props} />,
  },
]
