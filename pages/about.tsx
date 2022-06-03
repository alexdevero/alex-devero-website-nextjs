import axios from 'axios'
import { memo, useCallback, useEffect, useState } from 'react'
import { xml2js } from 'xml-js'

import { goodreadsCredentials } from '../_credentials/credentials.goodreads'

import Layout from '../components/layout'

type UserShelf = {
  name: {
    _text: string;
  };
  id: {
    _text: string;
  };
  book_count: {
    _text: string;
  };
}

type GoodReadsResponse = {
  GoodreadsResponse: {
    user: {
      user_shelves: {
        user_shelf: UserShelf[];
      };
    };
  };
}

type Shelf = {
  shelfName: string;
  shelfId: string;
  shelfBookCount: string;
}

const About = memo(() => {
  const [goodreadsData, setGoodreadsData] = useState<Shelf[]>([])
  const [isBookListReady, setIsBookListReady] = useState(false)

  const goodreadsDataFetcher = useCallback(async () => {
    const response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.goodreads.com/user/show/17435617.xml?key=${goodreadsCredentials.key}`).then(data => data.data)
    const responseConverted = await xml2js(response, { compact: true })
    const userShelvesArray = await (responseConverted as GoodReadsResponse).GoodreadsResponse.user.user_shelves.user_shelf

    await Promise.all(userShelvesArray.map((shelf) => {
      return {
        shelfName: shelf.name._text.charAt(0).toUpperCase() + shelf.name._text.slice(1),
        shelfId: shelf.id._text,
        shelfBookCount: shelf.book_count._text
      }
    })).then((data) => {
      setGoodreadsData(data)
      setIsBookListReady(true)
    })
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
            <p>I am founder/CEO of DEVERO Corporation. Entrepreneur, innovator, hacker, tinkerer, developer, programmer, designer, philosopher, blogger, poly(math | glot) and heretic from Czech Republic.</p>

            <p>I am obsessed with all things startups, business, technology, design and beyond. My goal is to create the biggest company in the history and use technology to change the World and humankind.</p>

            <p>Beside working on <a href="https://devero.io" target="_blank" rel="noopener noreferrer">DEVERO Corporation</a>, I write extensively on <a className="link--red link--underline" href="https://blog.alexdevero.com/" target="_blank" rel="noopener noreferrer">my blog</a>.</p>

            <p>About social media ... I am very active on <a href="https://twitter.com/alexdevero" target="_blank" rel="noopener noreferrer">Twitter</a> where are share my tips, ideas and cool stuff about programming, technology, startups and design. I also like to share weird stuff on <a href="https://www.instagram.com/alexdevero/" target="_blank" rel="noopener noreferrer">Instagram</a></p>

            <p>I am an avid reader. Here are bookshelves with some of the books I've read so far (source: <a className="link--red link--underline" href="https://www.goodreads.com/user/show/17435617-alex-devero" target="_blank" rel="noopener noreferrer">Goodreads</a>):</p>

            {isBookListReady && (
              <ul className="about__books-list list--unstyled mt-1">
                {goodreadsData.length > 0 && goodreadsData.map((shelf) => {
                  return (
                    <li key={shelf.shelfId}>
                      Bookshelf: <a className="link--red" href={`https://www.goodreads.com/review/list/17435617?shelf=${shelf.shelfName.toLowerCase()}`} rel="noopener noreferrer" target="_blank">{shelf.shelfName} ({shelf.shelfBookCount})</a>
                    </li>
                  )
                })}
              </ul>
            )}

            {!isBookListReady && (
              <ul className="loader">
                <li className="loader__center" />
                <li className="loader__item loader__item-1" />
                <li className="loader__item loader__item-2" />
                <li className="loader__item loader__item-3" />
                <li className="loader__item loader__item-4" />
                <li className="loader__item loader__item-5" />
                <li className="loader__item loader__item-6" />
                <li className="loader__item loader__item-7" />
                <li className="loader__item loader__item-8" />
              </ul>
            )}

            {/*
              // * Inspiration:
              - https://whizzoe.carrd.co/#about
            */}

            {/* <h2>My current focus:</h2>

            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <h2>Tech stack I use:</h2>

            <ul>
              <li>APIs</li>
              <li>Back-end: Node.js, Nest.js, Express, GraphQL</li>
              <li>Front-end: HTML, CSS, JavaScript, React, Next.js</li>
            </ul>

            <h2>Things I like to talk about:</h2>

            <ul>
              <li>Design, technology, startups, vc, marketing, programming, psychology, philosophy, fitness, calisthenics, keto, carnivore</li>
              <li>Mindset, personal growth, daily routines</li>
            </ul> */}
          </div>
        </div>
      </div>
    </Layout>
  )
})

About.displayName = 'About'

export default About
