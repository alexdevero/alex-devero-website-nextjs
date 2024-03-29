import { Octokit } from '@octokit/rest'

import { Heading } from '@/components/heading'
import Layout from '@/components/layout'
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
    <Layout title='Projects'>
      <Heading>Projects</Heading>

      {displayProjects ? (
        <div className='flex flex-col items-center justify-center'>
          <p className='mb-8 text-center'>Below are some bigger projects I am currently working on:</p>

          <div className='mb-8 grid grid-cols-1 justify-center gap-6'>
            {projects.map(project => (
              <div key={project.name} className='flex flex-col text-center'>
                <span className='text-lg font-bold'>{project.name}</span>

                <h5 className='text-base font-medium'>{project.position}</h5>
                <h5 className='text-sm text-slate-500'>
                  {project.yearFrom}-{project.yearTo}
                </h5>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <span />
      )}

      <div>
        <p className='mb-6 mt-2 text-center'>
          Here are some projects I worked and that are on my <a href='https://github.com/alexdevero'>GitHub</a>:
        </p>

        {!areGithubDataReady && <span>Loading...</span>}

        <div className='m-auto max-w-[720px]'>
          {areGithubDataReady && (
            <ul className='grid grid-cols-1 gap-2 md:grid-cols-2'>
              {repos?.map((repository, index) => {
                return (
                  <li key={repository.id}>
                    No.{index < 10 ? `0${index}` : index}:{' '}
                    <a className='underline' href={repository.url} rel='noopener noreferrer' target='_blank'>
                      {repository.name} {repository.language !== null && `(${repository.language})`}
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
