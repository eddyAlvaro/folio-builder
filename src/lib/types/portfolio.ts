export interface PortfolioProject {
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  repo?: string;
  image?: string;
}

export interface PortfolioSkill {
  name: string;
  level?: 1 | 2 | 3 | 4 | 5;
  category?: string;
}

export interface PortfolioExperience {
  company: string;
  role: string;
  period?: string;
  location?: string;
  link?: string;
  achievements?: string[];
}

export interface PortfolioData {
  version: 1;
  name: string;
  role?: string;
  headline?: string;
  avatar?: string;
  about?: {
    summary?: string;
    highlights?: string[];
  };
  projects?: PortfolioProject[];
  skills?: PortfolioSkill[];
  experience?: PortfolioExperience[];
}
