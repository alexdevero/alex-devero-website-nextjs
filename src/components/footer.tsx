import type { FC } from 'react'
import { useMemo } from 'react'

import { footerLinks } from '@/constants/navigation'

import { Link } from './link'
import { Typography } from './typography'

export const Footer: FC = () => {
  const currentYear = useMemo(() => new Date().getFullYear().toString(), [])

  return (
    <footer className="py-5">
      <nav>
        <ul className="align-center flex justify-center gap-4">
          {footerLinks.map(link =>
            link.visible ? (
              <li key={link.path}>
                <Link href={link.path}>
                  <span className={`fab fa-${link.title}`} />
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </nav>

      <Typography as="p" className="mt-3 text-center text-xs">
        Copyright &copy; <span>{currentYear}</span> Alex Devero
      </Typography>
    </footer>
  )
}
