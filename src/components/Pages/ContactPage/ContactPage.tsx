'use client'

import type { FC, MouseEvent } from 'react'

import { Button } from '../../Button'
import { DefaultLayout } from '../../DefaultLayout'
import { Typography } from '../../Typography'
import { CalendlyCard } from './CalendlyCard'
import { ContactForm } from './ContactForm'
import { SummaryBox } from './SummaryBox'

const formEnabled = true

export const ContactPage: FC = () => {
  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const target = event.target as HTMLAnchorElement
    const href = target.href
    const targetId = href.split('#')[1]
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <DefaultLayout>
      <Typography as="h1" variant="h1" centered>
        Let’s Talk
      </Typography>

      <div className="flex flex-col items-center">
        <div className="flex max-w-3xl flex-col gap-3">
          <Typography>
            Book a 20-minute discovery call — or send a message. I reply within{' '}
            <strong>24 hours CET</strong>.
          </Typography>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#schedule" onClick={handleAnchorClick}>
            Schedule a call
          </Button>
          <Button href="#contact-form" variant="outline" onClick={handleAnchorClick}>
            Send a message
          </Button>
        </div>

        <div className="my-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <CalendlyCard />

          <div id="contact-form" className="flex flex-col gap-6 md:gap-8">
            {formEnabled && <ContactForm />}

            <SummaryBox />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
