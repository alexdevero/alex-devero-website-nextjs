import type { FC, HTMLAttributes, PropsWithChildren } from 'react'

import classNames from 'classnames'

import type { HeadingElementType } from './heading'
import { Heading } from './heading'

type TypographyElement = HeadingElementType | 'p' | 'span' | 'div'

type Variant = HeadingElementType | 'subtitle' | 'body' | 'small'

type CommonHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  heading?: boolean
  subheading?: boolean
}

type CommonProps = {
  h1: CommonHeadingProps
  h2: CommonHeadingProps
  h3: CommonHeadingProps
  h4: CommonHeadingProps
  h5: CommonHeadingProps
  h6: CommonHeadingProps
  p: HTMLAttributes<HTMLParagraphElement>
  span: HTMLAttributes<HTMLSpanElement>
  div: HTMLAttributes<HTMLDivElement>
}

const variantClasses = {
  h1: 'text-5xl',
  h2: 'text-4xl',
  h3: 'text-3xl',
  h4: 'text-2xl',
  h5: 'text-xl',
  h6: 'text-lg',
  subtitle: 'text-lg',
  body: 'text-base',
  small: 'text-sm',
} satisfies Record<Variant, string>

type Props = {
  as?: TypographyElement
  variant?: Variant
  className?: string
} & CommonProps[TypographyElement]

export const Typography: FC<PropsWithChildren<Props>> = ({ as = 'div', className, variant = 'body', ...props }) => {
  const El = as

  if (variant.startsWith('h')) {
    return <Heading className={classNames(className, variantClasses[variant as Variant])} {...props} />
  }

  return (
    <El
      className={classNames(className, variantClasses[variant as Variant], 'text-gray-500 dark:text-gray-500')}
      {...props}
    />
  )
}
