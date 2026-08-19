export interface ApproachCapability {
  id: string;
  label: string;
  category: 'discover' | 'design' | 'build' | 'scale';
  isPrimary: boolean;
  initialPosition: { x: number; y: number };
  finalPosition: { x: number; y: number };
  relatedIds: string[];
}

export interface ApproachStage {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'Compass' | 'Layers' | 'Code2' | 'TrendingUp';
  capabilities: string[];
  x: number;
  y: number;
  nextStageId: string;
}

export const approachStages: ApproachStage[] = [
  {
    id: 'discover',
    number: '01',
    title: 'DISCOVER',
    tagline: 'Understand before we build.',
    description:
      'We examine your business, users, market, technology, and growth opportunities to identify what actually needs to change.',
    iconName: 'Compass',
    capabilities: [
      'Business Discovery',
      'Market Research',
      'User Research',
      'Technical Audit',
      'Digital Strategy',
    ],
    x: 0,
    y: -36,
    nextStageId: 'design',
  },
  {
    id: 'design',
    number: '02',
    title: 'DESIGN',
    tagline: 'Turn insight into direction.',
    description:
      'We transform research into clear strategies, intuitive experiences, scalable design systems, and actionable product roadmaps.',
    iconName: 'Layers',
    capabilities: [
      'Brand Strategy',
      'UX Strategy',
      'UI/UX Design',
      'Design Systems',
      'Product Strategy',
    ],
    x: -36,
    y: 0,
    nextStageId: 'build',
  },
  {
    id: 'build',
    number: '03',
    title: 'BUILD',
    tagline: 'Turn direction into working systems.',
    description:
      'We engineer reliable digital products, platforms, integrations, and automation designed around real business requirements.',
    iconName: 'Code2',
    capabilities: [
      'Web Development',
      'App Development',
      'AI Solutions',
      'Automation',
      'Cloud & Integrations',
    ],
    x: 36,
    y: 0,
    nextStageId: 'scale',
  },
  {
    id: 'scale',
    number: '04',
    title: 'SCALE',
    tagline: 'Make progress compound.',
    description:
      'We continuously measure, optimize, automate, and evolve the system so digital performance improves over time.',
    iconName: 'TrendingUp',
    capabilities: [
      'Analytics',
      'Performance Optimization',
      'Growth Strategy',
      'Conversion Optimization',
      'Continuous Improvement',
    ],
    x: 0,
    y: 36,
    nextStageId: 'discover',
  },
];

export const approachCapabilities: ApproachCapability[] = [
  // --- DISCOVER (Top Region) ---
  {
    id: 'business-discovery',
    label: 'Business Discovery',
    category: 'discover',
    isPrimary: true,
    initialPosition: { x: 0, y: -5 },
    finalPosition: { x: -22, y: -34 },
    relatedIds: ['market-research', 'technical-audit', 'digital-strategy'],
  },
  {
    id: 'market-research',
    label: 'Market Research',
    category: 'discover',
    isPrimary: false,
    initialPosition: { x: -5, y: -10 },
    finalPosition: { x: -8, y: -38 },
    relatedIds: ['business-discovery', 'user-research'],
  },
  {
    id: 'user-research',
    label: 'User Research',
    category: 'discover',
    isPrimary: false,
    initialPosition: { x: 5, y: -10 },
    finalPosition: { x: 8, y: -38 },
    relatedIds: ['market-research', 'ui-ux-design'],
  },
  {
    id: 'technical-audit',
    label: 'Technical Audit',
    category: 'discover',
    isPrimary: true,
    initialPosition: { x: 0, y: -5 },
    finalPosition: { x: 22, y: -34 },
    relatedIds: ['business-discovery', 'cloud-integrations', 'web-development'],
  },
  {
    id: 'digital-strategy',
    label: 'Digital Strategy',
    category: 'discover',
    isPrimary: true,
    initialPosition: { x: 0, y: -15 },
    finalPosition: { x: 0, y: -24 },
    relatedIds: ['business-discovery', 'brand-strategy', 'growth-strategy'],
  },

  // --- DESIGN (Left Region) ---
  {
    id: 'brand-strategy',
    label: 'Brand Strategy',
    category: 'design',
    isPrimary: true,
    initialPosition: { x: -15, y: -5 },
    finalPosition: { x: -36, y: -18 },
    relatedIds: ['digital-strategy', 'creative-direction'],
  },
  {
    id: 'ui-ux-design',
    label: 'UI/UX Design',
    category: 'design',
    isPrimary: true,
    initialPosition: { x: -10, y: 0 },
    finalPosition: { x: -24, y: -6 },
    relatedIds: ['user-research', 'design-systems', 'web-development'],
  },
  {
    id: 'design-systems',
    label: 'Design Systems',
    category: 'design',
    isPrimary: true,
    initialPosition: { x: -5, y: 5 },
    finalPosition: { x: -16, y: 12 },
    relatedIds: ['ui-ux-design', 'web-development'],
  },
  {
    id: 'creative-direction',
    label: 'Creative Direction',
    category: 'design',
    isPrimary: false,
    initialPosition: { x: -20, y: 0 },
    finalPosition: { x: -38, y: 8 },
    relatedIds: ['brand-strategy', 'ui-ux-design'],
  },

  // --- BUILD (Right Region) ---
  {
    id: 'web-development',
    label: 'Web Development',
    category: 'build',
    isPrimary: true,
    initialPosition: { x: 10, y: 0 },
    finalPosition: { x: 24, y: -6 },
    relatedIds: ['ui-ux-design', 'app-development', 'cloud-integrations'],
  },
  {
    id: 'app-development',
    label: 'App Development',
    category: 'build',
    isPrimary: false,
    initialPosition: { x: 15, y: 5 },
    finalPosition: { x: 36, y: -18 },
    relatedIds: ['web-development', 'ai-solutions'],
  },
  {
    id: 'ai-solutions',
    label: 'AI Solutions',
    category: 'build',
    isPrimary: true,
    initialPosition: { x: 5, y: 5 },
    finalPosition: { x: 16, y: 12 },
    relatedIds: ['automation', 'web-development'],
  },
  {
    id: 'automation',
    label: 'Automation',
    category: 'build',
    isPrimary: true,
    initialPosition: { x: 10, y: 10 },
    finalPosition: { x: 28, y: 18 },
    relatedIds: ['ai-solutions', 'cloud-integrations', 'conversion-optimization'],
  },
  {
    id: 'cloud-integrations',
    label: 'Cloud & Integrations',
    category: 'build',
    isPrimary: false,
    initialPosition: { x: 20, y: 0 },
    finalPosition: { x: 38, y: 8 },
    relatedIds: ['technical-audit', 'web-development', 'automation'],
  },

  // --- SCALE (Bottom Region) ---
  {
    id: 'analytics',
    label: 'Analytics',
    category: 'scale',
    isPrimary: true,
    initialPosition: { x: 0, y: 10 },
    finalPosition: { x: -18, y: 32 },
    relatedIds: ['growth-strategy', 'conversion-optimization'],
  },
  {
    id: 'performance-optimization',
    label: 'Performance Optimization',
    category: 'scale',
    isPrimary: false,
    initialPosition: { x: 5, y: 10 },
    finalPosition: { x: 0, y: 38 },
    relatedIds: ['analytics', 'web-development'],
  },
  {
    id: 'growth-strategy',
    label: 'Growth Strategy',
    category: 'scale',
    isPrimary: true,
    initialPosition: { x: 0, y: 5 },
    finalPosition: { x: 0, y: 22 },
    relatedIds: ['digital-strategy', 'analytics', 'conversion-optimization'],
  },
  {
    id: 'conversion-optimization',
    label: 'Conversion Optimization',
    category: 'scale',
    isPrimary: true,
    initialPosition: { x: -5, y: 10 },
    finalPosition: { x: 18, y: 32 },
    relatedIds: ['analytics', 'growth-strategy', 'automation'],
  },
];
