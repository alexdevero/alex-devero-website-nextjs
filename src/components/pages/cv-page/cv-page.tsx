import { Heading } from '@/components/heading'
import { cvRecords } from '@/data/cv-records'

import Layout from '../../layout'
import { CvCharts } from './cv-charts'

export const CvPage = () => (
  <Layout title="CV">
    <Heading>My CV</Heading>

    <div className="mb-8 ml-auto mr-auto flex max-w-md flex-col gap-2">
      <div>
        <span className="font-semibold">Name:</span> {cvRecords.personalInfo.name}
      </div>
      <div>
        <span className="font-semibold">Location:</span> {cvRecords.personalInfo.address}
      </div>
      <div>
        <span className="font-semibold">E-mail:</span>{' '}
        <a href={`mailto:${cvRecords.personalInfo.email}`}>{cvRecords.personalInfo.email}</a>
      </div>
      <div>
        <span className="font-semibold">Web:</span>{' '}
        <a href={cvRecords.personalInfo.website} target="_blank" rel="noopener noreferrer">
          {cvRecords.personalInfo.website}
        </a>
      </div>
      <div>
        <span className="font-semibold">Github:</span>{' '}
        <a href={cvRecords.personalInfo.github} target="_blank" rel="noopener noreferrer">
          {cvRecords.personalInfo.github}
        </a>
      </div>
      <div>
        <span className="font-semibold">Linkedin:</span>{' '}
        <a href={cvRecords.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
          {cvRecords.personalInfo.linkedin}
        </a>
      </div>
    </div>

    <div className="h-full">
      <CvCharts />
    </div>
  </Layout>
)
