import { Project } from '@/lib/types';

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce Optimization',
    tag: 'User Journey Analytics',
    category: 'analysis',
    year: '2024',
    role: 'Business Analyst',
    liveUrl: 'https://github.com/WellyaKardika',
    gallery: [],
    description: 'Comprehensive analysis of user journeys leading to a 24% increase in conversion rates through targeted UI/UX interventions.',
    about: 'A meticulous, data-driven optimization project for a scale-up retail platform. By capturing detailed user clickstream events, custom event tracking, and customer checkout funnels, Asep identified friction-heavy elements directly within the check-out experience and payment choices.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1C0KaXxrgOdFG8KuUDih_tgI6Dsa8zukStirWM804SG9q8-RUms8klItdxWphF9n6XxAh5KHwb0k4mWeEJrrHBGXkk46IIyzm5-bCX9MC19swVNmaLG-Xgc75DrcMsGU5p1ECimE-ohiD2_CQ_MrfetMeA7cRdYgyulQudUPFRie3NtIEkXwiwMzeqAsrZD2CcLUlOOZUSIkCz7wfTU3kk-AebfAQt1m_nXS89v6tFuQVtYh-Olcp0h9Y2t2T4VoxpimNyTYvd7A',
    imageAlt: 'Vivid neobrutalist illustration showing an analytical trend line climbing upwards over a pink backdrop.',
    deliverables: [
      'Setup custom Mixpanel trackers & customer entry events pipeline',
      'Co-designed three high-fidelity payment UI forms',
      'Tested multi-variant localized credit card processors',
      'Implemented post-purchase prompt checks to capture satisfaction'
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+24%' },
      { label: 'Basket Abandonment Drop', value: '-38%' },
      { label: 'Page Load Speedup', value: '1.4s' }
    ],
    chartData: [
      { name: 'Week 1', value: 1.8, benchmark: 1.8 },
      { name: 'Week 2', value: 1.9, benchmark: 1.8 },
      { name: 'Week 3', value: 2.1, benchmark: 1.8 },
      { name: 'Week 4', value: 2.4, benchmark: 1.8 }
    ],
    methodology: [
      'Phase 1: Event Mapping & Funnel Drift Audit',
      'Phase 2: Live Hotjar Scrolling & Click Stream Observation',
      'Phase 3: Interactive Visual Redesign Proposals',
      'Phase 4: Targeted A/B Testing & Production Scaling'
    ],
    techUsed: ['SQL', 'Mixpanel', 'Figma', 'A/B Testing', 'React', 'Tailwind CSS']
  },
  {
    id: 'market-strategy',
    title: 'Market Entry Strategy',
    tag: 'TAM Modeling & Roadmap',
    category: 'strategy',
    year: '2023',
    role: 'Business Development',
    liveUrl: 'https://github.com/WellyaKardika',
    gallery: [],
    description: 'Developed a go-to-market strategy for a fintech startup, including competitor analysis and feature prioritization.',
    about: 'Constructed an elaborate, step-by-step launch methodology for an upcoming neo-investment startup expanding into maritime/cross-border digital deposits in Southeast Asia. This involved extensive modeling of direct regulatory ceilings, barrier definitions, and product features.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC48Q2J-FQXNRl9vPWecyIjDIxKCyJOgyX8HYU26GI08MntyZ0qJYXgMMWjf32in3HT7-frm2n0SseXNFL_Zmaj2LCy-co5obvOcEPISimPqElIs-jScO52Itg3pP1gAPc4ILSmlaphzn78toGCoj-SDDMf_O_kE8ZesiJCKyU03cBV4A_4LOq5pSB_iK9qEpRfhjCzyUjKhd_N-6I0ELEzym4yi0TuzJLq-Jr4tRK2R9MNOj1pxO0QhoFnGbAUx8w7gJq8e8ehOTI',
    imageAlt: 'Bold brutalist graphic with circles and visual charts contrasting lime green with heavy solid ink lines.',
    deliverables: [
      'Engineered multi-variable TAM/SAM market models in Excel',
      'Charted competitor utility structures and fee strategies',
      'Ranked features using MoSCoW priority matrixes',
      'Assembled legal risk mitigation pitch books for regulators'
    ],
    metrics: [
      { label: 'Total TAM Modeled', value: '$4.2M' },
      { label: 'Forecasted ROI (Yr 3)', value: '7.5x' },
      { label: 'Partners Identified', value: '3 Major' }
    ],
    chartData: [
      { name: 'Micro-Deposits', value: 45 },
      { name: 'Secured Lending', value: 30 },
      { name: 'FX Operations', value: 25 }
    ],
    methodology: [
      'Phase 1: Exhaustive Secondary Literature & Competitor Digging',
      'Phase 2: Local Regulatory Compliance Analysis',
      'Phase 3: Strategic Feature Scoping with Product Lead',
      'Phase 4: Synthesis & Presentation of GTM Proposal to Board'
    ],
    techUsed: ['TAM Modeling', 'Financial Projections', 'MoSCoW Matrix', 'Competitor Auditing']
  },
  {
    id: 'dashboard-dev',
    title: 'Internal Dashboard Dev',
    tag: 'Custom Operational Tooling',
    category: 'development',
    year: '2024',
    role: 'Business Analyst & Developer',
    liveUrl: 'https://github.com/WellyaKardika',
    gallery: [],
    description: 'Architected and built a custom analytics dashboard to streamline reporting processes for cross-functional teams.',
    about: 'Faced with multiple disconnected APIs and fragmented team logs, Asep consolidated metrics into a customized, high-frequency React portal. The front-end is styled with modern neobrutalist widgets that keep information dense yet highly readable.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7ysp8wabxrS-3PJvhawVgwCngJe53MdIGkGvuzKlznyUa-nRriDTvAGq8bdnRQBjx2PgNi8hBoGo5vrA3NMa2p9mcyfrug8gOTN9irRnaNRmKP_ZAaT6NdhYUhQHFsjGHhXlsBDc7aK2VijqVN9RKF4igvaccrVzKFnz3oTARI-Y1hKCgut0OLv420gr8qfMgW4iMVWSBB5jwJBB2Ka9cVZqiytgAfl7aZ_gWP9MsSm3-Wpd3IYpUASobBfS46b1GPoakk0VErqs',
    imageAlt: 'Sticker-style brutalist design illustrating cyan code windows, screen blocks, and high energy contrast.',
    deliverables: [
      'Wrote modular dashboard modules with custom graph bindings',
      'Created caching proxies to accelerate API response curves',
      'Enabled multi-role permissions to limit customer data display',
      'Replaced a spreadsheet workflow with direct automated panels'
    ],
    metrics: [
      { label: 'Reporting Hours Reduced', value: '80%' },
      { label: 'Active Daily Stake-users', value: '150+' },
      { label: 'Data Latency Status', value: 'Near Real-time' }
    ],
    chartData: [
      { name: 'Pre-System', value: 90 },
      { name: 'Month 1', value: 54 },
      { name: 'Month 2', value: 31 },
      { name: 'Month 3', value: 18 }
    ],
    methodology: [
      'Phase 1: Operational Flow Assessment & KPI Mapping',
      'Phase 2: Secure GraphQL API Schema Setup',
      'Phase 3: Responsive Front-End Dashboard Coding & State Tuning',
      'Phase 4: Team-wide Rollout, Training, & Metric Polishing'
    ],
    techUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'REST Integrations', 'Vite']
  }
];
