export interface Metadata {
  version: string;
  lastUpdated: string;
  schema: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  location: string;
  phone: string;
  links: {
    linkedin: string;
    github: string;
    portfolio: string;
    certifications: string;
  };
}

export interface Profile {
  personalInfo: PersonalInfo;
  summary: {
    title: string;
    tagline: string;
    description: string;
    expertise: string[];
  };
}

export interface SkillCategory {
  name: string;
  level: number;
  icon: string;
  tools?: string[];
  languages?: string[];
  frameworks?: string[];
  databases?: string[];
  proficiency: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  caseStudyUrl?: string;
}

export interface PortfolioData {
  metadata: Metadata;
  profile: Profile;
  skills: {
    categories: {
      technical: SkillCategory[];
      business: SkillCategory[];
      tools: SkillCategory[];
    };
  };
  experience: Experience[];
  projects: Project[];
}