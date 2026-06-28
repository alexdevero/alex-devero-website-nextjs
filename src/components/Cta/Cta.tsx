import classNames from 'classnames'
import type { FC } from 'react'

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
  ctaText = 'Get in touch',
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

    <Button centered={false} href={ctaUrl}>
      {ctaText}
    </Button>
  </div>
)
