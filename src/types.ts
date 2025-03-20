export interface KeywordData {
  searchVolume: number;
  searchVolumeTrend: number;
  competingProducts: number;
  keywordSales: number;
  phrase: string;
}

export interface ProductListing {
  title: string;
  bullets: string[];
  // Add other relevant product listing fields as needed
}

export interface Link {
  linkedin?: string;
  github?: string;
  portfolio?: string;
  certifications?: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  location: string;
  phone?: string;
  links?: Link;
}

export interface Summary {
  title: string;
  tagline?: string;
  description?: string;
  expertise?: string[];
}

export interface Profile {
  personalInfo: PersonalInfo;
  summary: Summary;
}

export interface Skill {
  name: string;
  level?: number;
  icon?: string;
  tools?: string[];
  languages?: string[];
  proficiency?: string;
  attributes?: string[];
  focus?: string[];
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export interface Skills {
  categories: SkillCategory;
}

export interface Employment {
  startDate: string;
  endDate?: string;
  duration: string;
  status?: string;
}

export interface Experience {
  title: string;
  company: string;
  type?: string;
  employment: Employment;
  location?: string;
  responsibilities?: string[];
  achievements?: string[];
  skills?: string[];
  keywords?: string[];
  description?: string;
}

export interface Education {
  institution: string;
  degree?: string;
  certification?: string;
  period?: {
    startYear: number;
    endYear?: number;
    duration?: string;
  };
  type?: string;
  status?: string;
  field?: string;
  completionDate?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  status?: string;
  category?: string;
  certificates?: string[];
  url?: string;
}

export interface CertificationImageMetadata {
  width: number;
  height: number;
  format: string;
  created: string;
  modified: string;
}

export interface CertificationImage {
  path: string;
  metadata: CertificationImageMetadata;
}

export interface Certifications {
  list: Certification[];
  image?: CertificationImage;
}

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  analytics?: string[];
  devOps?: string[];
  core?: string[];
  state?: string[];
  data?: string[];
}

export interface PerformanceMetrics {
  performance?: number;
  accessibility?: number;
  bestPractices?: number;
  seo?: number;
  reliability?: number;
}

export interface ProjectMetrics {
  stars?: number;
  forks?: number;
  contributors?: number;
  issues?: number;
  pullRequests?: number;
}

export interface Roadmap {
  [key: string]: string;
}

export interface TechnicalDependency {
  name: string;
  version: string;
}

export interface Project {
  name: string;
  version?: string;
  type?: string;
  status?: string;
  description?: string;
  repository?: string;
  preview?: string;
  techStack?: TechStack;
  performanceMetrics?: PerformanceMetrics;
  technicalDependencies?: TechnicalDependency[];
  features?: string[];
  screenshots?: string[];
  lastUpdated?: string;
  roadmap?: Roadmap;
  projectMetrics?: ProjectMetrics;
  badges?: string[];
  url?: string;
  technologies?: string[];
}

export interface Projects {
  featured?: Project[];
  portfolio?: Project[];
}

export interface DataServer {
  metadata: {
    version: string;
    lastUpdated: string;
    schema: string;
  };
  profile: Profile;
  skills: Skills;
  experience: Experience[];
  education: Education[];
  certifications: Certifications;
  projects: Projects;
}
