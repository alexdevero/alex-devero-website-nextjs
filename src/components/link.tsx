import type { FC, PropsWithChildren } from 'react'

import type { LinkProps } from 'next/link'
import NextLink from 'next/link'

import classNames from 'classnames'

const isExternal = (href: LinkProps['href']) => href.toString().startsWith('http')

type Props = {
  className?: string
  disabled?: boolean
} & LinkProps

export const Link: FC<PropsWithChildren<Props>> = ({ className, href, children, ...props }) => {
  if (href.toString().startsWith('mailto:') || href.toString().startsWith('tel:')) {
    return (
      <a href={href.toString()} className={classNames(className, 'text-gray-500 underline')} {...props}>
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={href}
      className={classNames(className, 'text-gray-500 underline')}
      rel={isExternal(href) ? 'noopener noreferrer' : undefined}
      target={isExternal(href) ? '_blank' : undefined}
      {...props}
    >
      {children}
    </NextLink>
  )
}
