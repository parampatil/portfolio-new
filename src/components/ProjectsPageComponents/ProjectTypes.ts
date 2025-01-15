// ProjectTypes.ts
export type ProjectCategory = 'Top' | 'Recent' | 'UI Components';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
  category: ProjectCategory;
  date: Date;
  isTopProject?: boolean;
}
