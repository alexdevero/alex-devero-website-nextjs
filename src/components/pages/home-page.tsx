import { DefaultLayout } from '../defaultLayout'
import { Link } from '../link'
import { Typography } from '../typography'

export const HomePage = () => (
  <DefaultLayout>
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="max-w-2xl text-center">
        <Typography as="h1" variant="h1">
          Alex Devero
        </Typography>

        <Typography>Full-stack TypeScript developer specializing in React and Next.js applications</Typography>

        <Typography className="my-3">
          I help individuals, startups and businesses create scalable, high-performance web applications with great UX.
        </Typography>

        <div className="mt-4 flex flex-col items-center justify-center gap-2">
          <Link href="/work">Discover my work</Link>

          <Link href="/contact" buttonStyle>
            Let's discuss your project
          </Link>
        </div>
      </div>
    </div>
  </DefaultLayout>
)
