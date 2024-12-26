import { Octokit } from '@octokit/rest'

import Layout from '@/components/layout'
import { Link } from '@/components/link'
import { Typography } from '@/components/typography'
import { projects } from '@/data/projects'

import { githubCredentials } from '../../../credentials/credentials-github'

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

    return response.data.map(repo => ({
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
    <Layout title="Projects">
      <Typography as="h1" variant="h1">
        Projects
      </Typography>

      {displayProjects ? (
        <div className="flex flex-col items-center justify-center">
          <Typography className="mb-8 text-center">
            Below are some bigger projects I am currently working on:
          </Typography>

          <div className="mb-8 grid grid-cols-1 justify-center gap-6">
            {projects.map(project => (
              <div key={project.name} className="flex flex-col text-center">
                <Typography as="span" variant="subtitle" className="font-bold">
                  {project.name}
                </Typography>

                <Typography as="h5" variant="body" className="mt-1 font-medium">
                  {project.position}
                </Typography>
                <Typography as="h5" variant="small" className="mt-1 text-slate-500">
                  {project.yearFrom}-{project.yearTo}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <span />
      )}

      <div>
        <Typography className="mb-6 mt-2 text-center">
          Here are some projects I worked and that are on my <a href="https://github.com/alexdevero">GitHub</a>:
        </Typography>

        {!areGithubDataReady && <span>Loading...</span>}

        <div className="m-auto max-w-[720px]">
          {areGithubDataReady && (
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {repos?.map((repository, index) => {
                return (
                  <li key={repository.id}>
                    <Typography as="span" variant="body">
                      No.{index < 10 ? `0${index}` : index}:{' '}
                      <Link className="underline" href={repository.url}>
                        {repository.name} {repository.language !== null && `(${repository.language})`}
                      </Link>
                    </Typography>
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
