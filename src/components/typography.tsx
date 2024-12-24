import { FC, HTMLAttributes, PropsWithChildren } from 'react'

import classNames from 'classnames'

import { Heading } from './heading'

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'small'

type CommonProps = {
  h1: HTMLAttributes<HTMLHeadingElement>
  h2: HTMLAttributes<HTMLHeadingElement>
  h3: HTMLAttributes<HTMLHeadingElement>
  h4: HTMLAttributes<HTMLHeadingElement>
  h5: HTMLAttributes<HTMLHeadingElement>
  h6: HTMLAttributes<HTMLHeadingElement>
  p: HTMLAttributes<HTMLParagraphElement>
  span: HTMLAttributes<HTMLSpanElement>
  div: HTMLAttributes<HTMLDivElement>
}

type Props = {
  as: TypographyElement
  variant: Variant
  className?: string
} & CommonProps[TypographyElement]

export const Typography: FC<PropsWithChildren<Props>> = ({ as = 'div', className, variant, ...props }) => {
  const El = as

  if (variant.startsWith('h')) {
    return <Heading {...props} />
  }

  return <El className={classNames(className)} {...props} />
}
