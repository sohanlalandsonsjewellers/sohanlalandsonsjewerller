import axiosInstance from "./axios";

/* ==========================================
   TRACK EVENT
========================================== */

export interface TrackEventPayload {
  eventType: string;
  productId?: string;
  orderId?: string;
  sessionId?: string;
  page?: string;
  metadata?: Record<string, any>;
}

/**
 * ============================================================
 * Track Analytics Event
 * ============================================================
 */

export async function trackEvent(
  payload: TrackEventPayload
) {
  try {
    const response = await axiosInstance.post(
      "/analytics/event",
      payload
    );

    return response.data;
  } catch (error: any) {
    console.error(
      "Analytics Event Error:",
      error?.response?.data || error.message
    );

    return null;
  }
}

/* ==========================================
   OVERVIEW (Recommended)
========================================== */

export async function getAnalyticsOverview(
  days: number = 7
) {

  const res = await axiosInstance.get(

    `/analytics/overview?days=${days}`

  );

  return res.data;

}

/* ==========================================
   DASHBOARD SUMMARY
========================================== */

export async function getDashboardSummary(
  days: number = 7
) {

  const res = await axiosInstance.get(

    `/analytics/dashboard?days=${days}`

  );

  return res.data;

}

/* ==========================================
   TOP PRODUCTS
========================================== */

export async function getTopProducts(
  days: number = 7
) {

  const res = await axiosInstance.get(

    `/analytics/top-products?days=${days}`

  );

  return res.data;

}

/* ==========================================
   CONVERSION FUNNEL
========================================== */

export async function getConversionFunnel(
  days: number = 7
) {

  const res = await axiosInstance.get(

    `/analytics/funnel?days=${days}`

  );

  return res.data;

}

/* ==========================================
   SEARCH ANALYTICS
========================================== */

export async function getSearchAnalytics(
  days: number = 7
) {

  const res = await axiosInstance.get(

    `/analytics/search?days=${days}`

  );

  return res.data;

}

/* ==========================================
   DAILY ANALYTICS
========================================== */

export async function getDailyAnalytics(
  days: number = 7
) {

  const res = await axiosInstance.get(

    `/analytics/daily?days=${days}`

  );

  return res.data;

}

/* ==========================================
   REALTIME ANALYTICS
========================================== */

export async function getRealtimeAnalytics() {

  const res = await axiosInstance.get(

    "/analytics/realtime"

  );

  return res.data;

}


/* ==========================================
   BUSINESS DASHBOARD
========================================== */

export async function getBusinessDashboard() {

  const res = await axiosInstance.get(
    "/analytics/business"
  );

  return res.data;

}

export async function getTopCustomers() {

  const res = await axiosInstance.get(
    "/analytics/business/topCustomers"
  );

  return res.data;

}

export async function getCustomerInsights() {

  const res = await axiosInstance.get(

    "/analytics/business/customerinsights"

  );

  return res.data;

}

export async function getRecentOrders() {

  const res = await axiosInstance.get(

    "/analytics/business/recentorders"

  );

  return res.data;

}