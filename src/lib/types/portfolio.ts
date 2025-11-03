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
  projects?: Array<{
    title: string;
    description?: string;
    link?: string;
  }>;
}
