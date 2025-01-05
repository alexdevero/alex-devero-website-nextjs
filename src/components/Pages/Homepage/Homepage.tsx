import { DefaultLayout } from '../../DefaultLayout'
import { Link } from '../../Link'
import { Typography } from '../../Typography'

export const HomePage = () => (
  <DefaultLayout>
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="max-w-2xl text-center">
        <Typography as="h1" variant="h1">
          Alex Devero
        </Typography>

        <Typography>
          Full-stack TypeScript developer specializing in React and Next.js. Building lightning-fast
          React & Next.js apps that grow your business and delight users.
        </Typography>

        <Typography className="my-3">
          Helping startups and businesses scale with clean, maintainable, and high-performance
          React/Next.js apps that users love.
        </Typography>

        <div className="mt-4 flex flex-col items-center justify-center gap-2">
          <Link href="/work">Explore my portfolio and see what I can build for you</Link>

          <Link href="/contact" buttonStyle>
            Let's make your project a reality
          </Link>
        </div>
      </div>
    </div>
  </DefaultLayout>
)
