/* ===========================================================
   INVENTORY HEALTH
=========================================================== */

export type InventoryHealthStatus =
    | "Healthy"
    | "Low Stock"
    | "Critical"
    | "Out Of Stock";

/* ===========================================================
   INVENTORY PRODUCT
=========================================================== */

export interface InventoryProduct {

    productId: string;

    name: string;

    sku: string;

    category: string;

    stock: number;

    purchasePrice: number;

    inventoryHealth: InventoryHealthStatus;

    inventoryValue: number;

    stockAge: string;

    unitsSold: number;

    turnover: number;

    stockoutDays: number | null;

    overStock: boolean;

    recommendation: string;

    createdAt?: string;

    updatedAt?: string;

}

/* ===========================================================
   SUMMARY
=========================================================== */

export interface InventorySummary {

    totalProducts: number;

    totalStock: number;

    inventoryValue: number;

    healthyStock: number;

    lowStock: number;

    criticalStock: number;

    outOfStock: number;

    overStock: number;

    averageInventoryTurnover: number;

    averageStockoutDays: number;

}

/* ===========================================================
   MAIN RESPONSE
=========================================================== */

export interface InventoryAnalyticsResponse {

    success: boolean;

    summary: InventorySummary;

    count: number;

    data: InventoryProduct[];

}

/* ===========================================================
   SUMMARY RESPONSE
=========================================================== */

export interface InventorySummaryResponse {

    success: boolean;

    summary: InventorySummary;

}

/* ===========================================================
   LIST RESPONSE
=========================================================== */

export interface InventoryListResponse {

    success: boolean;

    count: number;

    data: InventoryProduct[];

}

/* ===========================================================
   PRODUCT DETAILS
=========================================================== */

export interface InventoryProductResponse {

    success: boolean;

    data: InventoryProduct;

}