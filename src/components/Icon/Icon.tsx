import classNames from 'classnames'
import type { FC, SVGProps } from 'react'

type Props = {
  className?: string
  height?: number
  icon: FC<SVGProps<SVGSVGElement>>
  size?: number
  width?: number
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
    height={size ?? height}
    width={size ?? width}
    {...props}
  />
)
