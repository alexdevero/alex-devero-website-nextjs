import type { FC } from 'react'

import { Cta } from '@/components/Cta/Cta'
import { Typography } from '@/components/Typography'
import { work } from '@/data/work'

import { WorkLogo } from './WorkLogo'
import { workPageInfo } from './constants'
import {
  renderCaseStudy,
  renderCompany,
  renderResponsibilities,
  renderRole,
  renderTechStack,
  renderYear,
} from './utils'

export const WorkPageOldContent: FC = () => (
  <div className="flex flex-col items-center justify-center">
    <Typography className="mx-auto mb-12 max-w-3xl text-left">
      Throughout my career, I&apos;ve had the opportunity to work with a variety of companies and
      contribute to projects that solve real-world problems. Below, you&apos;ll find a timeline of
      my professional experience, showcasing the roles I&apos;ve taken on and the value I&apos;ve
      brought to each project.
    </Typography>

    <div className="mb-8 flex flex-col justify-center gap-16">
      {work.map(project => (
        <div
          key={project.company}
          className="flex flex-col justify-start gap-5 sm:flex-row sm:items-start"
        >
          <WorkLogo LogoComponent={project.logo} company={project.company} />

          <div className="flex flex-col gap-1 md:max-w-[600px]">
            {workPageInfo.map(item => {
              switch (item.key) {
                case 'company':
                  return renderCompany(project.company, item.label)
                case 'position':
                  return renderRole(project.position, item.label)
                case 'year':
                  return renderYear(project.yearFrom, project.yearTo, item.label)
                case 'techStack':
                  return (
                    <div key={item.label} className="mt-3">
                      {renderTechStack(project.technologies, item.label)}
                    </div>
                  )
                case 'responsibilities':
                  return (
                    <div key={item.label} className="mt-3">
                      {renderResponsibilities(project.responsibilities, item.label)}
                    </div>
                  )
                case 'caseStudy':
                  return (
                    <div key={item.label} className="mt-3">
                      {renderCaseStudy(project.caseStudy, item.label)}
                    </div>
                  )
                default:
                  return null
              }
            })}
          </div>
        </div>
      ))}
    </div>

    <Cta text="Interested in working together?" />
  </div>
)
