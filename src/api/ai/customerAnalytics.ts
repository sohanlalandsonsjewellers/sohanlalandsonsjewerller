import aiAxios from "../aiAxios";

import {
    CustomerAnalyticsResponse,
    CustomerSummary,
    CustomerSegments,
    Customer
} from "../../types/ai/customer";

/* ===========================================================
   CUSTOMER ANALYTICS
=========================================================== */

export interface CustomerAnalyticsParams {

    days?: number;

    page?: number;

    limit?: number;

    search?: string;

    sort?: "spent" | "orders" | "recent" | "name";

    segment?: "VIP" | "Premium" | "Regular" | "New Customer";

    customerType?: "repeat" | "new";

    atRisk?: boolean;

}

/* ===========================================================
   CUSTOMER ANALYTICS
=========================================================== */

export async function getCustomerAnalytics(
    params: CustomerAnalyticsParams = {}
): Promise<CustomerAnalyticsResponse> {

    const { data } =
        await aiAxios.get<CustomerAnalyticsResponse>(
            "/ai/customer-analytics",
            {
                params
            }
        );

    return data;

}

/* ===========================================================
   SUMMARY
=========================================================== */

export interface CustomerSummaryResponse {

    success: boolean;

    generatedAt: string;

    summary: CustomerSummary;

    segments: CustomerSegments;

}

export async function getCustomerSummary(
    days: number = 30
): Promise<CustomerSummaryResponse> {

    const { data } =
        await aiAxios.get<CustomerSummaryResponse>(
            "/ai/customer-analytics/summary",
            {
                params: {
                    days
                }
            }
        );

    return data;

}

/* ===========================================================
   TOP CUSTOMERS
=========================================================== */

export interface TopCustomersResponse {

    success: boolean;

    generatedAt: string;

    count: number;

    data: Customer[];

}

export async function getTopCustomers(

    limit: number = 10,

    days: number = 30

): Promise<TopCustomersResponse> {

    const { data } =
        await aiAxios.get<TopCustomersResponse>(
            "/ai/customer-analytics/top-customers",
            {
                params: {

                    limit,

                    days

                }
            }
        );

    return data;

}

/* ===========================================================
   SEGMENTS
=========================================================== */

export interface CustomerSegmentsResponse {

    success: boolean;

    generatedAt: string;

    segments: CustomerSegments;

}

export async function getCustomerSegments(
    days: number = 30
): Promise<CustomerSegmentsResponse> {

    const { data } =
        await aiAxios.get<CustomerSegmentsResponse>(
            "/ai/customer-analytics/segments",
            {
                params: {
                    days
                }
            }
        );

    return data;

}

/* ===========================================================
   CUSTOMER DETAILS
=========================================================== */

export interface CustomerDetailsResponse {

    success: boolean;

    generatedAt: string;

    data: Customer;

}

export async function getCustomerDetails(

    customerId: string,

    days: number = 365

): Promise<CustomerDetailsResponse> {

    const { data } =
        await aiAxios.get<CustomerDetailsResponse>(
            `/ai/customer-analytics/customer/${customerId}`,
            {
                params: {

                    days

                }
            }
        );

    return data;

}