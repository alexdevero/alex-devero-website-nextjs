export type PersonalInfo = {
  address: string
  age: number
  email: string
  github: string
  linkedin: string
  name: string
  phone: string
  website: string
}

export type Education = {
  date: string
  degree: string
  major: string
  school: string
}

export type Experience = {
  company: string
  date: string
  description: string
  title: string
}

export type Skill = {
  level: number
  name: string
}

export type Cv = {
  education: Education[]
  experience: Experience[]
  personalInfo: PersonalInfo
  skills: Skill[]
}
