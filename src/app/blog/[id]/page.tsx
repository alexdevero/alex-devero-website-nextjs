import { getMetadata } from '@/constants/metadata'
import { routes } from '@/constants/router'

export const metadata = getMetadata({
  title: 'Blog',
  description:
    'Fast, scalable React/Next.js delivery: development, audits, and project-based execution.',
  pathname: routes.blogLocal,
  index: false, // TODO: add back when blog is live
})

export default function BlogPost() {
  return (
    <div>
      <h1>Blog Post</h1>
    </div>
  )
}
