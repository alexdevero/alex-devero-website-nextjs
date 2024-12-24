import type { FC, ReactNode } from 'react'

import type { LinkProps } from 'next/link'
import NextLink from 'next/link'

type Props = {
  children: ReactNode
  className?: string
  disabled?: boolean
} & LinkProps

export const Link: FC<Props> = ({ className, href, children, ...props }) => {
  const isExternal = href.toString().startsWith('http')

  return (
    <NextLink
      href={href}
      className={className}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      {...props}
    >
      {children}
    </NextLink>
  )
}
