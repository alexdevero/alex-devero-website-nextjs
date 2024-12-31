import { Octokit } from '@octokit/rest'

import { ProjectsPage } from '@/components/pages/Projects/ProjectsPage'
import { getMetadata } from '@/constants/metadata'

export const metadata = getMetadata('Projects')

// Looks like auth is not needed at least for now for read only access
const octokit = new Octokit({})

async function getRepos() {
  try {
    const response = await octokit.repos.listForUser({
      username: 'alexdevero',
      type: 'owner',
      sort: 'updated',
      per_page: 200,
    })

    return {
      repos: response.data.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        isFork: repo.fork,
      })),
      error: null,
    }
  } catch (error) {
    console.error(error)
    const errorMessage = (error as Error).message || 'An error occurred while fetching data from GitHub.'
    return { repos: null, error: errorMessage }
  }
}

export default async function Projects() {
  const { repos, error } = await getRepos()

  return <ProjectsPage areGithubDataReady={repos !== null} repos={repos} error={error} />
}
