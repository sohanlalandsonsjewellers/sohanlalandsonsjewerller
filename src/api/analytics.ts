import axiosInstance from "./axios";

/* ==========================================
   TRACK EVENT
========================================== */

export async function trackEvent(data: any) {

  const res = await axiosInstance.post(

    "/analytics/event",

    data

  );

  return res.data;

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