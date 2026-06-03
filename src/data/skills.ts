import { Project, StatItem, SkillItem, TimelineItem, TestimonialItem } from '@/lib/types';

export const STATS: StatItem[] = [
  {
    id: 'exp',
    value: '3+',
    label: 'Years Exp.',
    colorClass: 'bg-brand-primary',
    hoverColorClass: 'hover:hover:bg-yellow-400 dark:hover:bg-yellow-400',
    detailedText: 'Full hands-on experience in corporate business analytical structures & engineering responsive front-ends.'
  },
  {
    id: 'projects',
    value: '15',
    label: 'Projects',
    colorClass: 'bg-white dark:bg-zinc-800',
    hoverColorClass: 'hover:bg-zinc-100 dark:hover:bg-zinc-700',
    detailedText: 'Completed projects covering user tracking setups, enterprise dashboards, and strategic GTM analyses.'
  },
  {
    id: 'coffee',
    value: '200%',
    label: 'Coffee',
    colorClass: 'bg-brand-secondary',
    hoverColorClass: 'hover:bg-brand-dark-pink',
    detailedText: 'Fueled by high-quality caffeine to inspect edge-case data points and optimize codebase layouts.'
  },
  {
    id: 'goal',
    value: '1',
    label: 'Goal',
    colorClass: 'bg-brand-tertiary',
    hoverColorClass: 'hover:bg-brand-dark-blue',
    detailedText: 'To fuse analytical discipline with human-centric interfaces, helping products perform perfectly.'
  }
];


export const SKILLS: SkillItem[] = [
  // Business Analysis
  { name: 'Process Mapping & Flowcharts', level: 90, category: 'analysis', iconName: 'Workflow' },
  { name: 'SQL Querying', level: 85, category: 'analysis', iconName: 'Database' },
  { name: 'Excel Financial Modeling', level: 80, category: 'analysis', iconName: 'FileSpreadsheet' },
  { name: 'Requirements Engineering', level: 92, category: 'analysis', iconName: 'FileText' },
  { name: 'A/B Testing Methodology', level: 85, category: 'analysis', iconName: 'Split' },
  
  // Development
  { name: 'React / Vite', level: 88, category: 'development', iconName: 'Code' },
  { name: 'TypeScript', level: 82, category: 'development', iconName: 'Layers' },
  { name: 'Tailwind CSS Custom Design', level: 95, category: 'development', iconName: 'Palette' },
  { name: 'ESBuild & Vite Bundlers', level: 75, category: 'development', iconName: 'Zap' },
  { name: 'REST Web Service APIs', level: 84, category: 'development', iconName: 'Globe' },
  
  // Strategy
  { name: 'Competitor Benchmarking', level: 88, category: 'strategy', iconName: 'TrendingUp' },
  { name: 'Go-To-Market Modeling', level: 85, category: 'strategy', iconName: 'Map' },
  { name: 'MoSCoW Prioritization', level: 90, category: 'strategy', iconName: 'ChevronUp' },
  { name: 'Product Growth Analytics', level: 83, category: 'strategy', iconName: 'PieChart' }
];

