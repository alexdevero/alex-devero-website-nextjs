import type { FC } from 'react'

import { Card } from '@/components/Card/Card'
import { Typography } from '@/components/Typography'
import { calendlyLink } from '@/constants/links'

export const CalendlyCard: FC = () => (
  <Card>
    <div className="flex flex-col gap-2" id="schedule">
      <Typography as="h2" centered={false} className="mb-2! mt-0" variant="h4">
        Schedule a call
      </Typography>

      <Typography className="mb-4" variant="body">
        Pick a time that works for you. The meeting is added to both calendars automatically.
      </Typography>

      {/* Calendly inline widget begin */}
      <div
        className="calendly-inline-widget"
        data-url={`${calendlyLink}?hide_event_type_details=1`}
        style={{ minWidth: '320px', height: '700px' }}
      />
      <script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      />
      {/* Calendly inline widget end */}
    </div>
  </Card>
)
