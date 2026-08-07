import axiosInstance from "./axios";

export const getAllOrders = async () => {
  const res = await axiosInstance.get("/order/all");
  return { orders: res.data.orders || [] };
};

export const placeOrder = async (orderData: any) => {
  // ✅ FIX: Custom Authorization header hata diya (Cookie automatically chali jayegi)
  const res = await axiosInstance.post('/order/place', orderData);
  return res.data;
};

export const updateOrderStatus = async (id: string, status: string) => {
  const res = await axiosInstance.put(`/order/status/${id}`, { status });
  return res.data;
};

export const editOrderDetails = async (id: string, data: any) => {
  const res = await axiosInstance.put(`/order/edit/${id}`, data);
  return res.data;
};

export const deleteOrder = async (id: string) => {
  const res = await axiosInstance.delete(`/order/delete/${id}`);
  return res.data;
};

export async function getMyNotifications() {
  const res = await axiosInstance.get('/order/notifications/my');
  return res.data;
}