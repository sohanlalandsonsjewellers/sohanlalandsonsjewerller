export interface ProductPerformanceSummary {

    excellent: number;

    good: number;

    average: number;

    poor: number;

}

export interface ProductTrend {

    trend: string;

    growth: number;

}

export interface InventoryTurnover {

    turnover: number;

    status: string;

}

export interface Grade {

    grade: string;

    score: number;

}

export interface Strategy {

    action: string;

    priority: string;

}

export interface FastMoving {

    isFastMoving: boolean;

    score: number;

}

export interface SlowMoving {

    isSlowMoving: boolean;

    score: number;

}

export interface DeadStock {

    isDeadStock: boolean;

    score: number;

}

export interface ProductPerformance {

    productId: string;

    sku: string;

    name: string;

    category: string;

    price: number;

    stock: number;

    unitsSold: number;

    revenue: number;

    estimatedProfit: number;

    salesScore: number;

    revenueScore: number;

    profitScore: number;

    popularityScore: number;

    inventoryTurnover: InventoryTurnover;

    trend: ProductTrend;

    fastMoving: FastMoving;

    slowMoving: SlowMoving;

    deadStock: DeadStock;

    grade: Grade;

    strategy: Strategy;

    explanation: string;

}

export interface ProductPerformanceResponse {

    success: boolean;

    count: number;

    summary: ProductPerformanceSummary;

    data: ProductPerformance[];

}