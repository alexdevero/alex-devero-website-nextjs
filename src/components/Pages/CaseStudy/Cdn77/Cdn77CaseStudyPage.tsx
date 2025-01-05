import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'

import { impactAchievements, keyLearnings, responsibilities } from './data'

export const Cdn77CaseStudyPage = () => (
  <DefaultLayout>
    <div className="flex flex-col items-center">
      <Typography as="h1" variant="h1" className="max-w-3xl">
        Modernizing CDN77's Internal App: From Legacy to High-Performance Next.js
      </Typography>
    </div>

    <div className="mb-4 flex flex-col items-center">
      <div className="mb-6 flex max-w-3xl flex-col gap-8">
        <Typography centered>
          CDN77 is a global content delivery network (CDN) provider. Combining full live streaming
          and video-on-demand (VOD) services, CDN77 delivers seamless user experiences for its
          customers, covering everything from video streaming to infrastructure management.
        </Typography>

        <div className="flex flex-col gap-2">
          <Typography as="h3" muted>
            Context:
          </Typography>
          <Typography>
            Brought on as a full-stack TypeScript, React, and Next.js developer to modernize CDN77's
            internal application. The goal was to enhance performance, scalability, and user
            experience while contributing to other key company projects.
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
        text="Need a skilled developer to transform your platform into a scalable, high-performance product?"
        ctaText="Let's create something extraordinary together"
      />
    </div>
  </DefaultLayout>
)
