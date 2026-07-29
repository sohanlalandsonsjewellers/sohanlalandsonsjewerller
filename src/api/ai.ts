import aiAxios from "./aiAxios";

/* ===========================================================
   BUSINESS SUMMARY
=========================================================== */

export interface BusinessSummaryResponse {

    success: boolean;

    generatedAt: string;

    businessScore: {

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

    };

    orders: {

        total: number;

        accepted: number;

        pending: number;

        cancelled: number;

    };

    products: {

        total: number;

        totalStock: number;

        lowStock: number;

        outOfStock: number;

        inventoryValue: number;

    };

    customers: {

        total: number;

        health: {

            score: number;

            status: string;

            vip: number;

            premium: number;

            regular: number;

            new: number;

        };

    };

    sales: {

        totalRevenue: number;

        averageOrderValue: number;

        health: {

            status: string;

        };

    };

    inventoryHealth: {

        score: number;

        status: string;

    };

    alerts: string[];

    recommendations: string[];

}

export async function getBusinessSummary(): Promise<BusinessSummaryResponse> {

    const res = await aiAxios.get<BusinessSummaryResponse>(
        "/ai/business-summary"
    );

    return res.data;

}