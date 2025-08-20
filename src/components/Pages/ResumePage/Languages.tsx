import type { FC } from 'react'

import { Typography } from '@/components/Typography'

export const Languages: FC = () => (
  <div>
    <Typography as="h2" variant="h2">
      Languages
    </Typography>

    <div className="flex gap-4">
      <div>English (advanced)</div>
      <div>Czech (native)</div>
    </div>
  </div>
)
