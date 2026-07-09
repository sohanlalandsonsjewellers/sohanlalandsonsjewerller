import axiosInstance from "./axios";

/**
 * ============================================================
 * Analytics Event Payload
 * ============================================================
 */

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