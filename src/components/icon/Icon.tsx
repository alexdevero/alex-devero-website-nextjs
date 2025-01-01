import type { FC, SVGProps } from 'react'

import classNames from 'classnames'

type Props = {
  icon: FC<SVGProps<SVGSVGElement>>
  className?: string
  size?: number
  width?: number
  height?: number
}

export const Icon: FC<Props> = ({
  className,
  icon: IconComponent,
  size = 16,
  width = 16,
  height = 16,
  ...props
}) => (
  <IconComponent
    className={classNames(className)}
    width={size ?? width}
    height={size ?? height}
    {...props}
  />
)
