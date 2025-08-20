import type { FC } from 'react'

import { Typography } from '@/components/Typography'

export const CoreStack: FC = () => (
  <div>
    <Typography as="h2" variant="h2" centered={false}>
      Core Stack
    </Typography>

    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
      <div>TypeScript</div>
      <div>React</div>
      <div>Next.js</div>
      <div>Node.js</div>
      <div>GraphQL</div>
      <div>REST</div>
      <div>Jest</div>
      <div>Playwright</div>
      <div>Vite</div>
      <div>Webpack</div>
      <div>Tailwind CSS</div>
      <div>Design Systems</div>
      <div>CI/CD (GitHub Actions)</div>
      <div>Vercel</div>
    </div>
  </div>
)
