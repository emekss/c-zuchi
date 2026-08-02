import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { termsSections } from "@/lib/data";

export default function TermsPage() {
  return (
    <>
      <Navbar activePath="/terms" />
      <main>
        <PageHero title="Terms & Conditions" showSubtitle={false} />
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
            <Accordion items={termsSections} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
