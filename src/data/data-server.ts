import type { PortfolioData } from '@/types';
import { z } from 'zod';

// Zod schema for runtime validation
export const PortfolioDataSchema = z.object({
  metadata: z.object({
    version: z.string(),
    lastUpdated: z.string(),
    schema: z.string()
  }),
  profile: z.object({
    personalInfo: z.object({
      name: z.string(),
      email: z.string().email(),
      location: z.string(),
      phone: z.string(),
      links: z.object({
        linkedin: z.string().url(),
        github: z.string().url(),
        portfolio: z.string().url(),
        certifications: z.string().url()
      })
    })
  })
}).passthrough();

const data: PortfolioData = PortfolioDataSchema.parse({

  "metadata": {
    "version": "1.0.0",
    "lastUpdated": "2024-03-13T21:56:41Z",
    "schema": "portfolio-data-v1"
  },
  "profile": {
    "personalInfo": {
      "name": "Wesley Quintero",
      "email": "johnwesleyquintero@gmail.com",
      "location": "Tagum, Davao Region, Philippines",
      "phone": "+63 950 446 9156",
      "links": {
        "linkedin": "https://www.linkedin.com/in/wesleyquintero/",
        "github": "https://github.com/johnwesleyquintero",
        "portfolio": "https://my-amazon-analytics.netlify.app/",
        "certifications": "https://www.linkedin.com/in/wesleyquintero/details/certifications/"
      }
    },
    "summary": {
      "title": "Data-Driven Amazon & E-commerce Specialist",
      "tagline": "Helping Amazon Brands Scale with Data-Driven Insights, Automation & AI",
      "description": "Building AI-Powered Automation & Data Tools through Nebula-Singularity platform",
      "expertise": [
        "Automation & Workflow Optimization",
        "Advanced Analytics & Dashboards",
        "Amazon & E-commerce Intelligence",
        "Custom Web App Development"
      ]
    }
  },
  "skills": {
    "categories": {
      "technical": [
        {
          "name": "Data Analytics",
          "level": 95,
          "icon": "LineChart",
          "tools": ["Looker Studio", "Power BI", "Excel"],
          "proficiency": "Expert"
        },
        {
          "name": "Programming",
          "level": 90,
          "icon": "Code",
          "languages": ["Python", "R", "JavaScript"],
          "proficiency": "Advanced"
        },
        {
          "name": "Machine Learning",
          "level": 85,
          "icon": "Brain",
          "focus": ["Predictive Analytics", "AI Automation"],
          "proficiency": "Advanced"
        },
        {
          "name": "Database Management",
          "level": 90,
          "icon": "Database",
          "technologies": ["SQL", "Supabase"],
          "proficiency": "Advanced"
        },
        {
          "name": "Process Automation",
          "level": 95,
          "icon": "Workflow",
          "tools": ["Google Apps Script", "Python Scripts"],
          "proficiency": "Expert"
        }
      ],
      "soft": [
        {
          "name": "Leadership",
          "level": 90,
          "icon": "Team",
          "attributes": ["Team Management", "Strategic Planning", "Mentoring"],
          "proficiency": "Advanced"
        },
        {
          "name": "Communication",
          "level": 95,
          "icon": "Message",
          "attributes": [
            "Client Relations",
            "Technical Writing",
            "Presentations"
          ],
          "proficiency": "Expert"
        },
        {
          "name": "Problem Solving",
          "level": 92,
          "icon": "Puzzle",
          "attributes": ["Critical Thinking", "Innovation", "Decision Making"],
          "proficiency": "Expert"
        }
      ]
    }
  },
  "experience": [
    {
      "title": "Senior Amazon PPC Specialist",
      "company": "Nebula Singularity",
      "employment": {
        "startDate": "2022-01",
        "endDate": "Present",
        "duration": "2+ years"
      },
      "description": "Leading Amazon PPC optimization and analytics initiatives"
    }
  ],
  "projects": [
    {
      "name": "Amazon Analytics Dashboard",
      "description": "Real-time analytics platform for Amazon sellers",
      "technologies": ["React", "Node.js", "AWS"],
      "url": "https://my-amazon-analytics.netlify.app/"
    }
  ],
  "certifications": {
    "list": [
      {
        "name": "Amazon Advertising Accredited",
        "issuer": "Amazon",
        "issueDate": "2023-01",
        "status": "Active"
      }
    ]
  }
};

export const skills = data.skills;
export const experience = data.experience;
export const projects = data.projects;
});

export default data;
