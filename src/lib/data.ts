export interface Product {
  id: number;
  title: string;
  spec: string;
  price: string;
  image: string;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Browse Containers", href: "/browse" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const heroSlides = [
  { id: 1, image: "/images/hero-1.png", alt: "Shipping containers at port terminal" },
  { id: 2, image: "/images/hero-2.png", alt: "Container being lifted by crane" },
  { id: 3, image: "/images/hero-3.png", alt: "Stacked shipping containers at yard" },
] as const;

export const featureItems = [
  {
    icon: "/icons/location.png",
    title: "Multiple Terminals",
    description: "Search by size, type, or location",
  },
  {
    icon: "/icons/container.png",
    title: "All Container Types",
    description: "20ft, 40ft, High Cube, etc",
  },
  {
    icon: "/icons/inspect.png",
    title: "Inspect Before You Buy",
    description: "Book inspection with ease",
  },
  {
    icon: "/icons/chat.png",
    title: "Chat With Admin",
    description: "Speak directly with our team",
  },
] as const;

export const howItWorksSteps = [
  {
    icon: "/icons/location.png",
    title: "Browse",
    description: "Find a container that fits your needs.",
  },
  {
    icon: "/icons/container.png",
    title: "Book an Inspection or Buy",
    description: "See it in person, or purchase directly.",
  },
  {
    icon: "/icons/inspect.png",
    title: "Choose Delivery",
    description: "Pick up yourself or have it delivered.",
  },
  {
    icon: "/icons/chat.png",
    title: "Receive Your Container",
    description: "Get your container, ready to use.",
  },
] as const;

export const products = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: index < 6 ? "Used Shipping Container" : "Big Shipping Container",
  spec:
    index < 6
      ? "Size: 20ft Standard   Condition: Used (Wind & Watertight)"
      : "40 FT (High Cube)   Terminal: Port Harcourt",
  price: "N5,000,000",
  image: `/images/product-${(index % 3) + 1}.png`,
}));

export const containerDetail = {
  id: 1,
  title: "Big Shipping Container",
  description:
    "Browse verified containers across our terminals, book a viewing, or order with delivery.",
  size: "40 FT (High Cube)",
  terminal: "Rumodara Rd, Port Harcourt, Rivers State",
  price: "N5,000,000",
  image: "/images/product-1.png",
  gallery: [
    "/images/product-1.png",
    "/images/product-2.png",
    "/images/product-3.png",
  ],
};

export const testimonials = [
  {
    id: 1,
    quote:
      "The way they handled the delivery and the condition of the container was amazing, highly recommended.",
    name: "Jonathan Tah",
    role: "C.E.O",
    images: ["/images/testimonial-1.png", "/images/testimonial-2.png"],
  },
  {
    id: 2,
    quote:
      "C-ZUCHI made sourcing containers across terminals straightforward. Transparent pricing and fast support.",
    name: "Jonathan Tah",
    role: "C.E.O",
    images: ["/images/testimonial-2.png", "/images/testimonial-1.png"],
  },
  {
    id: 3,
    quote:
      "From inspection booking to delivery, the entire process was smooth. We will definitely order again.",
    name: "Jonathan Tah",
    role: "C.E.O",
    images: ["/images/testimonial-1.png", "/images/testimonial-2.png"],
  },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Browse Containers", href: "/browse" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;

export const terminalAddress = "Rumodara Rd, Port Harcourt, Rivers State";
export const terminalPhone = "08012345678";

export const orders = [
  {
    id: "8989799900",
    date: "22/08/2021",
    paymentStatus: "Paid",
    deliveryStatus: "Pickup Scheduled",
    product: products[0],
    quantity: 1,
    total: "N5,000,000",
  },
  {
    id: "8989799901",
    date: "22/08/2021",
    paymentStatus: "Paid",
    deliveryStatus: "Pickup Scheduled",
    product: products[0],
    quantity: 1,
    total: "N5,000,000",
  },
];

export const inspections = [
  {
    id: "1",
    date: "22/08/2021",
    time: "4PM",
    terminal: "Port Harcourt",
    address: terminalAddress,
    product: products[0],
    quantity: 1,
    total: "N5,000,000",
  },
];

export const termsSections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using this platform, you agree to be bound by these Terms and Conditions. If you do not agree, do not use the platform.",
  },
  {
    title: "About the Platform",
    content:
      "This platform allows customers to browse, purchase, and book inspections for shipping containers. Some containers are stored at designated terminals managed by the company.",
  },
  {
    title: "Accounts",
    content:
      "You must register an account to place an order, book an inspection, or use the chat. You are responsible for keeping your login credentials secure. You must provide accurate and truthful information when registering. The company reserves the right to suspend or terminate accounts that violate these terms.",
  },
  {
    title: "Container Listings",
    content:
      "All container listings are subject to availability. Images and specifications are provided in good faith and are as accurate as possible. The company reserves the right to update or remove listings at any time.",
  },
  {
    title: "Inspection Bookings",
    content:
      "Booking an inspection does not constitute a purchase or reserve the container. Inspections are subject to terminal availability. The company will send a confirmation and invoice to the email provided. Customers are expected to arrive at the scheduled time. Rescheduling must be requested at least 24 hours in advance by contacting admin.",
  },
  {
    title: "Orders and Payment",
    content:
      "All payments are processed securely through Paystack. An order is confirmed only after a successful payment. The company will send a receipt to the email provided after payment is confirmed. Prices displayed are in local currency and are inclusive of applicable fees unless otherwise stated.",
  },
  {
    title: "Delivery",
    content:
      "Delivery fees are calculated based on distance from the terminal to the customer's address using the company's pricing logic. Delivery timelines are estimates and may vary. The company is not liable for delays caused by factors outside its control. For self-pickup, customers must present a valid ID and order confirmation at the terminal.",
  },
  {
    title: "Cancellations and Refunds",
    content:
      "Cancellation requests must be made by contacting admin via chat or email. Refund eligibility will be assessed on a case-by-case basis. Refunds, if approved, will be processed to the original payment method within a reasonable timeframe. Containers that have been delivered or collected are not eligible for returns unless there is a documented defect.",
  },
  {
    title: "Chat and Communication",
    content:
      "The chat feature is for legitimate customer enquiries only. Admin can only initiate replies after a customer starts the conversation. Abuse, harassment, or misuse of the chat system will result in account suspension.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this platform including images, text, logos, and design is the property of the company. You may not reproduce, distribute, or use any content without written permission.",
  },
  {
    title: "Limitation of Liability",
    content:
      "The company is not liable for indirect or consequential losses arising from use of the platform. The company's liability in any case is limited to the amount paid for the order in question.",
  },
  {
    title: "Changes to Terms",
    content:
      "The company reserves the right to update these terms at any time. Users will be notified of material changes. Continued use of the platform after changes are posted constitutes acceptance.",
  },
];

export const privacySections = [
  {
    title: "What Information We Collect",
    content:
      "We collect personal information you provide when registering or placing an order, including your name, email address, phone number, and delivery details. We also collect payment information processed securely through Paystack, booking information for inspections, and usage data when you interact with our platform.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to process orders and inspection bookings, send email notifications and receipts, calculate delivery costs, facilitate chat communication with our admin team, and comply with legal obligations.",
  },
  {
    title: "How We Share Your Information",
    content:
      "We do not sell your personal data. We only share information with essential service partners such as Paystack for payment processing, email providers for notifications, and hosting providers that help us operate the platform.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your data for as long as your account is active or as needed to provide services. We may also retain certain information to comply with legal requirements.",
  },
  {
    title: "Cookies",
    content:
      "We use cookies to maintain login sessions and understand how visitors use our site. You can control cookie settings through your browser preferences.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data. You may also withdraw consent for marketing communications at any time by contacting us.",
  },
  {
    title: "Security",
    content:
      "We use industry-standard HTTPS encryption to protect data in transit. Payment information is handled securely by Paystack and is never stored on our servers.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this privacy policy from time to time. Material changes will be communicated via email or a notice on our website. Continued use of the platform constitutes acceptance of the updated policy.",
  },
];

export const checkoutSteps = [
  "Cart",
  "Choose Option",
  "Details",
  "Payment",
  "Confirmation",
] as const;

export const formatNaira = (amount: number) =>
  `N${amount.toLocaleString("en-NG")}`;

export const pageSubtext =
  "Browse verified containers across our terminals, book a viewing, or order with delivery.";
