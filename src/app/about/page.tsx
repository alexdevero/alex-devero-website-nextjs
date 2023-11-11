'use client'

import axios, { AxiosError } from 'axios'
import { memo, useCallback, useEffect, useState } from 'react'
import { xml2js } from 'xml-js'

import Layout from '../../components/layout'

import { goodreadsCredentials } from '../../../credentials/credentials-goodreads'

import { personalLinks, socialMedia } from '../../data/links'

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

type Shelf = {
  shelfName: string
  shelfId: string
  shelfBookCount: string
}

const About = memo(() => {
  const [goodreadsData, setGoodreadsData] = useState<Shelf[]>([])
  const [isBookListReady, setIsBookListReady] = useState(false)
  const [loadingBooksError, setLoadingBooksError] = useState(false)

  const goodreadsDataFetcher = useCallback(async () => {
    try {
      const response = await axios
        .get(
          `${'https://cors-anywhere.herokuapp.com/'}https://www.goodreads.com/user/show/17435617.xml?key=${
            goodreadsCredentials.key
          }`
        )
        .then((data) => data.data)
      const responseConverted = await xml2js(response, { compact: true })
      const userShelvesArray = await (responseConverted as GoodReadsResponse)
        .GoodreadsResponse.user.user_shelves.user_shelf

      await Promise.all(
        userShelvesArray.map((shelf) => {
          return {
            shelfName:
              shelf.name._text.charAt(0).toUpperCase() +
              shelf.name._text.slice(1),
            shelfId: shelf.id._text,
            shelfBookCount: shelf.book_count._text,
          }
        })
      )
        .then((data) => {
          setGoodreadsData(data)
          setIsBookListReady(true)
          setLoadingBooksError(false)
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e)
          setLoadingBooksError(true)
        })
    } catch (e) {
      const error = e as AxiosError

      setLoadingBooksError(true)

      // eslint-disable-next-line no-console
      console.log(error.code, error.message)
    }
  }, [])

  useEffect(() => {
    goodreadsDataFetcher()
  }, [goodreadsDataFetcher])

  return (
    <Layout page="about" title="About | Alex Devero">
      <div className="hero">
        <h1>About</h1>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-7 col-xl-6">
            <p>
              I am founder/CEO of DEVERO Corporation. Entrepreneur, tinkerer,
              developer, programmer, hacker, designer, blogger and poly(math |
              glot) from Czech Republic.
            </p>

            <p>
              I am obsessed with all things startups, business, technology,
              design and beyond. My goal is to create the a company that will
              make a difference, and use technology to change the World and
              humankind.
            </p>

            <p>
              Beside working on{' '}
              <a
                href={personalLinks.company}
                target="_blank"
                rel="noopener noreferrer"
              >
                DEVERO Corporation
              </a>
              , I write extensively on{' '}
              <a
                className="link--red link--underline"
                href={personalLinks.blog}
                target="_blank"
                rel="noopener noreferrer"
              >
                my blog
              </a>
              .
            </p>

            <p>
              I am active on{' '}
              <a
                href={socialMedia.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>{' '}
              and{' '}
              <a
                href={socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{' '}
              where are share my tips, ideas and cool stuff about programming,
              technology, startups and other things.
            </p>

            <p>
              I am an avid reader. Here are bookshelves with some of the books
              I've read so far (source:{' '}
              <a
                className="link--red link--underline"
                href={socialMedia.goodreads}
                target="_blank"
                rel="noopener noreferrer"
              >
                Goodreads
              </a>
              ):
            </p>

            {!loadingBooksError && isBookListReady && (
              <ul className="about__books-list list--unstyled mt-1">
                {goodreadsData.length > 0 &&
                  goodreadsData.map((shelf) => {
                    return (
                      <li key={shelf.shelfId}>
                        Bookshelf:{' '}
                        <a
                          className="link--red"
                          href={`https://www.goodreads.com/review/list/17435617?shelf=${shelf.shelfName.toLowerCase()}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {shelf.shelfName} ({shelf.shelfBookCount})
                        </a>
                      </li>
                    )
                  })}
              </ul>
            )}

            {!loadingBooksError && !isBookListReady && (
              <p className="text--center mt-2">Loading...</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
})

About.displayName = 'About'

export default About
