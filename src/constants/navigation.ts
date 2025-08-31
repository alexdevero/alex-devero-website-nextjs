import { socialMedia } from './links'
import { pageTitles } from './page-titles'
import { routers } from './router'

type NavigationLink = {
  path: string
  title: string
  visible?: boolean
}

export const navigationLinks: NavigationLink[] = [
  {
    title: pageTitles.home,
    path: routers.home,
    visible: false, // Probably not necessary to have root path in the navigation
  },
  {
    title: pageTitles.work,
    path: routers.work,
    visible: true,
  },
  {
    title: pageTitles.services,
    path: routers.services,
    visible: true,
  },
  {
    title: pageTitles.about,
    path: routers.about,
    visible: true,
  },
  {
    title: pageTitles.resume,
    path: routers.resume,
    visible: true,
  },
  {
    title: pageTitles.projects, // Mainly personal projects aside to freelance work
    path: routers.projects,
    visible: false,
  },
  {
    title: pageTitles.blog,
    path: routers.blog,
  },
  {
    title: pageTitles.devero,
    path: routers.devero,
    visible: false,
  },
  {
    title: pageTitles.login,
    path: routers.login,
    visible: false,
  },
  {
    title: pageTitles.contact,
    path: routers.contact,
    visible: true,
  },
]

type FooterLink = {
  iconClass: string
  path: string
  visible?: boolean
}

export const footerLinks: FooterLink[] = [
  {
    iconClass: 'fab fa-twitter',
    path: socialMedia.twitter,
    visible: true,
  },
  {
    iconClass: 'fab fa-facebook',
    path: socialMedia.facebook,
    visible: false,
  },
  {
    iconClass: 'fab fa-instagram',
    path: socialMedia.instagram,
    visible: true,
  },
  {
    iconClass: 'fab fa-linkedin',
    path: socialMedia.linkedIn,
    visible: true,
  },
  {
    iconClass: 'fab fa-dribbble',
    path: socialMedia.dribbble,
    visible: false,
  },
  {
    iconClass: 'fab fa-github',
    path: socialMedia.github,
    visible: true,
  },
  {
    iconClass: 'fa fa-bookmark',
    path: socialMedia.substack,
    visible: true,
  },
  {
    iconClass: 'fab fa-codepen',
    path: socialMedia.codepen,
    visible: true,
  },
  {
    iconClass: 'fab fa-angellist',
    path: socialMedia.angellist,
    visible: false,
  },
  {
    iconClass: 'fab fa-stack-overflow',
    path: socialMedia.stackoverflow,
    visible: false,
  },
]
