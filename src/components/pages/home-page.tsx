import Layout from '../layout'
import { Link } from '../link'
import { Typography } from '../typography'

export const HomePage = () => (
  <Layout title="Home">
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="max-w-2xl text-center">
        <Typography as="h1" variant="h1">
          Alex Devero
        </Typography>

        <Typography>Full-stack TypeScript Developer Specializing in React and Next.js Applications</Typography>

        <Typography>Helping startups and businesses create scalable, high-performance web applications.</Typography>

        <Typography>
          Discover How I Can Elevate Your Project – <Link href="/contact">Learn More</Link>.
        </Typography>
      </div>
    </div>
  </Layout>
)
