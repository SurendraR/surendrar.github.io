export interface Skill {
  name: string;
  rating: number;
  yearsOfExperience: number;
}

export interface Project {
  title: string;
  companyName: string;
  description: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  achievements: string[];
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
}