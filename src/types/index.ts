export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  videoUrl: string;
  color: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}