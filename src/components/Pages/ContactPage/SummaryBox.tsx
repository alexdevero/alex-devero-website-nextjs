import type { FC } from 'react'

import { Card } from '@/components/Card/Card'
import { Typography } from '@/components/Typography'

export const SummaryBox: FC = () => (
  <Card>
    <Typography as="h2" variant="h4" centered={false} className="!mb-2">
      What to expect
    </Typography>
    <ul className="list-disc pl-4">
      <li>
        <Typography as="span">20-minute discovery call to clarify scope and outcomes</Typography>
      </li>
      <li>
        <Typography as="span">
          TypeScript / React / Next.js focus, performance and delivery first
        </Typography>
      </li>
      <li>
        <Typography as="span">Follow-up summary with next steps within 24h</Typography>
      </li>
    </ul>
  </Card>
)
