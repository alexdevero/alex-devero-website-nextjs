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
    title: 'Projects',
    path: '/projects',
    visible: true,
  },
  {
    title: 'About',
    path: '/about',
    visible: true,
  },
  {
    title: 'CV',
    path: '/cv',
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
    title: 'Contact',
    path: '/contact',
    visible: true,
  },
  {
    title: 'Login',
    path: '/login',
    visible: true,
  },
]
