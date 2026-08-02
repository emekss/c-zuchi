import QuoteForm from "@/components/QuoteForm";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { testimonials } from "@/lib/data";

export default function PageBottomSections() {
  return (
    <>
      <QuoteForm />
      <TestimonialCarousel testimonials={testimonials} />
    </>
  );
}
