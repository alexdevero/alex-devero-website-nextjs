export type PersonalInfo = {
  name: string;
  age: number;
  address: string;
  phone: string;
  email: string;
  website: string;
  github: string;
  linkedin: string;
}

export type Education = {
  school: string;
  degree: string;
  major: string;
  date: string;
}

export type Experience = {
  company: string;
  title: string;
  date: string;
  description: string;
}

export type Skill = {
  name: string;
  level: number;
}

export type Cv = {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
}
