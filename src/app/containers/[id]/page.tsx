import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import BreadcrumbBar from "@/components/BreadcrumbBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBottomSections from "@/components/PageBottomSections";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import { containerDetail, products } from "@/lib/data";

export default function ContainerDetailPage() {
  const detail = containerDetail;
  const related = products.slice(0, 4);

  return (
    <>
      <Navbar activePath="/browse" />
      <main>
        <PageHero title="Shipping Containers" showSubtitle={false} />
        <BreadcrumbBar
          items={[
            { label: "Home", href: "/" },
            { label: "Browse Containers", href: "/browse" },
            { label: "Shipping containers" },
          ]}
        />

        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={detail.image}
                  alt={detail.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">{detail.title}</h2>
                <p className="mt-4 text-gray-500">{detail.description}</p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <SpecItem
                    icon="/icons/container.png"
                    label="Size"
                    value={detail.size}
                  />
                  <SpecItem
                    icon="/icons/location.png"
                    label="Terminal"
                    value={detail.terminal}
                  />
                </div>

                <p className="mt-8 text-2xl font-bold text-navy">
                  Price: {detail.price}
                </p>

                <AddToCartButton />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-navy">More Images</h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {detail.gallery.map((image, index) => (
                  <div
                    key={image}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl"
                  >
                    <Image src={image} alt={`Gallery ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-navy">You May Also Like</h3>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Button href="/browse" variant="outline-blue" className="w-full max-w-md sm:w-auto">
                  View All
                </Button>
              </div>
            </div>
          </div>
        </section>

        <PageBottomSections />
      </main>
      <Footer />
    </>
  );
}

function SpecItem({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
      <Image src={icon} alt="" width={24} height={24} className="mt-0.5 shrink-0" />
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">{label}</p>
        <p className="mt-1 text-sm font-semibold text-navy">{value}</p>
      </div>
    </div>
  );
}
