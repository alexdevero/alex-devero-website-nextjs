import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.send({
    code: 200,
    data: {
      personalInfo: {
        name: 'Alex Devero',
        age: 31,
        address: 'Prague, Czech Republic',
        phone: '',
        email: '',
        website: 'https://alexdevero.com',
        github: 'https://github.com/alexdevero',
      },
      education: [
        {
          school: '',
          degree: '',
          major: '',
          date: 'yyyy-yyyy'
        }
      ],
      experience: [
        {
          company: 'Company A',
          title: 'Software Engineer',
          date: '2014-2016',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Donec euismod, nisl vel aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.'
        }
      ],
      skills: [
        {
          name: 'HTML',
          level: 90
        },
        {
          name: 'CSS',
          level: 80
        },
        {
          name: 'JavaScript',
          level: 70
        },
        {
          name: 'TypeScript',
          level: 70
        },
        {
          name: 'React',
          level: 60
        },
        {
          name: 'Node',
          level: 50
        },
        {
          name: 'MongoDB',
          level: 40
        },
        {
          name: 'MySQL',
          level: 30
        },
        {
          name: 'Git',
          level: 10
        }
      ]
    }
  })
}
