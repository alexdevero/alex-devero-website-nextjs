import { ReactNode } from 'react'

import NextLink, { LinkProps } from 'next/link'

type Props = {
  children: ReactNode
  className?: string
  disabled?: boolean
} & LinkProps

export const Link = ({ className, href, children, ...rest }: Props) => {
  const isExternal = href.toString().startsWith('http')

  return (
    <NextLink
      href={href}
      className={className}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      {...rest}
    >
      {children}
    </NextLink>
  )
}
