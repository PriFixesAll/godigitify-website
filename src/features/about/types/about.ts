export interface MetricItem {
  value: string;
  label: string;
}

export interface WhyPartnerCard {
  id: string;
  title: string;
  description: string;
  iconName: 'Network' | 'TrendingUp' | 'Cpu' | 'ShieldCheck' | 'Maximize2' | 'DollarSign';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}
