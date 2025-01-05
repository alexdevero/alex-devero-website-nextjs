import classNames from 'classnames'

import { Cta } from '@/components/Cta/Cta'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'
import { work } from '@/data/work'

import { WorkLogo } from './WorkLogo'
import { workPageInfo } from './constants'
import { getWorkInfoValue } from './utils'

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

            <div className="flex flex-col gap-1 md:mx-auto md:max-w-[600px]">
              {workPageInfo.map(item => {
                const value = getWorkInfoValue(item, project)

                if (!value) return null

                return (
                  <div key={item.label} className="flex flex-col gap-1.5">
                    <div
                      className={classNames('flex gap-1', {
                        'flex-col': item.useList,
                      })}
                    >
                      <Typography
                        as="span"
                        variant="body"
                        className="font-medium text-gray-400 dark:!text-gray-600"
                      >
                        {item.label}:
                      </Typography>{' '}
                      <Typography as="span" variant="body">
                        {value}
                      </Typography>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <Cta />
    </div>
  </DefaultLayout>
)
