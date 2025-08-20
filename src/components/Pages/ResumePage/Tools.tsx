import type { FC } from 'react'

import { Typography } from '@/components/Typography'

export const Tools: FC = () => (
  <div>
    <Typography as="h2" variant="h2">
      Tools & Infra
    </Typography>

    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4">
      <div>Vercel</div>
      <div>Docker</div>
      <div>Postgres</div>
      <div>Firebase</div>
      <div>Resend</div>
      <div>Sentry</div>
      <div>Feature flags</div>
      <div>Analytics (GA4 / Plausible)</div>
    </div>
  </div>
)
