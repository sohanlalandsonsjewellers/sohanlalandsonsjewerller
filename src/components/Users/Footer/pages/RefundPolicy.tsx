import PolicyPage from "../PolicyPage";

const sections = [
  {
    title: "Refund Eligibility",
    content: "Refunds are applicable only if you receive a damaged, defective, or incorrect product. Refund requests must be raised within 48 hours of delivery with unboxing video proof. Products without original packaging or tampered hallmark tags are not eligible for refunds."
  },
  {
    title: "How to Request a Refund",
    content: "To initiate a refund, contact us at sohanlalandsonsjewellers@gmail.com or call +91 96822 96756 within 48 hours of receiving the product. Share your order ID, photos/video of the product, and reason for the refund request."
  },
  {
    title: "Refund Processing Time",
    content: "Once your refund request is approved after verification, the amount will be credited back to your original payment method within 5–7 business days. UPI and wallet refunds are typically processed within 24–48 hours."
  },
  {
    title: "Non-Refundable Items",
    content: "Custom-made, personalized, or engraved jewellery items are non-refundable unless they arrive damaged or defective. Products that have been worn, resized, or altered cannot be returned."
  },
  {
    title: "Return Shipping",
    content: "For approved refunds, we will arrange a pickup from your address at no additional cost. Do not ship the product without our authorization as we will not be responsible for any items lost in transit without our knowledge."
  }
];

export default function RefundPolicy() {
  return (
    <PolicyPage
      title="Refund Policy"
      subtitle="SOHAN LAL & SON'S JEWELLERS"
      intro="Your satisfaction is our priority. We offer hassle-free refunds for eligible products. Please review our refund conditions carefully before placing your order."
      sections={sections}
    />
  );
}
