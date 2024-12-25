import type { FC } from 'react'

import { Link } from '../link'
import { Typography } from '../typography'

export const Cta: FC = () => (
  <div className="mt-2 flex flex-col items-center justify-center gap-2">
    <Typography>Interested in working together?</Typography>

    <Link href="/contact" buttonStyle>
      Let's discuss your project
    </Link>
  </div>
)
