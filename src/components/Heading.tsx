import type { FC, HTMLAttributes } from 'react'

import classNames from 'classnames'

export type HeadingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingElementType
  centered?: boolean
}

export const Heading: FC<Props> = ({ as = 'h1', centered = true, className, children, ...rest }) => {
  const Element = as

  return (
    <Element
      className={classNames(
        'mb-8 mt-8 font-bold text-gray-800 dark:text-gray-300',
        {
          'text-center': centered,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  )
}
