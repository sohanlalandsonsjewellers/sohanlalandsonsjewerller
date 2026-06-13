import PolicyPage from "../PolicyPage";

const sections = [
  {
    title: "Exchange Eligibility",
    content: "Products can be exchanged within 7 days of delivery. The item must be unused, unworn, and in original condition with all tags, packaging, and authenticity certificates intact. Exchange requests raised after 7 days will not be accepted."
  },
  {
    title: "Exchange Process",
    content: "To initiate an exchange, contact us at sohanlalandsonsjewellers@gmail.com or call +91 96822 96756 with your order ID and reason for exchange. Our team will verify and guide you through the process within 24 hours."
  },
  {
    title: "Exchange for Different Product",
    content: "You may exchange your purchased item for any other product of equal or higher value. If the new product is of higher value, you will need to pay the difference amount. If it is of lower value, the balance will be issued as store credit."
  },
  {
    title: "Exchange Shipping",
    content: "We will arrange a reverse pickup for the original item. The replacement product will be shipped to you once we receive and inspect the returned item. Exchange shipping is free for the first exchange per order."
  },
  {
    title: "Non-Exchangeable Items",
    content: "Custom-made, engraved, or personalized jewellery cannot be exchanged unless received in damaged or defective condition. Items purchased during special sales or with discount coupons may have restricted exchange eligibility."
  },
  {
    title: "Quality Inspection",
    content: "All returned items undergo a quality inspection before the exchange is processed. If the product is found to be worn, damaged by the customer, or not in original condition, the exchange request will be rejected and the item will be returned to you."
  }
];

export default function ExchangePolicy() {
  return (
    <PolicyPage
      title="Exchange Policy"
      subtitle="SOHAN LAL & SON'S JEWELLERS"
      intro="We want you to love every piece you purchase from us. If you wish to exchange a product, we make the process as simple and smooth as possible. Please read our exchange guidelines below."
      sections={sections}
    />
  );
}
