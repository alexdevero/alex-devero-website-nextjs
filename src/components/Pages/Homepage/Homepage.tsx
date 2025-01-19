import { pageTitles } from '@/constants/page-titles'

import { DefaultLayout } from '../../DefaultLayout'
import { Link } from '../../Link'
import { Typography } from '../../Typography'

export const HomePage = () => (
  <DefaultLayout>
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="max-w-2xl text-center">
        <Typography as="h1" variant="h1">
          {pageTitles.home}
        </Typography>

        <Typography>
          I am a full-stack TypeScript developer specializing in React and Next.js.
        </Typography>

        <Typography className="my-3">
          I help individuals, startups and businesses scale with clean, maintainable, and
          high-performance React/Next.js apps that users love.
        </Typography>

        <div className="mt-4 flex flex-col items-center justify-center gap-2">
          <Link href="/work">Take a look at my work to see what I can build for you</Link>

          <Link href="/contact" className="mt-3" buttonStyle>
            Got a project? Let's build it together!
          </Link>
        </div>
      </div>
    </div>
  </DefaultLayout>
)
