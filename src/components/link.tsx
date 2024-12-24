import type { FC, PropsWithChildren } from 'react'

import type { LinkProps } from 'next/link'
import NextLink from 'next/link'

const isExternal = (href: LinkProps['href']) => href.toString().startsWith('http')

type Props = {
  className?: string
  disabled?: boolean
} & LinkProps

export const Link: FC<PropsWithChildren<Props>> = ({ className, href, children, ...props }) => {
  return (
    <NextLink
      href={href}
      className={className}
      rel={isExternal(href) ? 'noopener noreferrer' : undefined}
      target={isExternal(href) ? '_blank' : undefined}
      {...props}
    >
      {children}
    </NextLink>
  )
}
