import type { FC } from 'react'

import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'
import { pageTitles } from '@/constants/page-titles'

import { formatAvailabilityMessage, getNextQuarterAndYear } from './utils'

export const ServicesPage: FC = () => {
  const { quarter, year, nextQuarter, nextQuarterYear } = getNextQuarterAndYear()
  const availability = formatAvailabilityMessage(quarter, year, nextQuarter, nextQuarterYear)

  return (
    <DefaultLayout>
      <Typography as="h1" variant="h1">
        {pageTitles.services}
      </Typography>

      <div className="flex justify-center">
        <div className="flex max-w-3xl flex-col gap-3">
          <Typography>
            Welcome to my Services page. I am Alex Devero, a seasoned full-stack TypeScript
            developer with over 10 years of experience: I specialize in building scalable,
            high-performance web applications with focus on UX, using React and Next.js. I work with
            individuals, startups, and businesses to help them bring their digital visions to life.
          </Typography>

          <Typography>
            With a strong background in product design, I strive to bridge the gap between
            functionality and user experience. My mission is to leverage technology to solve
            real-world problems and enhance people's lives.
          </Typography>

          <div className="my-8">
            <Typography as="h2" variant="h4" className="mb-4" centered={false}>
              How can I help you?
            </Typography>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
              <div>
                <Typography as="h3" variant="h6" centered={false} className="!mb-2">
                  Custom Web Application Development
                </Typography>
                <Typography>
                  Deliver high-performance, scalable web applications that help your business grow.
                </Typography>
              </div>
              <div>
                <Typography as="h3" variant="h6" centered={false} className="!mb-2">
                  Consulting Services
                </Typography>
                <Typography>
                  Optimize your codebase, reduce tech debt, and improve project delivery timelines.
                </Typography>
              </div>
              <div>
                <Typography as="h3" variant="h6" centered={false} className="!mb-2">
                  Project-Based Engagements
                </Typography>
                <Typography>
                  Get high-quality solutions delivered on time and within budget.
                </Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography as="h2" variant="h4" className="mb-4" centered={false}>
              Availability and Booking
            </Typography>

            <Typography>
              Due to high demand, I accept a limited number of projects each quarter to maintain the
              highest quality standards. Limited slots available for {availability}—secure your
              project today. project today.
            </Typography>
          </div>
        </div>
      </div>

      <Cta />
    </DefaultLayout>
  )
}
