import Image from "next/image";
import Button from "@/components/ui/Button";

export interface Product {
  id: number;
  title: string;
  spec: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-bold text-navy sm:text-lg">{product.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
          {product.spec}
        </p>
        <p className="mt-3 text-xl font-bold text-primary sm:text-2xl">
          {product.price}
        </p>

        <div className="mt-auto flex flex-col gap-2.5 pt-5">
          <Button
            href={`/containers/${product.id}`}
            icon="/icons/cart.png"
            iconAlt=""
            className="w-full py-2.5"
          >
            Add to cart
          </Button>
          <Button
            href={`/containers/${product.id}`}
            variant="outline-blue"
            className="w-full py-2.5"
          >
            View more
          </Button>
        </div>
      </div>
    </article>
  );
}
