import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBottomSections from "@/components/PageBottomSections";
import PageHeroWithFeatures from "@/components/PageHeroWithFeatures";
import { howItWorksSteps } from "@/lib/data";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar activePath="/how-it-works" />
      <main>
        <PageHeroWithFeatures title="How It Works" featureItems={howItWorksSteps} />
        <div className="bg-white pt-28 sm:pt-32 lg:pt-36">
          <PageBottomSections />
        </div>
      </main>
      <Footer />
    </>
  );
}
