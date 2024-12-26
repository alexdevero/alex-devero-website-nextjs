import { Cta } from '@/components/cta/cta'
import Layout from '@/components/layout'
import { Link } from '@/components/link'
import { Typography } from '@/components/typography'
import { cvRecords } from '@/data/cv-records'

import { CvCharts } from './cv-charts'

export const CvPage = () => (
  <Layout>
    <Typography as="h1" variant="h1">
      My CV
    </Typography>

    <div className="mb-8 ml-auto mr-auto flex max-w-md flex-col gap-2">
      <div>
        <Typography as="span" className="font-semibold">
          Name:
        </Typography>{' '}
        <Typography as="span">{cvRecords.personalInfo.name}</Typography>
      </div>
      <div>
        <Typography as="span" className="font-semibold">
          Location:
        </Typography>{' '}
        <Typography as="span">{cvRecords.personalInfo.address}</Typography>
      </div>
      <div>
        <Typography as="span" className="font-semibold">
          E-mail:
        </Typography>{' '}
        <Link href={`mailto:${cvRecords.personalInfo.email}`}>{cvRecords.personalInfo.email}</Link>
      </div>
      <div>
        <Typography as="span" className="font-semibold">
          Web:
        </Typography>{' '}
        <Link href={cvRecords.personalInfo.website}>{cvRecords.personalInfo.website}</Link>
      </div>
      <div>
        <Typography as="span" className="font-semibold">
          Github:
        </Typography>{' '}
        <Link href={cvRecords.personalInfo.github}>{cvRecords.personalInfo.github}</Link>
      </div>
      <div>
        <Typography as="span" className="font-semibold">
          Linkedin:
        </Typography>{' '}
        <Link href={cvRecords.personalInfo.linkedin}>{cvRecords.personalInfo.linkedin}</Link>
      </div>
    </div>

    <div className="h-full">
      <CvCharts />
    </div>

    <Cta />
  </Layout>
)
