import {
  SolutionCardData,
  ProblemOption,
  JourneyStageData,
  OutcomeItemData,
} from '../types/solution';

export const solutionsList: SolutionCardData[] = [
  {
    id: 'digital-experience',
    number: '01',
    category: 'DIGITAL EXPERIENCE',
    headline: 'Transform how customers experience your business.',
    description:
      'Modernize your digital presence with connected brand, web and product experiences designed around your customers.',
    includes: ['Brand Experience', 'UI/UX', 'Web Platforms', 'Digital Products'],
    ctaLabel: 'Explore Solution',
    ctaHref: '/contact?solution=digital-experience',
    iconName: 'Monitor',
  },
  {
    id: 'digital-product',
    number: '02',
    category: 'DIGITAL PRODUCT',
    headline: 'Turn ideas into products people use.',
    description:
      'From MVPs to scalable platforms, we design and engineer digital products around real users, business models and long-term growth.',
    includes: ['Product Strategy', 'UX/UI', 'Web Applications', 'Mobile Applications', 'SaaS'],
    ctaLabel: 'Explore Solution',
    ctaHref: '/contact?solution=digital-product',
    iconName: 'Layers',
  },
  {
    id: 'intelligent-automation',
    number: '03',
    category: 'INTELLIGENT AUTOMATION',
    headline: 'Replace repetitive work with intelligent systems.',
    description:
      'Connect workflows, data and AI to reduce manual effort, improve operational efficiency and help teams move faster.',
    includes: ['AI Solutions', 'Workflow Automation', 'Process Optimization', 'System Integrations'],
    ctaLabel: 'Explore Solution',
    ctaHref: '/contact?solution=intelligent-automation',
    iconName: 'Bot',
  },
  {
    id: 'digital-transformation',
    number: '04',
    category: 'DIGITAL TRANSFORMATION',
    headline: 'Modernize the systems behind your business.',
    description:
      'Bring legacy technology, disconnected platforms and digital operations into a more scalable architecture.',
    includes: ['Technology Modernization', 'Cloud', 'API Integration', 'System Architecture', 'Digital Transformation'],
    ctaLabel: 'Explore Solution',
    ctaHref: '/contact?solution=digital-transformation',
    iconName: 'RefreshCw',
  },
  {
    id: 'growth-performance',
    number: '05',
    category: 'GROWTH & PERFORMANCE',
    headline: 'Build a digital engine that compounds.',
    description:
      'Connect marketing, content, analytics and conversion systems to create measurable and sustainable digital growth.',
    includes: ['Digital Marketing', 'SEO', 'Performance Marketing', 'Analytics', 'CRO'],
    ctaLabel: 'Explore Solution',
    ctaHref: '/contact?solution=growth-performance',
    iconName: 'TrendingUp',
  },
  {
    id: 'business-intelligence',
    number: '06',
    category: 'BUSINESS INTELLIGENCE',
    headline: 'Turn your data into better decisions.',
    description:
      'Bring your business data together and transform it into clear insights that support faster, smarter decisions.',
    includes: ['Data Analytics', 'Dashboards', 'Reporting', 'Business Intelligence', 'Performance Insights'],
    ctaLabel: 'Explore Solution',
    ctaHref: '/contact?solution=business-intelligence',
    iconName: 'BarChart3',
  },
];

export const problemOptions: ProblemOption[] = [
  {
    id: 'build-new',
    label: 'Build something new',
    solutionTitle: 'DIGITAL PRODUCT ENGINE',
    headline: 'Validate, design, and engineer new digital assets.',
    description:
      'Turn strategic concepts into market-ready web platforms, SaaS tools, or mobile applications engineered for fast user adoption.',
    recommendedCapabilities: ['Product Strategy', 'UI/UX Design', 'Full-Stack Engineering', 'Cloud Infrastructure'],
  },
  {
    id: 'modernize-tech',
    label: 'Modernize existing technology',
    solutionTitle: 'SYSTEM MODERNIZATION',
    headline: 'Refactor legacy code and scale cloud architecture.',
    description:
      'Eliminate technical debt, migrate to modern API architectures, and rebuild slow platforms for 99.99% uptime & velocity.',
    recommendedCapabilities: ['System Architecture', 'API Integration', 'Cloud Migration', 'DevOps & Security'],
  },
  {
    id: 'improve-cx',
    label: 'Improve customer experience',
    solutionTitle: 'DIGITAL EXPERIENCE SYSTEM',
    headline: 'Unify brand, web, and product touchpoints.',
    description:
      'Remove friction across user journeys, modernize UI design systems, and build high-converting customer experiences.',
    recommendedCapabilities: ['Brand Systems', 'UX/UI Architecture', 'Conversion Optimization', 'Web Experience'],
  },
  {
    id: 'automate-ops',
    label: 'Automate operations',
    solutionTitle: 'INTELLIGENT AUTOMATION',
    headline: 'Automate repetitive workflows and integrate AI.',
    description:
      'Connect isolated software platforms, deploy AI process automation, and streamline daily operational workflows.',
    recommendedCapabilities: ['AI Solutions', 'Workflow Automation', 'System Integration', 'Data Intelligence'],
  },
  {
    id: 'accelerate-growth',
    label: 'Accelerate growth',
    solutionTitle: 'GROWTH & PERFORMANCE ENGINE',
    headline: 'Compound organic reach, conversion, and revenue.',
    description:
      'Deploy connected marketing, content automation, conversion rate optimization, and performance marketing funnels.',
    recommendedCapabilities: ['Performance Marketing', 'SEO & Content', 'Conversion Rate Optimization', 'Growth Analytics'],
  },
  {
    id: 'understand-data',
    label: 'Understand our data',
    solutionTitle: 'BUSINESS INTELLIGENCE HUB',
    headline: 'Consolidate raw data into actionable executive insights.',
    description:
      'Build real-time analytics dashboards, data pipelines, and BI reporting tools to empower faster strategic decision-making.',
    recommendedCapabilities: ['Data Engineering', 'Executive Dashboards', 'Predictive Analytics', 'BI Infrastructure'],
  },
];

export const journeyStages: JourneyStageData[] = [
  {
    number: '01',
    title: 'DISCOVER',
    problemText: 'You have a challenge, but need clarity.',
    solutionText: 'Strategy & Digital Discovery',
  },
  {
    number: '02',
    title: 'BUILD',
    problemText: 'You have an idea that needs to become real.',
    solutionText: 'Product & Digital Experience',
  },
  {
    number: '03',
    title: 'TRANSFORM',
    problemText: "Your systems work, but don't scale.",
    solutionText: 'Technology & Automation',
  },
  {
    number: '04',
    title: 'SCALE',
    problemText: 'You are ready to compound growth.',
    solutionText: 'Growth & Intelligence',
  },
];

export const outcomeItems: OutcomeItemData[] = [
  {
    number: '01',
    title: 'FASTER',
    description: 'Reduce friction across digital operations.',
  },
  {
    number: '02',
    title: 'SMARTER',
    description: 'Turn data and AI into better decisions.',
  },
  {
    number: '03',
    title: 'CONNECTED',
    description: 'Bring disconnected systems and teams together.',
  },
  {
    number: '04',
    title: 'SCALABLE',
    description: 'Build foundations designed for long-term growth.',
  },
];
