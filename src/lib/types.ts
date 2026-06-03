/**
 * Types & Interfaces for the Neobrutalism Portfolio Website
 */

export type ProjectCategory = 'all' | 'analysis' | 'development' | 'strategy';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ChartDataItem {
  name: string;
  value: number;
  benchmark?: number;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  category: Exclude<ProjectCategory, 'all'>;
  description: string;
  about: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
  metrics: ProjectMetric[];
  chartData?: ChartDataItem[];
  methodology?: string[];
  techUsed?: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  colorClass: string;
  hoverColorClass: string;
  detailedText: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: 'analysis' | 'development' | 'strategy';
  iconName: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  company: string;
  tag: string;
  tagColorClass: string;
  description: string;
  achievements: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}
