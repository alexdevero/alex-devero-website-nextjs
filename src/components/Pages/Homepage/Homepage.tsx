import classNames from 'classnames'
import type { FC } from 'react'

import { Button } from '@/components/Button'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'
import Cdn77Logo from '@/public/images/logos/cdn77-logo.svg'
import DigitooLogo from '@/public/images/logos/digitoo-logo.svg'
import PersooLogo from '@/public/images/logos/persoo-logo.svg'

import { getLogoColorClasses } from '../WorkPage/utils'

export const HomePage: FC = () => (
  <DefaultLayout>
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="max-w-2xl text-center">
        <Typography as="h1" variant="h1" centered>
          Senior Frontend Engineer (React/Next.js)
        </Typography>
        <Typography as="h2" variant="body" centered>
          I&rsquo;m Alex Devero &ndash; a frontend engineer and current Frontend Tech Lead with 10+
          years building React &amp; Next.js applications. I design frontend architecture that holds
          up under real product complexity: reusable components, stable UX behavior, and
          well-defined domain boundaries.
        </Typography>

        <Typography className="my-4 flex flex-col items-center justify-center gap-2 md:flex-row">
          Trusted by teams at{' '}
          {/* Names as real text for AI parsers and screen readers; the logos below are decorative. */}
          <span className="sr-only">CDN77, Digitoo, and Persoo.</span>
          <div
            aria-hidden="true"
            className="flex flex-col items-center justify-center gap-3 md:flex-row"
          >
            <Cdn77Logo className={classNames('h-7 w-auto', getLogoColorClasses('CDN77'))} />
            <DigitooLogo className={classNames('h-7 w-auto', getLogoColorClasses('Digitoo'))} />
            <PersooLogo className={classNames('h-10 w-auto', getLogoColorClasses('Persoo'))} />
          </div>
        </Typography>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button centered={false} href="/work">
            See case studies
          </Button>

          <Button centered={false} href="/resume" variant="outline">
            View r&eacute;sum&eacute;
          </Button>
        </div>
      </div>
    </div>
  </DefaultLayout>
)
