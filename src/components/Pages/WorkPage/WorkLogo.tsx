import type { FC, ReactNode } from 'react'

import type { Company, LogoProps } from '@/data/work'

import { getLogoColorClasses, getLogoImageWith } from './utils'

type WorkLogoProps = {
  company: Company
  LogoComponent: (props: LogoProps) => ReactNode
}

export const WorkLogo: FC<WorkLogoProps> = ({ company, LogoComponent }) => (
  <div className="flex w-[128px] max-w-[128px] items-center justify-center">
    {LogoComponent({
      className: `object-contain ${getLogoColorClasses(company)}`,
      style: getLogoImageWith(company),
    })}
  </div>
)
