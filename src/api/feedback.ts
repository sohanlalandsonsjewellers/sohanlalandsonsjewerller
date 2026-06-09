import axiosInstance from "./axios";

// 1. Guest Feedback Submit
export const submitGuestFeedback = async (data: { 
    userName: string, 
    pincode: string, 
    rating: number, 
    comment: string 
}) => {
  const res = await axiosInstance.post("/feedback/submit-guest", data);
  return res.data;
};

// 2. Auth User Feedback Submit
export const submitAuthFeedback = async (data: { 
    rating: number, 
    comment: string 
}) => {
  const res = await axiosInstance.post("/feedback/submit", data);
  return res.data;
};

// 3. Get All Feedbacks
export const getAllFeedbacks = async () => {
  const res = await axiosInstance.get("/feedback/all");
  return res.data;
};

export const deleteFeedback = async(id:string)=>{

  const res =
    await axiosInstance.delete(`/feedback/delete/${id}`);
    return res.data;

};