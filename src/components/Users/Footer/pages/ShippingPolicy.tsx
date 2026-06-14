import PolicyPage from "../PolicyPage";

const sections = [
  {
    title: "Delivery Areas",
    content: "We offer Pan India delivery to all major cities, towns, and pin codes across India. For remote or restricted areas, delivery timelines may vary. International shipping is currently not available."
  },
  {
    title: "Processing Time",
    content: "All orders are processed within 1–2 business days after successful payment confirmation. Orders placed on Sundays or public holidays will be processed on the next working day."
  },
  {
    title: "Delivery Timeline",
    content: "Standard delivery typically takes 5–7 business days depending on your location. Metro cities may receive orders within 3–5 business days. Remote areas may take up to 10 business days."
  },
  {
    title: "Shipping Charges",
    content: "We offer FREE shipping on all orders above ₹1,500. For orders below ₹1,500, a flat shipping fee of ₹99 is applicable. Shipping charges (if any) will be displayed at checkout before final payment."
  },
  {
    title: "Order Tracking",
    content: "Once your order is dispatched, you will receive a tracking number via SMS and email. You can use this number to track your order on the courier partner's website or through the Track Order section on our website."
  },
  {
    title: "Packaging",
    content: "All jewellery is carefully packaged in our premium gift boxes to ensure safe delivery. Products are securely wrapped and sealed to prevent damage during transit."
  },
  {
    title: "Delivery Attempts",
    content: "Our courier partner will make up to 3 delivery attempts. If the package cannot be delivered after 3 attempts, it will be returned to us. Please ensure someone is available at the delivery address or provide an alternate contact number."
  }
];

export default function ShippingPolicy() {
  return (
    <PolicyPage
      title="Shipping Policy"
      subtitle="SOHAN LAL & SON'S JEWELLERS"
      intro="We are committed to delivering your precious jewellery safely and on time. All orders are handled with the utmost care and dispatched through trusted courier partners across India."
      sections={sections}
    />
  );
}
