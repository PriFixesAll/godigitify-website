export interface ServiceImageData {
  image: string;
  rotation: number;
}

export const serviceImageMap: Record<string, ServiceImageData> = {
  // --- DESIGN & BRAND ---
  'design-systems': {
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    rotation: -4,
  },
  'product-strategy': {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    rotation: 3,
  },
  'digital-transformation': {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    rotation: -3,
  },
  'technology-consulting': {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    rotation: 4,
  },
  'ui-ux-design': {
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    rotation: -4,
  },
  'web-development': {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    rotation: 3,
  },
  'ai-solutions': {
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
    rotation: -3,
  },
  'web-design': {
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80',
    rotation: 4,
  },
  'product-design': {
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
    rotation: -4,
  },
  'web-applications': {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    rotation: 3,
  },
  'brand-strategy': {
    image: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=600&q=80',
    rotation: -4,
  },
  'brand-identity': {
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
    rotation: 4,
  },
  'visual-identity': {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    rotation: -3,
  },
  'creative-direction': {
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
    rotation: 3,
  },
  'gtm-strategy': {
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
    rotation: -4,
  },
  'performance-marketing': {
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=600&q=80',
    rotation: 3,
  },
  'digital-marketing': {
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
    rotation: -3,
  },
  'seo': {
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80',
    rotation: 4,
  },
  'social-media': {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80',
    rotation: -3,
  },
  'mobile-applications': {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    rotation: 3,
  },
  'saas-development': {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    rotation: -4,
  },
  'ai-integration': {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    rotation: 4,
  },
  'e-commerce': {
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80',
    rotation: -3,
  },
  'business-automation': {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    rotation: 3,
  },
  'workflow-automation': {
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    rotation: -3,
  },
  'analytics': {
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
    rotation: 4,
  },
  // Main service card fallbacks
  'brand': {
    image: '/brand_systems_hero.jpg',
    rotation: -4,
  },
  'marketing': {
    image: '/digital_growth_hero.jpg',
    rotation: 3,
  },
  'product': {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    rotation: -3,
  },
};

export function getServiceImageData(id: string, defaultTitle: string): ServiceImageData {
  if (serviceImageMap[id]) {
    return serviceImageMap[id];
  }
  // Deterministic fallback based on id length
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const rotations = [-4, 3, -3, 4];
  return {
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    rotation: rotations[hash % rotations.length],
  };
}
