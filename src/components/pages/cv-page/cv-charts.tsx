'use client'

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'

import { backend, frontend, languages, misc, programmingLanguages, tools } from '@/data/cv-records'

export const CvCharts = () => {
  return (
    <div className='m-auto min-h-full lg:max-w-5xl'>
      <div className='grid min-h-full grid-cols-2 gap-6'>
        <div className='flex flex-col gap-3'>
          <h1 className='m-0 text-base font-bold'>Front-end:</h1>
          <ResponsiveContainer className='h-[300px]'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={frontend}>
              <PolarGrid />
              <PolarAngleAxis dataKey='name' />
              <PolarRadiusAxis />
              <Radar dataKey='value' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='m-0 text-base font-bold'>Backend-end:</h1>
          <ResponsiveContainer className='min-h-[300px]'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={backend}>
              <PolarGrid />
              <PolarAngleAxis dataKey='name' />
              <PolarRadiusAxis />
              <Radar dataKey='value' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='m-0 text-base font-bold'>Tools:</h1>
          <ResponsiveContainer className='min-h-[300px]'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={tools}>
              <PolarGrid />
              <PolarAngleAxis dataKey='name' />
              <PolarRadiusAxis />
              <Radar dataKey='value' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-md mbase font-bold'>Misc:</h1>
          <ResponsiveContainer className='min-h-[300px]'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={misc}>
              <PolarGrid />
              <PolarAngleAxis dataKey='name' />
              <PolarRadiusAxis />
              <Radar dataKey='value' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-md mbase font-bold'>Programming languages:</h1>
          <ResponsiveContainer className='min-h-[300px]'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={programmingLanguages}>
              <PolarGrid />
              <PolarAngleAxis dataKey='name' />
              <PolarRadiusAxis />
              <Radar dataKey='value' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='mt-8 grid min-h-full grid-cols-2 gap-4'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-md mbase font-bold'>Languages:</h1>
          <ResponsiveContainer className='min-h-[300px]'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={languages}>
              <PolarGrid />
              <PolarAngleAxis dataKey='name' />
              <PolarRadiusAxis />
              <Radar dataKey='value' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
