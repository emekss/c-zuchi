import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import { Product } from "@/lib/data";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Top Listings
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
            Browse verified containers across our terminals, book a viewing, or order
            with delivery.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Button
            href="/browse"
            variant="outline-blue"
            className="w-full max-w-md border-2 px-8 py-3 text-base sm:w-auto"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
