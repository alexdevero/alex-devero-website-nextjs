import { CvCharts } from '@/components/cv-charts'
import Layout from '@/components/layout'
import { cvRecords } from '@/data/cv-records'

export default function Cv() {
  return (
    <Layout title='CV | Alex Devero'>
      <h1 className='mb-8 mt-8 text-center text-5xl font-bold'>My CV</h1>

      <div className='mb-8 ml-auto mr-auto flex max-w-md flex-col gap-2'>
        <div>
          <span className='font-semibold'>Name:</span> {cvRecords.personalInfo.name}
        </div>
        <div>
          <span className='font-semibold'>Location:</span> {cvRecords.personalInfo.address}
        </div>
        <div>
          <span className='font-semibold'>E-mail:</span>{' '}
          <a href={`mailto:${cvRecords.personalInfo.email}`}>{cvRecords.personalInfo.email}</a>
        </div>
        <div>
          <span className='font-semibold'>Web:</span>{' '}
          <a href={cvRecords.personalInfo.website} target='_blank' rel='noopener noreferrer'>
            {cvRecords.personalInfo.website}
          </a>
        </div>
        <div>
          <span className='font-semibold'>Github:</span>{' '}
          <a href={cvRecords.personalInfo.github} target='_blank' rel='noopener noreferrer'>
            {cvRecords.personalInfo.github}
          </a>
        </div>
        <div>
          <span className='font-semibold'>Linkedin:</span>{' '}
          <a href={cvRecords.personalInfo.linkedin} target='_blank' rel='noopener noreferrer'>
            {cvRecords.personalInfo.linkedin}
          </a>
        </div>
      </div>

      <div className='h-full'>
        <CvCharts />
      </div>
    </Layout>
  )
}
