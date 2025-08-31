'use client'

import { track } from '@vercel/analytics'

import type { FC } from 'react'

import { Link } from '@/components/Link'
import { Typography } from '@/components/Typography'
import { calendlyLink, cvLinkLocal } from '@/constants/links'

export const Download: FC = () => (
  <div>
    <Typography as="h2" variant="h2">
      Download
    </Typography>

    <Link href={cvLinkLocal} onClick={() => track('download_cv')}>
      Download PDF
    </Link>

    <Typography as="p" className="mt-4" variant="body" muted>
      {'>'} Prefer a quick intro? <Link href={calendlyLink}>Schedule a 20-min call</Link>.
    </Typography>
  </div>
)
