import type { FC } from 'react'

import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'

import {
  impactAchievements,
  keyLearnings,
  responsibilitiesClientProjects,
  responsibilitiesFounder,
  responsibilitiesTeamLead,
  responsibilitiesWidgetDevelopment,
} from './data'

export const PersooCaseStudyPage: FC = () => (
  <DefaultLayout>
    <div className="flex flex-col items-center">
      <Typography as="h1" className="max-w-3xl" variant="h1">
        From Developer to Founder: Driving Innovation and Leadership at Persoo
      </Typography>
    </div>

    <div className="mb-4 flex flex-col items-center">
      <div className="mb-6 flex max-w-3xl flex-col gap-8">
        <Typography centered>
          Persoo was a Czech startup specializing in e-commerce solutions such as behavior-driven
          search, recommendations, upsell, and cross-sell tools. It was later acquired by its
          competitor Luigi&apos;s Box.
        </Typography>

        <div className="flex flex-col gap-2">
          <Typography as="h3" muted>
            Context:
          </Typography>
          <Typography>
            Hired as a frontend JavaScript developer at Persoo, a Czech startup specializing in
            e-commerce solutions such as behavior-driven search, recommendations, upsell, and
            cross-sell tools.
          </Typography>
          <Typography>
            Initially part of the implementation team, responsible for integrating Persoo&apos;s
            tools into client websites and customizing them to meet specific business needs.
          </Typography>
          <Typography>
            Later promoted to team lead, managing junior developers and overseeing implementation
            projects, while modernizing the company&apos;s core widgets.
          </Typography>
          <Typography>
            Became one of the company&apos;s founders, contributing to strategic decision-making
            alongside technical work.
          </Typography>
        </div>

        <div className="flex flex-col gap-2">
          <Typography as="h3" muted>
            Responsibilities:
          </Typography>

          <div className="flex flex-col gap-2">
            <Typography as="h4" muted>
              Client Projects:
            </Typography>
            <ul className="flex flex-col gap-1">
              {responsibilitiesClientProjects.map(responsibility => (
                <li key={responsibility.substring(0, 20)}>
                  <Typography>&ndash; {responsibility}</Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Typography as="h4" muted>
              Widget Development:
            </Typography>
            <ul className="flex flex-col gap-1">
              {responsibilitiesWidgetDevelopment.map(responsibility => (
                <li key={responsibility.substring(0, 20)}>
                  <Typography>&ndash; {responsibility}</Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Typography as="h4" muted>
              Team Lead:
            </Typography>
            <ul className="flex flex-col gap-1">
              {responsibilitiesTeamLead.map(responsibility => (
                <li key={responsibility.substring(0, 20)}>
                  <Typography>&ndash; {responsibility}</Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Typography as="h4" muted>
              Founder:
            </Typography>
            <ul className="flex flex-col gap-1">
              {responsibilitiesFounder.map(responsibility => (
                <li key={responsibility.substring(0, 20)}>
                  <Typography>&ndash; {responsibility}</Typography>
                </li>
              ))}
            </ul>
          </div>
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
        ctaText="Let's create something extraordinary together"
        text="Looking for a skilled developer to modernize your tools or lead your team to deliver top-tier e-commerce solutions?"
      />
    </div>
  </DefaultLayout>
)
