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
    title: 'Projects', // Mainly personal projects aside to freelance work
    path: '/projects',
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

export const footerLinks: NavigationLink[] = [
  {
    title: 'twitter',
    path: socialMedia.twitter,
    visible: true,
  },
  {
    title: 'facebook',
    path: socialMedia.facebook,
    visible: false,
  },
  {
    title: 'instagram',
    path: socialMedia.instagram,
    visible: true,
  },
  {
    title: 'linkedin',
    path: socialMedia.linkedIn,
    visible: true,
  },
  {
    title: 'dribbble',
    path: socialMedia.dribbble,
    visible: false,
  },
  {
    title: 'github',
    path: socialMedia.github,
    visible: true,
  },
  {
    title: 'codepen',
    path: socialMedia.codepen,
    visible: true,
  },
  {
    title: 'angellist',
    path: socialMedia.angellist,
    visible: false,
  },
  {
    title: 'stack-overflow',
    path: socialMedia.stackoverflow,
    visible: false,
  },
]
