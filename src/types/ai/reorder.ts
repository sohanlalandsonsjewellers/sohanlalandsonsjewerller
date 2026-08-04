export interface ReorderSummary {

    critical: number;

    high: number;

    medium: number;

    low: number;

    none: number;

    totalRecommendedQty: number;

}

export interface ReorderProduct {

    productId: string;

    name: string;

    sku: string;

    category: string;

    price: number;

    currentStock: number;

    totalSold: number;

    historyLength: number;

    forecastModel: string;

    predictedDemand: number;

    averageDailyDemand: number;

    leadTimeDays: number;

    leadTimeSource: string;

    safetyStock: number;

    recommendedQty: number;

    priority: string;

    priorityScore: number;

    reorderScore: number;

    reorderLevel: string;

    confidence: string;

    action: string;

    reason: string;

    explanation: string[];

}

export interface ReorderResponse {

    success: boolean;

    generatedAt: string;

    days: number;

    count: number;

    summary: ReorderSummary;

    data: ReorderProduct[];

}