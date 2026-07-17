import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/ProductGrid";
import QuoteForm from "@/components/QuoteForm";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";
import {
  featureItems,
  heroSlides,
  products,
  testimonials,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Navbar activePath="/" />
      <main>
        <HeroCarousel slides={heroSlides} featureItems={featureItems} />
        <ProductGrid products={products} />
        <QuoteForm />
        <TestimonialCarousel testimonials={testimonials} />
      </main>
      <Footer />
    </>
  );
}
