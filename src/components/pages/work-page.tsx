import { work } from '@/data/work'

import { Heading } from '../heading'
import Layout from '../layout'

export const WorkPage = () => (
  <Layout title='Work'>
    <Heading>Work</Heading>

    <div className='flex flex-col items-center justify-center'>
      <p className='mb-8 text-center'>Below is are companies I've worked with so far:</p>

      <div className='mb-8 grid grid-cols-1 justify-center gap-6'>
        {work.map(project => (
          <div key={project.company} className='flex flex-col text-center'>
            <span className='text-lg font-bold'>{project.company}</span>

            <h5 className='text-base font-medium'>{project.position}</h5>
            <h5 className='text-sm text-slate-500'>
              {project.yearFrom}-{project.yearTo}{' '}
            </h5>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)
