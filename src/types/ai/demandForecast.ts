export interface DemandForecastPoint {

    day: number;

    predictedQty: number;

}

export interface DemandForecastItem {

    productId: string;

    name: string;

    category: string;

    sku: string;

    price: number;

    stock: number;

    history: number[];

    forecast: DemandForecastPoint[];

    forecastModel: string;

    historyLength: number;

    totalSold: number;

}

export interface DemandForecastResponse {

    success: boolean;

    days: number;

    count: number;

    data: DemandForecastItem[];

}

export interface DemandInsightItem {

    productId: string;

    name: string;

    category: string;

    sku: string;

    price: number;

    currentStock: number;

    totalSold: number;

    predictedDemand: number;

    averageDailyDemand: number;

    daysOfStockLeft: number | null;

    stockCoveragePercent: number;

    demandScore: number;

    priority: string;

    salesCategory: string;

    inventoryHealth: string;

    trend: string;

    stockRisk: string;

    businessRecommendation: string;

    forecastModel: string;

}

export interface DemandInsightsResponse {

    success: boolean;

    days: number;

    count: number;

    data: DemandInsightItem[];

}