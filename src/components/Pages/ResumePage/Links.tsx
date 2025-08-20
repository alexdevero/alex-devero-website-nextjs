import classNames from 'classnames'
import type { FC } from 'react'

import { Link } from '@/components/Link'
import { Typography } from '@/components/Typography'
import { socialMedia } from '@/constants/links'

const links = [
  {
    heading: 'Github',
    text: socialMedia.github,
    iconClass: 'fab fa-github',
  },
  {
    heading: 'Linkedin',
    text: socialMedia.linkedIn,
    iconClass: 'fab fa-linkedin',
  },
  {
    heading: 'Substack',
    text: socialMedia.substack,
    iconClass: 'fa fa-bookmark',
  },
  {
    heading: 'Goodreads',
    text: socialMedia.goodreads,
    iconClass: 'fab fa-goodreads',
  },
] as const

export const Links: FC = () => (
  <div>
    <Typography as="h2" variant="h2">
      Links
    </Typography>

    <ul className="flex gap-5">
      {links.map(link => (
        <li key={link.heading}>
          <Link href={link.text}>
            <span className={classNames(link.iconClass, 'text-xl')} title={link.heading} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
)
