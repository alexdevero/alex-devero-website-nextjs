import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type Props = HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  centered?: boolean
}

export const Heading = ({ as = 'h1', centered = true, children, ...rest }: Props) => {
  const Element = as

  return (
    <Element
      className={classNames('mb-8 mt-8 text-center text-5xl font-bold', {
        'text-center': centered,
      })}
      {...rest}
    >
      {children}
    </Element>
  )
}
