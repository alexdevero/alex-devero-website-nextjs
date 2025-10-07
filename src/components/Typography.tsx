import classNames from 'classnames'
import type { FC, HTMLAttributes, PropsWithChildren } from 'react'

import type { HeadingElementType } from './Heading'
import { Heading } from './Heading'

type TypographyElement = HeadingElementType | 'p' | 'span' | 'div'

type Variant = HeadingElementType | 'subtitle' | 'body' | 'small'

type CommonHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  heading?: boolean
  subheading?: boolean
}

type CommonProps = {
  div: HTMLAttributes<HTMLDivElement>
  h1: CommonHeadingProps
  h2: CommonHeadingProps
  h3: CommonHeadingProps
  h4: CommonHeadingProps
  h5: CommonHeadingProps
  h6: CommonHeadingProps
  p: HTMLAttributes<HTMLParagraphElement>
  span: HTMLAttributes<HTMLSpanElement>
}

const variantClasses = {
  h1: 'text-4xl sm:text-5xl',
  h2: 'text-3xl sm:text-4xl',
  h3: 'text-2xl sm:text-3xl',
  h4: 'text-xl sm:text-2xl',
  h5: 'text-lg sm:text-xl',
  h6: 'text-base sm:text-lg',
  subtitle: 'text-lg',
  body: 'text-base',
  small: 'text-sm',
} satisfies Record<Variant, string>

type Props = {
  as?: TypographyElement
  centered?: boolean
  className?: string
  muted?: boolean
  variant?: Variant
} & CommonProps[TypographyElement]

export const Typography: FC<PropsWithChildren<Props>> = ({
  as = 'div',
  centered = false,
  className,
  muted = false,
  variant = 'body',
  ...props
}) => {
  const El = as

  if (variant.startsWith('h')) {
    return (
      <Heading
        centered={centered}
        className={classNames(className, variantClasses[variant as Variant])}
        {...props}
      />
    )
  }

  return (
    <El
      className={classNames(className, variantClasses[variant as Variant], {
        'text-black-200 dark:text-gray-400': !muted,
        'text-gray-1400 dark:text-gray-1400 font-medium': muted,
        'text-center': centered,
      })}
      {...props}
    />
  )
}
