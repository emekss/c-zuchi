"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { containerDetail } from "@/lib/data";

export default function AddToCartButton() {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({
      id: containerDetail.id,
      title: containerDetail.title,
      spec: `40 FT (High Cube)   Terminal: Port Harcourt`,
      price: containerDetail.price,
      image: containerDetail.image,
    });
    router.push("/cart");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover sm:w-auto"
    >
      <Image src="/icons/cart.png" alt="" width={18} height={18} />
      Add to cart
    </button>
  );
}
