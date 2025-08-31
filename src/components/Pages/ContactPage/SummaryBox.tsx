import type { FC } from 'react'

import { Card } from '@/components/Card/Card'
import { List } from '@/components/List/List'
import { Typography } from '@/components/Typography'

export const SummaryBox: FC = () => (
  <Card>
    <Typography as="h2" centered={false} className="!mb-2 mt-0" variant="h4">
      What to expect
    </Typography>

    <List
      items={[
        '20-minute discovery call to clarify scope and outcomes',
        'TypeScript / React / Next.js focus, performance and delivery first',
        'Follow-up summary with next steps within 24h',
      ]}
      listStyle="dashes"
    />
  </Card>
)
