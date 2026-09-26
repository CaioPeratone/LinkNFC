export interface ProfitMetrics {
  cardsPerDay: number;
  daysPerMonth: number;
  totalCards: number;
  costPerCard: number;
  resalePrice: number;
  totalCost: number;
  grossRevenue: number;
  netProfit: number;
  marginPercent: number;
}

export interface WholesaleTier {
  id: string;
  name: string;
  badge?: string;
  cardCount: number;
  unitPrice: number;
  suggestedResale: number;
  estimatedProfit: number;
  highlight?: boolean;
  freeShipping?: boolean;
  bonusGift?: string;
  whatsappMessage: string;
}

export interface GrowthDataPoint {
  period: string;
  placas: number;
  investimento: number;
  faturamento: number;
  lucroLiquido: number;
}
