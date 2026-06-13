import PolicyPage from "../PolicyPage";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect personal information such as your name, email address, phone number, and delivery address when you register or place an order on our website. We may also collect payment information, browsing data, and device information to improve your shopping experience."
  },
  {
    title: "How We Use Your Information",
    content: "Your information is used to process orders, send order confirmations and updates, provide customer support, send promotional offers (only if you opt-in), and improve our website and services. We do not use your data for any purpose beyond delivering our services to you."
  },
  {
    title: "Data Sharing & Third Parties",
    content: "We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted delivery partners and payment processors solely to fulfill your order. All third-party partners are required to maintain the confidentiality of your information."
  },
  {
    title: "Cookies & Tracking",
    content: "Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can choose to disable cookies through your browser settings, though this may affect some features of the website."
  },
  {
    title: "Data Security",
    content: "We implement industry-standard security measures including SSL encryption to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your data."
  },
  {
    title: "Your Rights",
    content: "You have the right to access, update, or delete your personal information at any time by contacting us. You may also unsubscribe from marketing communications at any time using the unsubscribe link in our emails."
  },
  {
    title: "Changes to This Policy",
    content: "We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated date. Continued use of our website after changes constitutes your acceptance of the revised policy."
  }
];

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      subtitle="SOHAN LAL & SON'S JEWELLERS"
      intro="At Sohan Lal & Son's Jewellers, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or make a purchase."
      sections={sections}
    />
  );
}
