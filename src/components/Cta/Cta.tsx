import type { FC } from 'react'

import { Link } from '../Link'
import { Typography } from '../Typography'

type Props = {
  text?: string
  ctaText?: string
}

export const Cta: FC<Props> = ({
  text = 'Interested in working together?',
  ctaText = "Let's discuss your project",
}) => (
  <div className="mt-3 flex flex-col items-center justify-center gap-2">
    <div className="mb-2 flex max-w-md flex-col items-center justify-center gap-2">
      <Typography>{text}</Typography>
    </div>

    <Link href="/contact" buttonStyle>
      {ctaText}
    </Link>
  </div>
)
