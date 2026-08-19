export interface SolutionCardData {
  id: string;
  number: string;
  category: string;
  headline: string;
  description: string;
  includes: string[];
  ctaLabel: string;
  ctaHref: string;
  iconName: 'Monitor' | 'Layers' | 'Bot' | 'RefreshCw' | 'TrendingUp' | 'BarChart3';
}

export interface ProblemOption {
  id: string;
  label: string;
  solutionTitle: string;
  headline: string;
  description: string;
  recommendedCapabilities: string[];
}

export interface JourneyStageData {
  number: string;
  title: string;
  problemText: string;
  solutionText: string;
}

export interface OutcomeItemData {
  number: string;
  title: string;
  description: string;
}
