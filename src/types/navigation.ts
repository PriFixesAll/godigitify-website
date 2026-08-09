export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  description?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface NavigationConfig {
  mainNav: NavItem[];
  ctaNav: {
    label: string;
    href: string;
  };
}
