/* ===========================================================
   CUSTOMER ANALYTICS TYPES
=========================================================== */

export interface CustomerRecommendation {

    priority: "HIGH" | "MEDIUM" | "LOW";

    title: string;

    message: string;

}

export interface Customer {

    customerId: string;

    name: string;

    email: string;

    phone: string;

    createdAt: string;

    firstOrder: string | null;

    lastOrder: string | null;

    daysSinceLastOrder: number | null;

    totalOrders: number;

    totalSpent: number;

    averageOrderValue: number;

    customerLifetimeValue: number;

    averagePurchaseGap: number;

    revenueContribution: number;

    isRepeatCustomer: boolean;

    isNewCustomer: boolean;

    customerStatus: "Active" | "Inactive";

    lifetimeRank: "Gold" | "Silver" | "Bronze" | "Starter";

    segment: "VIP" | "Premium" | "Regular" | "New Customer";

    recommendations: CustomerRecommendation[];

}

export interface CustomerSummary {

    totalCustomers: number;

    totalRevenue: number;

    totalOrders: number;

    vipCustomers: number;

    premiumCustomers: number;

    regularCustomers: number;

    newCustomers: number;

    repeatCustomers: number;

    activeCustomers: number;

    inactiveCustomers: number;

    repeatRate: number;

    retentionRate: number;

    averagePurchaseGap: number;

    averageLifetimeValue: number;

    averageOrderValue: number;

}

export interface CustomerTrend {

    month: string;

    customers: number;

}

export interface CustomerSegments {

    VIP: number;

    Premium: number;

    Regular: number;

    "New Customer": number;

}

export interface CustomerFilters {

    days: number;

    page: number;

    limit: number;

    search: string | null;

    sort: string;

    segment: string | null;

    customerType: string | null;

    atRisk: boolean;

}

export interface Pagination {

    page: number;

    limit: number;

    pages: number;

    total: number;

}

export interface CustomerAnalyticsResponse {

    success: boolean;

    generatedAt: string;

    filters: CustomerFilters;

    summary: CustomerSummary;

    segments: CustomerSegments;

    customerTrend: CustomerTrend[];

    pagination: Pagination;

    count: number;

    data: Customer[];

}