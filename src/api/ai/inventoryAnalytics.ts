import aiAxios from "../aiAxios";

import {
    InventoryAnalyticsResponse,
    InventorySummaryResponse,
    InventoryListResponse
} from "../../types/ai/inventory";

/* ===========================================================
   INVENTORY DASHBOARD
=========================================================== */

export async function getInventoryAnalytics() {

    const { data } =
        await aiAxios.get<InventoryAnalyticsResponse>(
            "/ai/inventory-analytics"
        );

    return data;

}

/* ===========================================================
   SUMMARY
=========================================================== */

export async function getInventorySummary() {

    const { data } =
        await aiAxios.get<InventorySummaryResponse>(
            "/ai/inventory-analytics/summary"
        );

    return data;

}

/* ===========================================================
   LOW STOCK
=========================================================== */

export async function getLowStockProducts() {

    const { data } =
        await aiAxios.get<InventoryListResponse>(
            "/ai/inventory-analytics/low-stock"
        );

    return data;

}

/* ===========================================================
   CRITICAL STOCK
=========================================================== */

export async function getCriticalStockProducts() {

    const { data } =
        await aiAxios.get<InventoryListResponse>(
            "/ai/inventory-analytics/critical-stock"
        );

    return data;

}

/* ===========================================================
   OUT OF STOCK
=========================================================== */

export async function getOutOfStockProducts() {

    const { data } =
        await aiAxios.get<InventoryListResponse>(
            "/ai/inventory-analytics/out-of-stock"
        );

    return data;

}

/* ===========================================================
   HEALTHY STOCK
=========================================================== */

export async function getHealthyStockProducts() {

    const { data } =
        await aiAxios.get<InventoryListResponse>(
            "/ai/inventory-analytics/healthy"
        );

    return data;

}

/* ===========================================================
   OVER STOCK
=========================================================== */

export async function getOverStockProducts() {

    const { data } =
        await aiAxios.get<InventoryListResponse>(
            "/ai/inventory-analytics/overstock"
        );

    return data;

}

/* ===========================================================
   STOCK AGING
=========================================================== */

export async function getStockAging() {

    const { data } =
        await aiAxios.get<InventoryListResponse>(
            "/ai/inventory-analytics/aging"
        );

    return data;

}

/* ===========================================================
   AI RECOMMENDATIONS
=========================================================== */

export async function getInventoryRecommendations() {

    const { data } =
        await aiAxios.get<InventoryListResponse>(
            "/ai/inventory-analytics/recommendations"
        );

    return data;

}