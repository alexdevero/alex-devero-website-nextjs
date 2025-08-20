import type { FC } from 'react'

import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'

export const Capabilities: FC = () => (
  <div>
    <Typography as="h2" variant="h2" centered={false}>
      Capabilities
    </Typography>

    <List
      items={[
        'Product delivery: MVP → v1, clean architecture, docs & handoff',
        'Performance: SSR/ISR, caching, bundle diet, web vitals improvements',
        'Quality: unit/integration tests, CI/CD, review workflows',
        'Modernization: legacy React → Next.js migrations, design-system rollout',
      ]}
    />
  </div>
)
