import { memo, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import GitHub from 'github-api'
import Zoom from 'react-medium-image-zoom'

import { githubCredentials } from '../credentials/credentials-github'

import Layout from '../components/layout'

type Repository = {
  description: string;
  fork: boolean;
  html_url: string;
  id: string;
  isFork: boolean;
  language: string;
  name: string;
  url: string;
}

const gh = new GitHub({
  username: githubCredentials.username,
  password: githubCredentials.password,
  token: githubCredentials.token
})

const projects = [{
  alt: 'Supernova',
  src: '/images/thumbnails/thumbnail-supernova@2x.jpg',
  href: 'https://www.supernova.io',
  title: 'Supernova',
  no: '1',
}, {
  alt: 'Fresh & Tasty',
  src: '/images/thumbnails/thumbnail-fresh-tasty@2x.jpg',
  href: 'https://www.freshandtasty.cz',
  title: 'Fresh & Tasty',
  no: '2',
}, {
  alt: 'Slavnosti růžového vína',
  src: '/images/thumbnails/thumbnail-slavnosti-ruzoveho-vina@2x.jpg',
  href: 'https://www.slavnostiruzovehovina.cz',
  title: 'Slavnosti růžového vína',
  no: '3',
}, {
  alt: 'Česká Whisky',
  src: '/images/thumbnails/thumbnail-ceska-whisky@2x.jpg',
  href: 'https://www.ceskawhisky.cz',
  title: 'Česká Whisky',
  no: '4',
}, {
  alt: 'Tesla Motors',
  src: '/images/thumbnails/thumbnail-tesla@2x.jpg',
  href: '',
  title: 'Tesla Motors',
  no: '5',
}, {
  alt: 'Harley-Davidson',
  src: '/images/thumbnails/thumbnail-harley-davidson@2x.jpg',
  href: '',
  title: 'Harley-Davidson',
  no: '6',
}]

const alexData = gh.getUser('alexdevero')

const Projects = memo(() => {
  const [areGithubDataReady, setAreGithubDataReady] = useState(false)
  const [displayProjects] = useState(false)
  const [githubData, setGithubData] = useState<Repository[]>([])

  const fetchGithubRepository = useCallback(() => {
    alexData.listRepos({ sort: 'pushed', since: '' }, async (error: unknown, repositories: Repository[]) => {
      // List all repositories
      // docs: http://github-tools.github.io/github/
      await Promise.all(repositories.map(async (repository) => {
        const repositoryName = await repository.name
        const repositoryDescription = await repository.description
        const repositoryId = await repository.id
        const repositoryIsFork = await repository.fork
        const repositoryLanguage = await repository.language
        const repositoryURL = await repository.html_url

        return {
          name: repositoryName,
          description: repositoryDescription,
          id: repositoryId,
          isFork: repositoryIsFork,
          language: repositoryLanguage,
          url: repositoryURL
        }
      })).then((data) => {
        setAreGithubDataReady(true)
        setGithubData(data.filter(project => project.isFork === false ? 1 : 0) as Repository[])
      }).catch(e => {
        // eslint-disable-next-line no-console
        console.log(e)
      })

      if (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    })
  }, [])

  useEffect(() => {
    fetchGithubRepository()
  }, [fetchGithubRepository])

  return (
    <Layout page="projects" title="Projects | Alex Devero">
      <div className="hero">
        <h1>Projects</h1>
      </div>

      {displayProjects ? (
        <div className="projects__dashboard container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7 col-xl-6">
              <p className="mb-3 text--center">Featured examples of my design & development work:</p>
            </div>
          </div>

          <div className="row">
            {(projects).map(project => (
              <div key={project.title} className="col-md-6 col-lg-4">
                <div className="project__container">
                  <div className="project__header">
                    <Zoom>
                      <Image
                        height="500"
                        alt={project.alt}
                        src={project.src}
                        width="500"
                        className="project__thumbnail"
                      />
                    </Zoom>
                  </div>

                  <div className="project__body">
                    <div className="project__link">
                      <span className="project__number">
                        No.<span>{project.no}</span>
                      </span>

                      <h5 className="project__heading h5">{project.title}</h5>

                      <a href={project.href} className="project__link" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ marginLeft: 6, fontSize: 16 }} /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : <span />}

      <div className="projects__header container">
        <div className="mt-2 mb-2 text--center">
          {/* <p>Welcome to my personal laboratory.</p> */}

          <p>Here are some projects I worked and that are on my <a href="https://github.com/alexdevero">GitHub</a>:</p>
        </div>

        {!areGithubDataReady && (
          <span>Loading...</span>
        )}

        {areGithubDataReady && (
          <ul className="projects__github-list list--unstyled mt-1">
            {githubData.length > 0 && githubData.map((repository, index) => {
              return <li key={repository.id}>No.{index < 10 ? `0${index}` : index}: <a className="link--red" href={repository.url} rel="noopener noreferrer" target="_blank">{repository.name} {repository.language !== null && `(${repository.language})`}</a></li>
            })}
          </ul>
        )}
      </div>
    </Layout>
  )
})

Projects.displayName = 'Projects'

export default Projects
