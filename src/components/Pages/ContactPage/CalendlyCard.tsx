import type { FC } from 'react'

import { Card } from '@/components/Card/Card'
import { Typography } from '@/components/Typography'

export const CalendlyCard: FC = () => (
  <Card>
    <div id="schedule" className="flex flex-col gap-2">
      <Typography as="h2" variant="h4" centered={false} className="!mb-2">
        Schedule a call
      </Typography>

      <Typography className="mb-4" variant="body">
        Pick a time that works for you. The meeting is added to both calendars automatically.
      </Typography>

      {/* Calendly inline widget begin */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/deveroalex/30min?hide_event_type_details=1"
        style={{ minWidth: '320px', height: '700px' }}
      />
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
      {/* Calendly inline widget end */}
    </div>
  </Card>
)
