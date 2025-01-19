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
            Hi! I'm Alex Devero, a full-stack TypeScript developer with over 10 years of experience
            building web applications that don't just work—they wow. I specialize in React and
            Next.js, crafting scalable, high-performance apps with a focus on great user
            experiences.
          </Typography>

          <Typography>
            Whether you're an individual with an idea, a startup in need of momentum, or a business
            aiming to level up your digital game, I'm here to help you turn your vision into
            reality.
          </Typography>

          <Typography>
            With a background in product design, I bring a unique mix of technical expertise and
            UX-first thinking to every project. My goal? To create solutions that not only solve
            real-world problems but make life a little easier (and more enjoyable) for the people
            who use them.
          </Typography>

          <div className="my-8">
            <Typography as="h2" variant="h4" className="mb-4" centered={false}>
              How can I help you?
            </Typography>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
              <div>
                <Typography as="h3" variant="h6" centered={false} className="!mb-2">
                  Web Application Development
                </Typography>
                <Typography>
                  Let's build something amazing together! I can help you create web applications
                  that are fast, scalable, and tailored to your needs—whether it's for a growing
                  startup or an established business. I focus on delivering apps that your users
                  will love and your business can rely on.
                </Typography>
              </div>
              <div>
                <Typography as="h3" variant="h6" centered={false} className="!mb-2">
                  Consulting Services
                </Typography>
                <Typography>
                  Need a second pair of eyes on your codebase? Or maybe some guidance on improving
                  performance, improving test coverage, and cutting down tech debt? I offer
                  consulting services to help you optimize your projects and streamline your
                  development process. Think of me as your technical problem-solver and trusted
                  advisor.
                </Typography>
              </div>
              <div>
                <Typography as="h3" variant="h6" centered={false} className="!mb-2">
                  Project-Based Engagements
                </Typography>
                <Typography>
                  Got a project that needs a dedicated developer? I take on project-based work to
                  deliver high-quality solutions on time and within budget. Whether it's a single
                  feature or a full-blown app, I'll bring it to life with precision and care.
                </Typography>
              </div>
            </div>
          </div>

          <div className="my-8">
            <Typography as="h2" variant="h4" className="mb-4" centered={false}>
              Why Work With Me?
            </Typography>

            <ul>
              <li>
                <Typography>
                  &ndash; 10+ years of hands-on experience with TypeScript, React, and Next.js.
                </Typography>
              </li>
              <li>
                <Typography>
                  &ndash; A unique blend of technical skills and UX expertise.
                </Typography>
              </li>
              <li>
                <Typography>
                  &ndash; A commitment to delivering solutions that are not just functional but
                  exceptional.
                </Typography>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <Typography as="h2" variant="h4" className="mb-4" centered={false}>
              Availability and Booking
            </Typography>

            <Typography>
              I take on a limited number of projects each quarter to make sure every client gets my
              full attention and top-quality results. Right now, I'm booking for {availability}, and
              slots are filling up fast.
            </Typography>
          </div>
        </div>
      </div>

      <Cta
        text="Ready to bring your idea to life? Whether you're looking for a developer, consultant, or partner for your next project, I'd love to hear from you."
        ctaText="Let's talk!"
        centered
      />
    </DefaultLayout>
  )
}
