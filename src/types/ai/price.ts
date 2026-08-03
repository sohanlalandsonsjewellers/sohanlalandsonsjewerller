export interface PriceStrategy {

    increase: number;

    maintain: number;

    discount: number;

    clearance: number;

    bundle: number;

}

export interface PricingHealth {

    underpriced: number;

    fairPrice: number;

    overpriced: number;

    needsReview: number;

}

export interface DemandSummary {

    high: number;

    medium: number;

    low: number;

}

export interface StockSummary {

    low: number;

    normal: number;

    high: number;

}

export interface PrioritySummary {

    critical: number;

    high: number;

    medium: number;

    low: number;

}

export interface PriceDashboard {

    totalProducts: number;

    priceStrategy: PriceStrategy;

    pricingHealth: PricingHealth;

    demandSummary: DemandSummary;

    stockSummary: StockSummary;

    prioritySummary: PrioritySummary;

    inventoryRiskProducts: number;

    actionRequired: number;

    averageCurrentPrice: number;

    averageSuggestedPrice: number;

    averageDiscountPercent: number;

    averageConfidence: number;

}

export interface PriceProduct {

    productId: string;

    name: string;

    category: string;

    sku: string;

    price: number;

    stock: number;

    unitsSold: number;

    revenue: number;

    orderCount: number;

    averageSellingPrice: number;

    pricingHealth: string;

    demandLevel: string;

    stockLevel: string;

    salesVelocity: string;

    confidence: number;

    reason: string;

    strategy: string;

    currentPrice: number;

    suggestedPrice: number;

    priceChangePercent: number;

    recommendation: string;

    discountPercent: number;

    discountReason: string;

    finalRecommendation: string;

    action: string;

    priority: string;

    timeline: string;

    nextAction: string;

    explanation: string;

    strengths: string[];

    risks: string[];

    insights: string[];

}

export interface PriceOptimizationResponse {

    dashboard: PriceDashboard;

    products: PriceProduct[];

}