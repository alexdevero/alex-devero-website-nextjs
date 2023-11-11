import axios from 'axios'
import { xml2js } from 'xml-js'

import Layout from '@/components/layout'
import { personalLinks, socialMedia } from '@/data/links'

import { goodreadsCredentials } from '../../../credentials/credentials-goodreads'

type UserShelf = {
  name: {
    _text: string
  }
  id: {
    _text: string
  }
  book_count: {
    _text: string
  }
}

type GoodReadsResponse = {
  GoodreadsResponse: {
    user: {
      user_shelves: {
        user_shelf: UserShelf[]
      }
    }
  }
}

async function fetchGoodreadsData() {
  try {
    const response = await axios
      .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://www.goodreads.com/user/show/17435617.xml?key=${
          goodreadsCredentials.key
        }`
      )
      .then(data => data.data)
    const responseConverted = await xml2js(response, { compact: true })
    const userShelvesArray = await (responseConverted as GoodReadsResponse).GoodreadsResponse.user.user_shelves
      .user_shelf

    return Promise.all(
      userShelvesArray.map(shelf => {
        return {
          shelfName: shelf.name._text.charAt(0).toUpperCase() + shelf.name._text.slice(1),
          shelfId: shelf.id._text,
          shelfBookCount: shelf.book_count._text,
        }
      })
    )
  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function About() {
  const goodreadsData = await fetchGoodreadsData()

  return (
    <Layout title='About | Alex Devero'>
      <h1 className='mb-8 mt-8 text-center text-5xl font-bold'>About</h1>

      <div className='flex flex-1 justify-center'>
        <div className='flex max-w-3xl flex-col gap-3'>
          <p>
            I am founder/CEO of DEVERO Corporation. Entrepreneur, tinkerer, developer, programmer, hacker, designer,
            blogger and poly(math | glot) from Czech Republic.
          </p>

          <p>
            I am obsessed with all things startups, business, technology, design and beyond. My goal is to create the a
            company that will make a difference, and use technology to change the World and humankind.
          </p>

          <p>
            Besides working on projects and my company,{' '}
            <a href={personalLinks.company} target='_blank' rel='noopener noreferrer'>
              DEVERO Corporation
            </a>
            , I also write on{' '}
            <a className='underline' href={personalLinks.blog} target='_blank' rel='noopener noreferrer'>
              my blog
            </a>{' '}
            about programming, startups, business, tech and beyond.
          </p>

          <p>
            I am somewhat active on{' '}
            <a href={socialMedia.linkedIn} target='_blank' rel='noopener noreferrer' className='underline'>
              Linkedin
            </a>{' '}
            and{' '}
            <a href={socialMedia.twitter} target='_blank' rel='noopener noreferrer' className='underline'>
              Twitter
            </a>{' '}
            where are share my tips, ideas and cool stuff about programming, technology, startups and other things.
          </p>

          <p>
            I am an avid reader. Here are bookshelves with some of the books I've read so far (source:{' '}
            <a className='underline' href={socialMedia.goodreads} target='_blank' rel='noopener noreferrer'>
              Goodreads
            </a>
            ):
          </p>

          {goodreadsData.length > 0 && (
            <ul className='about__books-list list--unstyled mt-1'>
              {goodreadsData.map(shelf => {
                return (
                  <li key={shelf.shelfId}>
                    Bookshelf:{' '}
                    <a
                      className='link--red'
                      href={`https://www.goodreads.com/review/list/17435617?shelf=${shelf.shelfName.toLowerCase()}`}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      {shelf.shelfName} ({shelf.shelfBookCount})
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  )
}
