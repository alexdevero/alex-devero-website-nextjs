import type { FC } from 'react'

import Layout from '@/components/layout'
import { Typography } from '@/components/typography'

const NotFoundPage: FC = () => (
  <Layout title="404">
    <div className="flex flex-1 items-center justify-center text-center">
      <div className="max-w-2xl">
        <Typography as="h1" variant="h1" className="mb-2 text-4xl font-bold">
          404 - NOT FOUND
        </Typography>

        <Typography>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
