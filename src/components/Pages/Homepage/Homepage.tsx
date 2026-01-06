'use client'

import { track } from '@vercel/analytics'

import classNames from 'classnames'
import type { FC } from 'react'

import { Button } from '@/components/Button'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'
import { calendlyLink } from '@/constants/links'
import Cdn77Logo from '@/public/images/logos/cdn77-logo.svg'
import DigitooLogo from '@/public/images/logos/digitoo-logo.svg'
import PersooLogo from '@/public/images/logos/persoo-logo.svg'

import { getLogoColorClasses } from '../WorkPage/utils'

export const HomePage: FC = () => (
  <DefaultLayout>
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="max-w-2xl text-center">
        <Typography as="h1" variant="h1" centered>
          Frontend Systems Engineer
        </Typography>
        <Typography as="h2" variant="body" centered>
          I build frontend architecture in React & Next.js that holds up under real product
          complexity &ndash; reusable components, stable UX behavior, and well-defined domain
          boundaries.
        </Typography>

        <Typography className="my-4 flex flex-col items-center justify-center gap-2 md:flex-row">
          Trusted by teams at{' '}
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            <Cdn77Logo
              alt="CDN77 logo"
              className={classNames('h-7 w-auto', getLogoColorClasses('CDN77'))}
            />
            <DigitooLogo
              alt="Digitoo logo"
              className={classNames('h-7 w-auto', getLogoColorClasses('Digitoo'))}
            />
            <PersooLogo
              alt="Persoo logo"
              className={classNames('h-10 w-auto', getLogoColorClasses('Persoo'))}
            />
          </div>
        </Typography>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button centered={false} href="/work" variant="outline">
            See case studies
          </Button>

          <Button
            centered={false}
            href={calendlyLink}
            onClick={() => track('homepage_schedule_call')}
          >
            Book a 20-min call
          </Button>
        </div>
      </div>
    </div>
  </DefaultLayout>
)
