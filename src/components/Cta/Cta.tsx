'use client'

import { track } from '@vercel/analytics'

import classNames from 'classnames'
import type { FC } from 'react'

import { calendlyLink } from '@/constants/links'
import { routes } from '@/constants/router'

import { Button } from '../Button'
import { Typography } from '../Typography'

type Props = {
  centered?: boolean
  className?: string
  ctaText?: string
  ctaUrl?: string
  text?: string
}

export const Cta: FC<Props> = ({
  text,
  className,
  ctaText = 'Send a message',
  centered = false,
  ctaUrl = routes.contact,
}) => (
  <div
    className={classNames('my-8 flex flex-col items-center justify-center gap-2', className, {
      'text-center': centered,
    })}
  >
    {text !== undefined && (
      <div className="mb-3 flex max-w-md flex-col items-center justify-center gap-2">
        <Typography>{text}</Typography>
      </div>
    )}

    <div className="flex flex-col gap-2 sm:flex-row">
      <Button centered={false} href={calendlyLink} onClick={() => track('cta_schedule_call')}>
        Schedule a 20-min call
      </Button>
      <Button href={ctaUrl} variant="outline">
        {ctaText}
      </Button>
    </div>
  </div>
)
