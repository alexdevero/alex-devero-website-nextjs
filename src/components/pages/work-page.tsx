import { work } from '@/data/work'

import { Heading } from '../heading'
import Layout from '../layout'

export const WorkPage = () => (
  <Layout title="Work">
    <Heading>Professional Experience</Heading>

    <div className="flex flex-col items-center justify-center">
      <p className="mb-8 text-center">Companies and Projects I've Contributed To:</p>

      <div className="mb-8 flex flex-col justify-center gap-6">
        {work.map(project => (
          <div key={project.company} className="flex flex-row items-start justify-start gap-3">
            <div className="flex w-[128px] items-center justify-center text-gray-800 opacity-60 grayscale">
              {project.logo({
                className: 'w-[128px]',
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
    </div>
  </Layout>
)
