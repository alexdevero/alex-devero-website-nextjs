import { Cta } from '@/components/cta/cta'
import { Link } from '@/components/link'
import { Typography } from '@/components/typography'
import { cvRecords } from '@/data/cv-records'

import Layout from '../../layout'
import { CvCharts } from './cv-charts'

export const CvPage = () => (
  <Layout title="CV">
    <Typography as="h1" variant="h1">
      My CV
    </Typography>

    <div className="mb-8 ml-auto mr-auto flex max-w-md flex-col gap-2">
      <div>
        <span className="font-semibold">Name:</span> <Typography as="span">{cvRecords.personalInfo.name}</Typography>
      </div>
      <div>
        <span className="font-semibold">Location:</span>{' '}
        <Typography as="span">{cvRecords.personalInfo.address}</Typography>
      </div>
      <div>
        <span className="font-semibold">E-mail:</span>{' '}
        <Link href={`mailto:${cvRecords.personalInfo.email}`}>{cvRecords.personalInfo.email}</Link>
      </div>
      <div>
        <span className="font-semibold">Web:</span>{' '}
        <Link href={cvRecords.personalInfo.website}>{cvRecords.personalInfo.website}</Link>
      </div>
      <div>
        <span className="font-semibold">Github:</span>{' '}
        <Link href={cvRecords.personalInfo.github}>{cvRecords.personalInfo.github}</Link>
      </div>
      <div>
        <span className="font-semibold">Linkedin:</span>{' '}
        <Link href={cvRecords.personalInfo.linkedin}>{cvRecords.personalInfo.linkedin}</Link>
      </div>
    </div>

    <div className="h-full">
      <CvCharts />
    </div>

    <Cta />
  </Layout>
)
