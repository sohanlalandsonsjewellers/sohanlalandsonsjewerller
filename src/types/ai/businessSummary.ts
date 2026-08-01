/* ===========================================================
   BUSINESS SCORE
=========================================================== */

export interface BusinessScore {
    score: number;
    grade: string;

    breakdown: {
        revenue: number;
        orders: number;
        inventory: number;
        sales: number;
        customer: number;
        operations: number;
    };
}

/* ===========================================================
   SALES HEALTH
=========================================================== */

export interface SalesHealth {

    score: number;

    status: string;

    revenue: number;

    orders: number;

    averageOrderValue: number;

    revenueGrowth: number;

    orderGrowth: number;

}

/* ===========================================================
   INVENTORY HEALTH
=========================================================== */

export interface InventoryHealth {

    score: number;

    status: string;

    healthyProducts: number;

    lowStock: number;

    outOfStock: number;

    deadStock: number;

    healthyPercentage: number;

    lowStockPercentage: number;

    outOfStockPercentage: number;

    deadStockPercentage: number;

    inventoryValue: number;

    totalStock: number;

}

/* ===========================================================
   CUSTOMER HEALTH
=========================================================== */

export interface CustomerHealth {

    score: number;

    status: string;

    vip: number;

    premium: number;

    regular: number;

    new: number;

    returning: number;

    active: number;

    inactive: number;

    repeatRate: number;

    activeRate: number;

    averageCLV: number;

}

/* ===========================================================
   PRODUCT
=========================================================== */

export interface ProductAnalytics {

    _id: string;

    name: string;

    sku: string;

    image: string;

    soldQty: number;

    revenue: number;

}

/* ===========================================================
   DASHBOARD
=========================================================== */

export interface Dashboard {

    orders: {

        total: number;

        accepted: number;

        pending: number;

        cancelled: number;

        successRate: number;

        cancellationRate: number;

    };

    revenue: {

        total: number;

        currentMonth: number;

        previousMonth: number;

        growth: number;

        averageOrderValue: number;

    };

    products: {

        total: number;

        healthy: number;

        lowStock: number;

        outOfStock: number;

        inventoryValue: number;

        inventoryTurnover: number;

        totalStock: number;

    };

    customers: {

        total: number;

        vip: number;

        premium: number;

        regular: number;

        returning: number;

        repeatRate: number;

        activeRate: number;

    };

    topSellingProducts: ProductAnalytics[];

    fastMovingProducts: ProductAnalytics[];

    slowMovingProducts: ProductAnalytics[];

}

/* ===========================================================
   ALERT
=========================================================== */

export interface BusinessAlert {

    priority: "HIGH" | "MEDIUM" | "LOW";

    type: string;

    title: string;

    message: string;

    action: string;

}

/* ===========================================================
   RECOMMENDATION
=========================================================== */

export interface Recommendation {

    priority: "HIGH" | "MEDIUM" | "LOW";

    category: string;

    title: string;

    description: string;

    action: string;

    impact: string;

}

/* ===========================================================
   SUMMARY
=========================================================== */

export interface Summary {

    totalRevenue: number;

    totalOrders: number;

    acceptedOrders: number;

    pendingOrders: number;

    cancelledOrders: number;

    totalProducts: number;

    totalCustomers: number;

    inventoryValue: number;

    inventoryTurnover: number;

    averageOrderValue: number;

    orderSuccessRate: number;

    cancellationRate: number;

    revenueGrowth: number;

    orderGrowth: number;

}

/* ===========================================================
   API RESPONSE
=========================================================== */

export interface BusinessSummaryResponse {

    success: boolean;

    generatedAt: string;

    businessScore: BusinessScore;

    salesHealth: SalesHealth;

    inventoryHealth: InventoryHealth;

    customerHealth: CustomerHealth;

    dashboard: Dashboard;

    alerts: BusinessAlert[];

    recommendations: Recommendation[];

    summary: Summary;

}