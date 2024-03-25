import { ReactNode } from 'react'

import NextLink, { LinkProps } from 'next/link'

type Props = {
  disabled?: boolean
  children: ReactNode
} & LinkProps

export const Link = ({ href, children, ...rest }: Props) => {
  const isExternal = href.toString().startsWith('http')

  return (
    <NextLink
      href={href}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      {...rest}
    >
      {children}
    </NextLink>
  )
}
