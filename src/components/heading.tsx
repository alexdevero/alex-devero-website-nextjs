import type { FC, HTMLAttributes } from 'react'

import classNames from 'classnames'

export type HeadingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingElementType
  centered?: boolean
  heading?: boolean
  subheading?: boolean
}

export const Heading: FC<Props> = ({
  as = 'h1',
  centered = true,
  className,
  heading,
  subheading,
  children,
  ...rest
}) => {
  const Element = as

  return (
    <Element
      className={classNames(
        'mb-8 mt-8 text-center font-bold',
        {
          'text-center': centered,
          'text-5xl': heading || !subheading,
          'text-4xl text-gray-700': subheading,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  )
}
