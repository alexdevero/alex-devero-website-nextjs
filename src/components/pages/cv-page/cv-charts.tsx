'use client'

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'

import { Typography } from '@/components/typography'
import {
  api,
  backend,
  databases,
  frontend,
  languages,
  misc,
  programmingLanguages,
  testing,
  tools,
} from '@/data/cv-records'

const charts = [
  { title: 'Programming languages:', data: programmingLanguages },
  { title: 'Front-end:', data: frontend },
  { title: 'Backend-end:', data: backend },
  { title: 'APIs:', data: api },
  { title: 'Databases:', data: databases },
  { title: 'Testing:', data: testing },
  { title: 'Tools:', data: tools },
  { title: 'Misc:', data: misc },
  { title: 'Languages:', data: languages },
]

export const CvCharts = () => (
  <div className="m-auto min-h-full">
    <div className="m-auto grid min-h-full max-w-[calc(100vw-64px)] grid-cols-1 gap-x-4 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {charts.map(({ title, data }) => (
        <div key={title} className="flex flex-col gap-3">
          <Typography as="h2" variant="h5" className="m-0 text-base font-bold">
            {title}
          </Typography>
          <ResponsiveContainer className="min-h-[300px] lg:min-h-[250px]">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  </div>
)
