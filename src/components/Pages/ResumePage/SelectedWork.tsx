import type { FC } from 'react'

import { Link } from '@/components/Link'
import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'

export const SelectedWork: FC = () => (
  <div>
    <Typography as="h2" variant="h2">
      Selected Work
    </Typography>
    <List
      items={[
        'CDN77: performance and UI modernization (Next.js), tighter DX',
        'Digitoo: product delivery and architecture improvements',
        'Persoo: front-end delivery, testing, deployment hygiene',
      ]}
    />

    <Typography as="p" variant="body" className="mt-4" muted>
      {'>'} See detailed write-ups on the <Link href="/work">Work</Link> page.
    </Typography>
  </div>
)
