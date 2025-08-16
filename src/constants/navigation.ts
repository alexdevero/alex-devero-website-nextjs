import { socialMedia } from './links'
import { pageTitles } from './page-titles'

type NavigationLink = {
  title: string
  path: string
  visible?: boolean
}

export const navigationLinks: NavigationLink[] = [
  {
    title: pageTitles.home,
    path: '/',
    visible: false, // Probably not necessary to have root path in the navigation
  },
  {
    title: pageTitles.work,
    path: '/work',
    visible: true,
  },
  {
    title: pageTitles.services,
    path: '/services',
    visible: true,
  },
  {
    title: pageTitles.about,
    path: '/about',
    visible: true,
  },
  {
    title: pageTitles.resume,
    path: '/resume',
    visible: true,
  },
  {
    title: pageTitles.projects, // Mainly personal projects aside to freelance work
    path: '/projects',
    visible: false,
  },
  {
    title: pageTitles.blog,
    path: 'https://blog.alexdevero.com/',
  },
  {
    title: pageTitles.devero,
    path: 'https://devero.io/',
    visible: false,
  },
  {
    title: pageTitles.login,
    path: '/login',
    visible: false,
  },
  {
    title: pageTitles.contact,
    path: '/contact',
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
