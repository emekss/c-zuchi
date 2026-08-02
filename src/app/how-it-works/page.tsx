import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBottomSections from "@/components/PageBottomSections";
import PageHero from "@/components/PageHero";
import FeatureStrip from "@/components/FeatureStrip";
import { howItWorksSteps } from "@/lib/data";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar activePath="/how-it-works" />
      <main>
        <section className="relative">
          <PageHero title="How It Works" className="pb-16" />
          <FeatureStrip items={howItWorksSteps} />
        </section>
        <div className="h-20 bg-white" />
        <PageBottomSections />
      </main>
      <Footer />
    </>
  );
}
