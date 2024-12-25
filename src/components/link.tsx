import type { FC, PropsWithChildren } from 'react'

import type { LinkProps } from 'next/link'
import NextLink from 'next/link'

import classNames from 'classnames'

const classes = 'text-gray-500 transition-all hover:text-gray-800 hover:underline'

const isExternal = (href: LinkProps['href']) => href.toString().startsWith('http')

type Props = {
  active?: boolean
  className?: string
  disabled?: boolean
  initialUnderline?: boolean
} & LinkProps

export const Link: FC<PropsWithChildren<Props>> = ({
  active,
  className,
  href,
  children,
  initialUnderline = true,
  ...props
}) => {
  if (href.toString().startsWith('mailto:') || href.toString().startsWith('tel:')) {
    return (
      <a
        href={href.toString()}
        className={classNames(classes, className, {
          'cursor-not-allowed': props.disabled,
          'text-gray-800 underline': active,
          underline: initialUnderline,
          'no-underline': !initialUnderline,
        })}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={href}
      className={classNames(classes, className, {
        'cursor-not-allowed': props.disabled,
        'text-gray-800 underline': active,
      })}
      rel={isExternal(href) ? 'noopener noreferrer' : undefined}
      target={isExternal(href) ? '_blank' : undefined}
      {...props}
    >
      {children}
    </NextLink>
  )
}
