import axiosInstance from "./axios";

export const getShippingRate = async (
  data: {
    destination: string;
    payment_type: "prepaid" | "cod";
    order_amount: number;
    weight: number;
    length: number;
    breadth: number;
    height: number;
  }
) => {

  const res = await axiosInstance.post(
    "/shipping/rates",
    data
  );

  return res.data;

};

export const createShipment = async (data: any) => {

  const res = await axiosInstance.post(
    "/shipping/create",
    data
  );

  return res.data;

};

export const trackShipment = async (awb: string) => {

  const res = await axiosInstance.get(
    `/shipping/track/${awb}`
  );

  return res.data;

};

export const cancelShipment = async (awb: string) => {

  const res = await axiosInstance.post(
    "/shipping/cancel",
    {
      awb
    }
  );

  return res.data;

};