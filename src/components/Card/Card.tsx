import classNames from 'classnames'
import Link from 'next/link'
import type { FC, PropsWithChildren } from 'react'

type Props = {
  className?: string
  fitContent?: boolean
  isInteractive?: boolean
  href?: string
}

export const Card: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  fitContent = false,
  isInteractive = false,
  href,
}) => {
  const Wrapper = isInteractive && href !== undefined ? Link : 'div'

  return (
    <Wrapper
      className={classNames(
        'bg-white-100 flex flex-col rounded-lg p-6 dark:bg-gray-800/50',
        {
          'w-fit': fitContent,
          'cursor-pointer transition-all duration-300 hover:shadow-lg': isInteractive,
        },
        className
      )}
      href={href ?? '/'}
    >
      {children}
    </Wrapper>
  )
}
