import { Cta } from '@/components/cta/cta'
import { Typography } from '@/components/typography'
import { work } from '@/data/work'

import { Heading } from '../../heading'
import Layout from '../../layout'
import { getLogoColorClasses, getLogoImageWith } from './utils'

export const WorkPage = () => (
  <Layout title="Work">
    <Heading>Professional Experience</Heading>

    <div className="flex flex-col items-center justify-center">
      <Typography className="mb-8 text-center">Companies and Projects I've Contributed To:</Typography>

      <div className="mb-8 flex flex-col justify-center gap-6">
        {work.map(project => (
          <div key={project.company} className="flex flex-row items-center justify-start gap-3 md:gap-5">
            <div className="flex w-[128px] items-center justify-center">
              {project.logo({
                className: `object-contain ${getLogoColorClasses(project.company)}`,
                style: getLogoImageWith(project.company),
              })}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">{project.company}</span>

              <h5 className="text-base font-medium">{project.position}</h5>
              <h5 className="text-sm text-slate-500">
                {project.yearFrom}-{project.yearTo}{' '}
              </h5>
            </div>
          </div>
        ))}
      </div>

      <Cta />
    </div>
  </Layout>
)
