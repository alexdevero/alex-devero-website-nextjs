import { personalLinks, socialMedia } from '@/constants/links'

import Layout from '../layout'
import { Link } from '../link'
import { Typography } from '../typography'

export const AboutPage = () => (
  <Layout title="About">
    <Typography as="h1" variant="h1">
      About Me
    </Typography>

    <div className="flex flex-1 justify-center">
      <div className="flex max-w-3xl flex-col gap-3">
        <Typography>
          I'm Alex Devero, a passionate full-stack TypeScript developer from the Czech Republic, specializing in
          building dynamic web applications with React and Next.js.
        </Typography>

        <Typography>
          With a strong background in product design, I bridge the gap between functionality and user experience. My
          mission is to leverage technology to solve real-world problems and enhance people's lives.
        </Typography>

        <Typography>
          Beyond coding, I share insights on my blog <Link href={personalLinks.blog}>my blog</Link> about programming,
          startups, business, tech and beyond.
        </Typography>

        <Typography>
          You can find me on <Link href={socialMedia.linkedIn}>Linkedin</Link> and{' '}
          <Link href={socialMedia.twitter}>X</Link> where I discuss industry trends and connect with fellow
          professionals.
        </Typography>

        <Typography>
          As an avid reader, I frequently update my Goodreads{' '}
          <Link href={socialMedia.goodreads}>Goodreads profile</Link> with my latest reads. .
        </Typography>
      </div>
    </div>
  </Layout>
)
