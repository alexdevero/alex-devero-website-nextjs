import { personalLinks, socialMedia } from '@/constants/links'
import { pageTitles } from '@/constants/page-titles'

import { Cta } from '../../Cta/Cta'
import { DefaultLayout } from '../../DefaultLayout'
import { Link } from '../../Link'
import { Typography } from '../../Typography'

export const AboutPage = () => (
  <DefaultLayout>
    <Typography as="h1" variant="h1" centered>
      {pageTitles.about}
    </Typography>

    <div className="flex flex-1 justify-center">
      <div className="flex max-w-3xl flex-col gap-3">
        <Typography>
          Hi, I'm Alex Devero—a full-stack TypeScript developer based in the Czech Republic. I
          specialize in building dynamic, high-performance web applications with React and Next.js
          that solve problems and deliver amazing user experiences.
        </Typography>

        <Typography>
          With a strong background in product design, I bring a unique mix of creativity and
          technical expertise to every project. My goal? To bridge the gap between functionality and
          usability, creating solutions that not only work but make life easier (and maybe even a
          little more fun) for the people who use them.
        </Typography>

        <Typography as="h2" variant="h4" className="mb-4" centered={false}>
          What Makes Me Tick
        </Typography>

        <Typography>
          When I'm not deep in code, you'll probably find me lifting weights at the gym, diving into
          books about startups and innovation, or tinkering with the latest tech. I love exploring
          new ideas, whether it's through hands-on experiments or reading about the journeys of
          other creators and entrepreneurs.
        </Typography>

        <Typography>
          I'm also a big believer in sharing knowledge. On{' '}
          <Link href={personalLinks.blog}>my blog</Link>, I write about programming, startups,
          business, and all the things that keep me curious. And as an avid reader, I'm constantly
          updating my Goodreads profile with new finds—feel free to check it out if you're a fellow
          bookworm!
        </Typography>

        {/* <Typography>
          You can find me on <Link href={socialMedia.linkedIn}>Linkedin</Link> and{' '}
          <Link href={socialMedia.twitter}>X</Link> where I discuss industry trends and connect with
          fellow professionals.
        </Typography> */}

        <Typography>
          As an avid reader, I am regularly updating my reading list on{' '}
          <Link href={socialMedia.goodreads}>Goodreads</Link> with my latest reads.
        </Typography>

        <Cta
          text="Whether you have a project in mind or just want to brainstorm ideas, I'd love to hear from you."
          centered
        />
      </div>
    </div>
  </DefaultLayout>
)
