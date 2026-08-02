"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  variant?: "home" | "browse";
}

export default function ProductCard({
  product,
  variant = "home",
}: ProductCardProps) {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
  };

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
          <button
            type="button"
            onClick={handleAddToCart}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            <Image src="/icons/cart.png" alt="" width={18} height={18} />
            Add to cart
          </button>
          <Button
            href={`/containers/${product.id}`}
            variant="outline-blue"
            className="w-full py-2.5"
          >
            {variant === "browse" ? "View Details" : "View more"}
          </Button>
        </div>
      </div>
    </article>
  );
}
