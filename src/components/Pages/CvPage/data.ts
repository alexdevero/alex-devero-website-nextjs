import { cvRecords } from '@/data/cv-records'

export const personalInfo = [
  {
    heading: 'Name',
    text: cvRecords.personalInfo.name,
    iconClass: 'fa fa-user',
  },
  {
    heading: 'Email',
    text: cvRecords.personalInfo.email,
    iconClass: 'fa fa-envelope',
  },
  {
    heading: 'Website',
    text: cvRecords.personalInfo.website,
    iconClass: 'fa fa-globe',
  },
  {
    heading: 'Github',
    text: cvRecords.personalInfo.github,
    iconClass: 'fab fa-github',
  },
  {
    heading: 'Linkedin',
    text: cvRecords.personalInfo.linkedin,
    iconClass: 'fab fa-linkedin',
  },
  {
    heading: 'Substack',
    text: cvRecords.personalInfo.substack,
    iconClass: 'fa fa-bookmark',
  },
]

export const frontEnd = [
  'Deep expertise in React, Next.js, and Tailwind CSS, with a track record of building intuitive and high-performing user interfaces.',
  'Proficient in Tanstack Query, Zustand and Redux for state management, ensuring efficient data handling and application performance.',
]

export const backend = [
  'Skilled in Node.js, Express, and advanced API development (REST and GraphQL), delivering scalable server-side solutions.',
  'Experience in building high-performance server-side applications.',
  'Experience with serverless architectures and microservices.',
]

export const techStack = [
  {
    heading: 'Languages',
    text: 'TypeScript, JavaScript, Python, HTML5, CSS3, Sass',
  },
  {
    heading: 'Frameworks/Libraries',
    text: 'React, Next.js, Redux, Tanstack Query, TailwindCSS, Radix UI, MUI, Zustand, Shadcn/UI, Bootstrap',
  },
  {
    heading: 'Databases',
    text: 'PostgreSQL, MongoDB, Firebase',
  },
  {
    heading: 'Testing',
    text: 'Jest, Vitest, React Testing Library, Playwright',
  },
  {
    heading: 'Cloud and deployment',
    text: 'Vercel, Firebase',
  },
  {
    heading: 'Tools',
    text: 'Git, Docker, Webpack, Vite, Vercel',
  },
]

export const spokenLanguages = [
  {
    language: 'English',
    level: 'Fluent',
  },
  {
    language: 'Czech',
    level: 'Native speaker',
  },
  {
    language: 'Spanish',
    level: 'Basic',
  },
  {
    language: 'French',
    level: 'Basic',
  },
]
