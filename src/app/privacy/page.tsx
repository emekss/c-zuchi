import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { privacySections } from "@/lib/data";

export default function PrivacyPage() {
  return (
    <>
      <Navbar activePath="/privacy" />
      <main className="pt-[72px]">
        <PageHero title="Privacy Policy" />
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
            <Accordion items={privacySections} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
