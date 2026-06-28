import type { MetadataRoute } from 'next'

import { siteUrl } from '@/constants/metadata'
import { routes } from '@/constants/router'

// Public, indexable routes. Excludes /login (noindex), API routes, and the
// external blog.
const paths = [
  routes.home,
  routes.about,
  routes.work,
  routes.resume,
  routes.projects,
  routes.contact,
  routes.caseStudyCdn77,
  routes.caseStudyDigitoo,
  routes.caseStudyPersoo,
  routes.caseStudySupernova,
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return paths.map(path => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
  }))
}
