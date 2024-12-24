import type { FC } from 'react'

import Layout from '@/components/layout'

const NotFoundPage: FC = () => (
  <Layout title='404'>
    <div className='flex flex-1 items-center justify-center text-center'>
      <div className='max-w-2xl'>
        <h1 className='mb-2 text-4xl font-bold'>404 - NOT FOUND</h1>

        <p className='text-base'>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
