import type { FC } from 'react'

import { DefaultLayout } from '@/components/DefaultLayout'
import { Typography } from '@/components/Typography'

import { Capabilities } from './Capabilities'
import { CoreStack } from './CoreStack'
import { Download } from './Download'
import { Languages } from './Languages'
import { Links } from './Links'
import { QuickInfo } from './QuickInfo'
import { SelectedWork } from './SelectedWork'
import { Tools } from './Tools'

export const ResumePage: FC = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1" centered>
      Resume at a Glance
    </Typography>

    <div className="mx-auto mb-12 max-w-[800px]">
      <Typography as="p" className="mb-8" variant="body" centered>
        Senior Frontend Engineer (React/Next.js) and Frontend Tech Lead based in Prague, with 10+
        years building fast, reliable web applications. Open to senior frontend and tech-lead roles
        across the EU and remote.
      </Typography>

      <QuickInfo />

      <CoreStack />

      <Capabilities />

      <SelectedWork />

      <Tools />

      <Languages />

      <Links />

      <Download />
    </div>
  </DefaultLayout>
)
