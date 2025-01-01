import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'
import { work } from '@/data/work'

import { WorkLogo } from './WorkLogo'

export const WorkPage = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1">
      Professional Experience
    </Typography>

    <div className="flex flex-col items-center justify-center">
      <Typography className="mb-8 text-center">
        Companies and Projects I've Contributed To:
      </Typography>

      <div className="mb-8 flex flex-col justify-center gap-10">
        {work.map(project => (
          <div
            key={project.company}
            className="flex flex-col justify-start gap-5 sm:flex-row sm:items-center"
          >
            <WorkLogo company={project.company} LogoComponent={project.logo} />

            <div className="flex flex-col">
              <Typography as="span" className="text-lg font-bold">
                {project.company}
              </Typography>

              <Typography as="h5" variant="body" className="font-medium">
                {project.position}
              </Typography>
              <Typography as="h5" variant="small" className="text-slate-500">
                {project.yearFrom}-{project.yearTo}{' '}
              </Typography>

              <ul>
                {project.responsibilities.map(responsibility => (
                  <li key={responsibility}>
                    <Typography as="span" variant="small" className="text-slate-500">
                      - {responsibility}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Cta />
    </div>
  </DefaultLayout>
)
