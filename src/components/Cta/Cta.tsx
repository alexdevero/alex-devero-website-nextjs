import classNames from 'classnames'
import type { FC } from 'react'

import { Link } from '../Link'
import { Typography } from '../Typography'

type Props = {
  text?: string
  ctaText?: string
  centered?: boolean
}

export const Cta: FC<Props> = ({
  text = 'Interested in working together?',
  ctaText = "Let's discuss your project",
  centered = false,
}) => (
  <div
    className={classNames('mb-3 mt-4 flex flex-col items-center justify-center gap-2', {
      'text-center': centered,
    })}
  >
    <div className="mb-3 flex max-w-md flex-col items-center justify-center gap-2">
      <Typography>{text}</Typography>
    </div>

    <Link href="/contact" buttonStyle>
      {ctaText}
    </Link>
  </div>
)
