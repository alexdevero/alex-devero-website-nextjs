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
          I&rsquo;m Alex Devero &ndash; a Frontend Tech Lead who builds like a founder. I co-founded
          an acquired startup and was an early engineer at the first Czech Y Combinator company, so
          I lead React &amp; Next.js frontends with an owner&rsquo;s product judgment, not just an
          implementer&rsquo;s &ndash; architecture that holds up as products grow. 10+ years, across
          the EU and remote.
        </Typography>

        <Typography className="my-4 flex flex-col items-center justify-center gap-2 md:flex-row">
          From a startup I co-founded to established platforms{' '}
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
