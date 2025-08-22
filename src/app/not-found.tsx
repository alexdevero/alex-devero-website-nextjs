import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'
import { getMetadata } from '@/constants/metadata'
import { routers } from '@/constants/router'

export const metadata = getMetadata({
  title: '404',
  description: 'Page not found',
  pathname: routers.notFound,
})

export default function NotFound() {
  return (
    <DefaultLayout>
      <div className="flex flex-1 items-center justify-center text-center">
        <div className="max-w-2xl">
          <Typography as="h1" variant="h1" className="mb-2 text-4xl font-bold">
            404 - NOT FOUND
          </Typography>

          <Typography>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
        </div>
      </div>
    </DefaultLayout>
  )
}
