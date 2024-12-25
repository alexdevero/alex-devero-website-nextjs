import type { FC, PropsWithChildren } from 'react'

import type { LinkProps } from 'next/link'
import NextLink from 'next/link'

import classNames from 'classnames'

import { buttonClasses } from './button'

const isExternal = (href: LinkProps['href']) => href.toString().startsWith('http')

type Props = {
  active?: boolean
  buttonStyle?: boolean
  className?: string
  disabled?: boolean
  initialUnderline?: boolean
} & LinkProps

export const Link: FC<PropsWithChildren<Props>> = ({
  active,
  buttonStyle,
  className,
  href,
  children,
  initialUnderline = true,
  ...props
}) => {
  const linkClasses = classNames(
    'transition-all',
    {
      'cursor-not-allowed': props.disabled,
      'text-gray-800 underline': active && !buttonStyle,
      underline: initialUnderline,
      'no-underline': !initialUnderline || buttonStyle,
      'text-gray-500 hover:text-gray-800 hover:underline': !buttonStyle,
      [buttonClasses]: buttonStyle,
    },
    className
  )

  if (href.toString().startsWith('mailto:') || href.toString().startsWith('tel:')) {
    return (
      <a href={href.toString()} className={linkClasses} {...props}>
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={href}
      className={linkClasses}
      rel={isExternal(href) ? 'noopener noreferrer' : undefined}
      target={isExternal(href) ? '_blank' : undefined}
      {...props}
    >
      {children}
    </NextLink>
  )
}
