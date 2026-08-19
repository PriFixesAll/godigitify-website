import { MetricItem, WhyPartnerCard, TeamMember } from '../types/about';

export const aboutMetrics: MetricItem[] = [
  { value: '7+', label: 'Years Building Systems' },
  { value: '500+', label: 'Systems Deployed' },
  { value: '3.2x', label: 'Avg. Efficiency Gain' },
];

export const whyPartnerCards: WhyPartnerCard[] = [
  {
    id: 'integration-first',
    title: 'Integration-First Architecture',
    description:
      'Every system we build connects to your existing stack. No isolated tools, no data silos, no manual workarounds — just unified infrastructure.',
    iconName: 'Network',
  },
  {
    id: 'measurable-roi',
    title: 'Measurable ROI Focus',
    description:
      'We track revenue impact, not vanity metrics. Custom dashboards show exactly how your infrastructure investment translates to business outcomes.',
    iconName: 'TrendingUp',
  },
  {
    id: 'systems-engineers',
    title: 'Systems Engineers, Not Vendors',
    description:
      'Our team combines technical architecture, growth strategy, and automation expertise — the rare intersection that builds systems, not just deliverables.',
    iconName: 'Cpu',
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise-Grade Security',
    description:
      'Every system is built with security-first principles. Data protection, compliance readiness, and infrastructure hardening are standard, not optional.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'scale-ready',
    title: 'Scale-Ready Infrastructure',
    description:
      'Built for 10x growth without 10x complexity. Our systems handle increasing load, users, and data without requiring proportional team expansion.',
    iconName: 'Maximize2',
  },
  {
    id: 'cost-effective',
    title: 'Cost-Effective',
    description:
      'Get maximum value for your investment. Our efficient processes and smart solutions deliver premium results within your budget.',
    iconName: 'DollarSign',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Niraj Gupta',
    role: 'Chief Marketing & Growth Officer',
    bio: 'Visionary marketing leader spearheading brand growth, strategic partnerships, and digital transformation to drive business expansion and global presence.',
  },
  {
    name: 'Abhishek Mishra',
    role: 'Head Of Operations',
    bio: 'Operational strategist ensuring seamless project execution, organizational efficiency, and alignment between innovation and execution excellence.',
  },
  {
    name: 'Aryan Kamboj',
    role: 'Head of Research & Innovation',
    bio: 'Innovative technologist leading research initiatives in emerging technologies to create transformative solutions with measurable real-world impact.',
  },
  {
    name: 'Aman Deep',
    role: 'Creative Head – Design & Brand Experience',
    bio: 'Creative powerhouse driving visual storytelling, user-centered design, and brand innovation that deliver emotionally engaging digital experiences.',
  },
];
