import classNames from 'classnames'
import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import type { FC, PropsWithChildren } from 'react'

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
      'text-gray-800 underline dark:text-gray-1100': active && !buttonStyle,
      underline: initialUnderline || active,
      'no-underline': (!initialUnderline && !active) || buttonStyle,
      'text-gray-500 font-semibold hover:text-gray-800 hover:underline dark:text-gray-1300 dark:hover:text-gray-1500':
        !buttonStyle,
      [buttonClasses]: buttonStyle,
    },
    className
  )

  const parsedHref = typeof href === 'string' ? href : href.toString()

  if (parsedHref.startsWith('mailto:') || parsedHref.startsWith('tel:')) {
    return (
      <a href={parsedHref} className={linkClasses} {...props}>
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={parsedHref}
      className={linkClasses}
      rel={isExternal(parsedHref) ? 'noopener noreferrer' : undefined}
      target={isExternal(parsedHref) ? '_blank' : undefined}
      {...props}
    >
      {children}
    </NextLink>
  )
}
