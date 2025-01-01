import type { FC, PropsWithChildren } from 'react'

import type { LinkProps } from 'next/link'
import NextLink from 'next/link'

import classNames from 'classnames'

import { buttonClasses } from './Button'

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
    'transition-all duration-300',
    {
      'cursor-not-allowed': props.disabled,
      'text-gray-800 underline dark:text-gray-400': active && !buttonStyle,
      underline: initialUnderline || active,
      'no-underline': (!initialUnderline && !active) || buttonStyle,
      'text-gray-500 hover:text-gray-800 hover:underline dark:hover:text-gray-400': !buttonStyle,
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
