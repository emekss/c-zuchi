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

export const products = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: "Big Shipping Container",
  spec: "40 FT (High Cube)   Terminal: Port Harcourt",
  price: "N5,000,000",
  image: `/images/product-${(index % 3) + 1}.png`,
}));

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
