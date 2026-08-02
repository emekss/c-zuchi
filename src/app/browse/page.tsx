import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBottomSections from "@/components/PageBottomSections";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function BrowsePage() {
  return (
    <>
      <Navbar activePath="/browse" />
      <main>
        <PageHero title="Browse Containers" />
        <section className="bg-white pb-16 pt-10 sm:pb-20">
          <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} variant="browse" />
              ))}
            </div>
          </div>
        </section>
        <PageBottomSections />
      </main>
      <Footer />
    </>
  );
}
