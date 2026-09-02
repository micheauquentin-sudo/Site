export interface Prize {
  id: string;
  label: string;
  sublabel?: string;
  codePrefix: string;
  color: string;
  textColor: string;
  probability: number;
}

export interface GameItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
  tag: string;
}

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  featured?: boolean;
  period: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface ValidationRecord {
  code: string;
  client: string;
  prize: string;
  status: 'PENDING' | 'REDEEMED';
  timestamp: string;
}
