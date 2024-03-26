import { personalLinks, socialMedia } from '@/constants/links'

import Layout from '../layout'
import { Link } from '../link'

export const AboutPage = () => (
  <Layout title='About'>
    <h1 className='mb-8 mt-8 text-center text-5xl font-bold'>About</h1>

    <div className='flex flex-1 justify-center'>
      <div className='flex max-w-3xl flex-col gap-3'>
        <p>I am developer, product designer, tinkerer and occasional blogger from Czech Republic.</p>

        <p>
          I am passionate about programming, technology, startups, business, design and stuff beyond. My goal is to use
          technology to make things that solve problems and make people's lives better.
        </p>

        <p>
          When I am not working on some project, I occasionally write on{' '}
          <Link className='underline' href={personalLinks.blog}>
            my blog
          </Link>{' '}
          about programming, startups, business, tech and beyond.
        </p>

        <p>
          I am somewhat active on{' '}
          <Link href={socialMedia.linkedIn} className='underline'>
            Linkedin
          </Link>{' '}
          and{' '}
          <Link href={socialMedia.twitter} className='underline'>
            X
          </Link>{' '}
          where are share my tips, ideas and cool stuff about programming, technology, startups and other things.
        </p>

        <p>
          I am also an avid reader. You can find many of the books I've read so far on{' '}
          <Link className='underline' href={socialMedia.goodreads}>
            Goodreads
          </Link>
          .
        </p>
      </div>
    </div>
  </Layout>
)
