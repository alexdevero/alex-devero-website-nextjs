import { socialMedia } from './links'

type NavigationLink = {
  title: string
  path: string
  visible?: boolean
}

export const navigationLinks: NavigationLink[] = [
  {
    title: 'Home',
    path: '/',
    visible: false, // Probably not necessary to have root path in the navigation
  },
  {
    title: 'Work',
    path: '/work',
    visible: true,
  },
  {
    title: 'Services',
    path: '/services',
    visible: true,
  },
  {
    title: 'CV',
    path: '/cv',
    visible: true,
  },
  {
    title: 'About',
    path: '/about',
    visible: true,
  },
  {
    title: 'Projects', // Mainly personal projects aside to freelance work
    path: '/projects',
    visible: true,
  },
  {
    title: 'Blog',
    path: 'https://blog.alexdevero.com/',
  },
  {
    title: 'Devero',
    path: 'https://devero.io/',
    visible: false,
  },
  {
    title: 'Login',
    path: '/login',
    visible: false,
  },
  {
    title: 'Contact',
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
