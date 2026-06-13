import PolicyPage from "../PolicyPage";

const sections = [
  {
    title: "Is the jewellery hallmarked?",
    content: "Yes, all our gold jewellery is 100% BIS Hallmarked, ensuring purity and authenticity. Our silver jewellery is also certified for purity. You can verify the hallmark on each piece before purchase."
  },
  {
    title: "What is 1 Gram Jewellery?",
    content: "1 Gram Jewellery refers to gold-plated jewellery where a thin layer of gold is electroplated onto a base metal. It offers the look and feel of real gold jewellery at a fraction of the cost. It is ideal for everyday wear and special occasions."
  },
  {
    title: "How do I place an order?",
    content: "Browse our collections, select your desired product, choose size/variant if applicable, and click 'Add to Cart'. Proceed to checkout, fill in your delivery details, and complete payment via UPI, GPay, Paytm, or RuPay."
  },
  {
    title: "Can I cancel my order?",
    content: "Orders can be cancelled within 2 hours of placement by contacting our support team. Once the order is dispatched, cancellation is not possible. In such cases, you may request a return after delivery."
  },
  {
    title: "How do I track my order?",
    content: "After dispatch, you will receive a tracking number via SMS and email. Use this number on our Track Order page or the courier partner's website to check your delivery status in real time."
  },
  {
    title: "What payment methods do you accept?",
    content: "We accept UPI (all apps), GPay, Paytm, and RuPay card. All transactions are secured with SSL encryption. We do not store any payment card information on our servers."
  },
  {
    title: "How do I care for my jewellery?",
    content: "Store jewellery in a dry, cool place away from direct sunlight. Avoid contact with water, perfumes, and chemicals. Clean with a soft dry cloth after use. For gold-plated jewellery, avoid prolonged exposure to sweat and moisture to maintain its shine."
  },
  {
    title: "Do you offer gift packaging?",
    content: "Yes! All orders are shipped in our premium branded gift boxes at no extra cost, making them perfect for gifting. If you need a personalized gift message, mention it in the order notes section at checkout."
  },
  {
    title: "How do I contact customer support?",
    content: "You can reach us at sohanlalandsonsjewellers@gmail.com or call/WhatsApp us at +91 96822 96756. Our store is open Monday to Saturday 10 AM – 8 PM and Sunday 11 AM – 6 PM."
  }
];

export default function FAQs() {
  return (
    <PolicyPage
      title="FAQs"
      subtitle="FREQUENTLY ASKED QUESTIONS"
      intro="Have questions? We have answers. Browse through our most commonly asked questions below. If you don't find what you're looking for, feel free to contact our support team."
      sections={sections}
    />
  );
}
