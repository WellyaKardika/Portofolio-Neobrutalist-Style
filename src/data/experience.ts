import { Project, StatItem, SkillItem, TimelineItem, TestimonialItem } from '@/lib/types';

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'role1',
    year: '2024 - Present',
    role: 'Business Analyst & Business Development',
    company: 'TechVantage Solutions',
    tag: 'Consultancy',
    tagColorClass: 'bg-brand-primary text-black',
    description: 'Bridges executive strategy frameworks with tangible engineering deliveries, deploying tracking analytics and React portals.',
    achievements: [
      'Restructured 4 e-commerce platforms to uplift check-out performance by 18%+',
      'Built and maintained interactive react-based telemetry platforms for operational metrics',
      'Facilitated weekly workshops standardizing PRDs, agile ticketing, and high-quality user loops'
    ]
  },
  {
    id: 'role2',
    year: '2022 - 2024',
    role: 'Business Intelligence Analyst',
    company: 'Apex Retail Group',
    tag: 'Retail Business',
    tagColorClass: 'bg-brand-secondary text-black',
    description: 'Extracted, aggregated, and modeled cross-national customer behavior data using PostgreSQL, Python, and custom viz boards.',
    achievements: [
      'Designed automated data cubes to save critical executive reporting hours from days to seconds',
      'Led core analysis that uncovered inventory leaks, recovering over $85K in operational costs',
      'Constructed customer lifetime value models (CLV) integrating marketing dashboards'
    ]
  },
  {
    id: 'role3',
    year: '2021 - 2022',
    role: 'System Analyst / Junior Dev',
    company: 'PixelCraft Digital Labs',
    tag: 'Web Studio',
    tagColorClass: 'bg-brand-tertiary text-black',
    description: 'Dived into full systems requirements engineering while writing modular utility tools, setting up user stories, and coding layouts.',
    achievements: [
      'Documented and organized architectural specs for 10 high-traffic web applications',
      'Assisted in writing custom styled, responsive front-ends utilizing CSS custom variables',
      'Maintained Git systems, coordinating merges and preparing solid staging deployments'
    ]
  }
];

