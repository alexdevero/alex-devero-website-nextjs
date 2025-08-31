import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'

import { impactAchievements, keyLearnings, responsibilities } from './data'

export const DigitooCaseStudyPage = () => (
  <DefaultLayout>
    <div className="flex flex-col items-center">
      <Typography as="h1" className="max-w-3xl" variant="h1">
        Transforming Digitoo&apos;s MVP into a Scalable Customer-Facing Platform
      </Typography>
    </div>

    <div className="mb-4 flex flex-col items-center">
      <div className="mb-6 flex max-w-3xl flex-col gap-8">
        <Typography centered>
          Digitoo is a platform that allows you to digitize and manage your accounting records
          throughout the entire accounting process.
        </Typography>

        <div className="flex flex-col gap-2">
          <Typography as="h3" muted>
            Context:
          </Typography>
          <Typography>
            Hired as a frontend React developer at an early-stage startup to transform their MVP
            into a scalable, customer-facing platform and enable the onboarding of their first
            clients.
          </Typography>
        </div>

        <div className="flex flex-col gap-2">
          <Typography as="h3" muted>
            Responsibilities:
          </Typography>
          <ul className="flex flex-col gap-1">
            {responsibilities.map(responsibility => (
              <li key={responsibility.substring(0, 20)}>
                <Typography>&ndash; {responsibility}</Typography>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <Typography as="h3" muted>
            Impact & Achievements:
          </Typography>
          <ul className="flex flex-col gap-1">
            {impactAchievements.map(achievement => (
              <li key={achievement.substring(0, 20)}>
                <Typography>&ndash; {achievement}</Typography>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <Typography as="h3" muted>
            Key Learnings:
          </Typography>
          <ul className="flex flex-col gap-1">
            {keyLearnings.map(achievement => (
              <li key={achievement.substring(0, 20)}>
                <Typography>&ndash; {achievement}</Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Cta
        ctaText="Let's build something incredible together"
        text="Ready to transform your product into a high-performance, scalable platform?"
      />
    </div>
  </DefaultLayout>
)
