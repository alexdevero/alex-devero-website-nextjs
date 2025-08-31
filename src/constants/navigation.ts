import { socialMedia } from './links'
import { pageTitles } from './page-titles'
import { routes } from './router'

type NavigationLink = {
  path: string
  title: string
  visible?: boolean
}

export const navigationLinks: NavigationLink[] = [
  {
    title: pageTitles.home,
    path: routes.home,
    visible: false, // Probably not necessary to have root path in the navigation
  },
  {
    title: pageTitles.work,
    path: routes.work,
    visible: true,
  },
  {
    title: pageTitles.services,
    path: routes.services,
    visible: true,
  },
  {
    title: pageTitles.about,
    path: routes.about,
    visible: true,
  },
  {
    title: pageTitles.resume,
    path: routes.resume,
    visible: true,
  },
  {
    title: pageTitles.projects, // Mainly personal projects aside to freelance work
    path: routes.projects,
    visible: false,
  },
  {
    title: pageTitles.blog,
    path: routes.blog,
  },
  {
    title: pageTitles.devero,
    path: routes.devero,
    visible: false,
  },
  {
    title: pageTitles.login,
    path: routes.login,
    visible: false,
  },
  {
    title: pageTitles.contact,
    path: routes.contact,
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
