import Layout from '@/components/layout'
import { work } from '@/data/work'

export default async function Projects() {
  return (
    <Layout title='Work'>
      <h1 className='mb-8 mt-8 text-center text-5xl font-bold'>Work</h1>

      <div className='flex flex-col items-center justify-center'>
        <p className='mb-8 text-center'>Below is are companies I've worked with so far:</p>

        <div className='mb-8 grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {work.map(project => (
            <div key={project.company} className='flex flex-col'>
              <span className='text-lg font-bold'>{project.position}</span>

              <h5 className='text-base font-medium'>{project.company}</h5>
              <h5 className='text-sm text-slate-500'>
                {project.yearFrom}-{project.yearTo}{' '}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
