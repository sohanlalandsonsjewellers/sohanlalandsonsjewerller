export interface KPI {

    title: string;

    value: number | string;

    change: number;

    trend: string;

}

export interface BusinessHealth {

    score: number;

    status: string;

    revenueScore: number;

    salesScore: number;

    inventoryScore: number;

    customerScore: number;

    forecastScore: number;

    demandScore: number;

    reorderScore: number;

    priceScore: number;

    productScore: number;

}

export interface Alert {

    priority: string;

    title: string;

    message: string;

}

export interface Recommendation {

    priority: string;

    title: string;

    description: string;

}

export interface ExecutiveDashboardResponse {

    generatedAt: string;

    businessHealth: BusinessHealth;

    summary: {

        users: number;

        products: number;

        orders: number;

        bills: number;

        revenue: number;

        inventoryValue: number;

    };

    kpis: KPI[];

    alerts: Alert[];

    recommendations: Recommendation[];

    modules: any;

}