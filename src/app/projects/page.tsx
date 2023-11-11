import { Octokit } from '@octokit/rest'

import { githubCredentials } from '../../../credentials/credentials-github'

import Layout from '@/components/layout'

import { projects } from '@/data/projects'

const octokit = new Octokit({
  auth: githubCredentials.token,
})

async function getRepos() {
  try {
    const response = await octokit.repos.listForUser({
      username: 'alexdevero',
      type: 'owner',
      sort: 'updated',
      per_page: 100,
    })

    return response.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      isFork: repo.fork,
    }))
  } catch (error) {
    console.error(error)
    return null
  }
}

export default async function Projects() {
  const repos = await getRepos()

  const displayProjects = true
  const areGithubDataReady = repos !== null

  return (
    <Layout page="projects" title="Projects | Alex Devero">
      <div className="hero">
        <h1>Projects</h1>
      </div>

      {displayProjects ? (
        <div className="projects__dashboard container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7 col-xl-6">
              <p className="mb-3 text--center">
                Featured examples of my design & development work:
              </p>
            </div>
          </div>

          <div className="row">
            {projects.map((project) => (
              <div key={project.company} className="col-md-6 col-lg-4">
                <div className="project__container">
                  <span className="project__number">{project.position}</span>

                  <h5 className="project__heading h5">{project.company}</h5>
                  <h5 className="project__heading h5">
                    {project.yearFrom}-{project.yearTo}{' '}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <span />
      )}

      <div className="projects__header container">
        <div className="mt-2 mb-2 text--center">
          {/* <p>Welcome to my personal laboratory.</p> */}

          <p>
            Here are some projects I worked and that are on my{' '}
            <a href="https://github.com/alexdevero">GitHub</a>:
          </p>
        </div>

        {!areGithubDataReady && <span>Loading...</span>}

        {areGithubDataReady && (
          <ul className="projects__github-list list--unstyled mt-1">
            {repos?.map((repository, index) => {
              return (
                <li key={repository.id}>
                  No.{index < 10 ? `0${index}` : index}:{' '}
                  <a
                    className="link--red"
                    href={repository.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {repository.name}{' '}
                    {repository.language !== null && `(${repository.language})`}
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </Layout>
  )
}
