import { personalLinks, socialMedia } from '@/constants/links'

import { Heading } from '../heading'
import Layout from '../layout'
import { Link } from '../link'

export const AboutPage = () => (
  <Layout title="About">
    <Heading>About Me</Heading>

    <div className="flex flex-1 justify-center">
      <div className="flex max-w-3xl flex-col gap-3">
        <p>
          I'm Alex Devero, a passionate full-stack TypeScript developer from the Czech Republic, specializing in
          building dynamic web applications with React and Next.js.
        </p>

        <p>
          With a strong background in product design, I bridge the gap between functionality and user experience. My
          mission is to leverage technology to solve real-world problems and enhance people's lives.
        </p>

        <p>
          Beyond coding, I share insights on my blog{' '}
          <Link className="underline" href={personalLinks.blog}>
            my blog
          </Link>{' '}
          about programming, startups, business, tech and beyond.
        </p>

        <p>
          You can find me on{' '}
          <Link href={socialMedia.linkedIn} className="underline">
            Linkedin
          </Link>{' '}
          and{' '}
          <Link href={socialMedia.twitter} className="underline">
            X
          </Link>{' '}
          where I discuss industry trends and connect with fellow professionals.
        </p>

        <p>
          As an avid reader, I frequently update my Goodreads{' '}
          <Link className="underline" href={socialMedia.goodreads}>
            Goodreads profile
          </Link>{' '}
          with my latest reads. .
        </p>
      </div>
    </div>
  </Layout>
)
