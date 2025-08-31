import type { FC } from 'react'

import { Typography } from '@/components/Typography'

import { backend, frontEnd, spokenLanguages, techStack } from './data'

export const Skills: FC = () => (
  <div className="mx-auto max-w-[600px]">
    <Typography as="h2" variant="h2">
      Technical Expertise
    </Typography>

    <div>
      <Typography as="h3" variant="h3">
        Frontend
      </Typography>

      <ul>
        {frontEnd.map(item => (
          <li key={item.substring(0, 20)}>
            <Typography as="span">&ndash;{item}</Typography>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <Typography as="h3" variant="h3">
        Backend
      </Typography>

      <ul>
        {backend.map(item => (
          <li key={item.substring(0, 20)}>
            <Typography as="span">&ndash;{item}</Typography>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <Typography as="h3" variant="h3">
        Tech Stack
      </Typography>

      <ul className="flex flex-col gap-4">
        {techStack.map(item => (
          <li key={item.heading}>
            <div className="flex flex-col gap-1">
              <Typography as="span" muted>
                {item.heading}:
              </Typography>
              <Typography as="span">{item.text}</Typography>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <Typography as="h3" variant="h3">
        Spoken Languages
      </Typography>

      <ul>
        {spokenLanguages.map(item => (
          <li key={item.language}>
            <Typography as="span">
              {item.language}: {item.level}
            </Typography>
          </li>
        ))}
      </ul>

      <Typography as="p" className="my-4" variant="body">
        Fluent communication ensures seamless collaboration with clients worldwide.
      </Typography>
    </div>
  </div>
)
