import PolicyPage from "../PolicyPage";

const sections = [
  {
    title: "Eligibility",
    content: "By using our website, you confirm that you are at least 18 years of age or are accessing the website under the supervision of a parent or legal guardian. You agree to provide accurate and complete information when placing orders."
  },
  {
    title: "Pricing & Payment",
    content: "All prices displayed on our website are in Indian Rupees (INR) and are inclusive of applicable taxes. We accept payments via UPI, GPay, Paytm, and RuPay. Prices are subject to change without prior notice. Payment must be completed at the time of placing the order."
  },
  {
    title: "Order Confirmation",
    content: "An order is confirmed only after successful payment. You will receive an email and SMS confirmation with your order details. We reserve the right to cancel any order in case of pricing errors, stock unavailability, or suspected fraudulent activity."
  },
  {
    title: "Product Description & Images",
    content: "We make every effort to display product images and descriptions as accurately as possible. However, slight variations in color or appearance may occur due to photography lighting or screen settings. Actual product weight and dimensions are mentioned in the product details."
  },
  {
    title: "Intellectual Property",
    content: "All content on this website including images, logos, product designs, and text is the property of Sohan Lal & Son's Jewellers. Unauthorized use, reproduction, or distribution of any content is strictly prohibited."
  },
  {
    title: "Limitation of Liability",
    content: "Sohan Lal & Son's Jewellers shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the value of the product purchased."
  },
  {
    title: "Governing Law",
    content: "These Terms & Conditions are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Maharajganj, Uttar Pradesh."
  }
];

export default function TermsAndConditions() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      subtitle="SOHAN LAL & SON'S JEWELLERS"
      intro="Please read these Terms and Conditions carefully before using our website. By accessing or placing an order, you agree to be bound by these terms. We reserve the right to update these terms at any time."
      sections={sections}
    />
  );
}
