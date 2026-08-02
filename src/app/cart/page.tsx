"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/data";

export default function CartPage() {
  const router = useRouter();
  const { items, cartCount, removeFromCart, updateQuantity } = useCart();
  const recommendations = products.slice(0, 4);

  if (cartCount === 0) {
    return (
      <>
        <Navbar variant="solid" activePath="/cart" />
        <main className="min-h-screen bg-white pt-[72px]">
          <section className="py-16 sm:py-20">
            <div className="mx-auto flex max-w-lg flex-col items-center px-4 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image src="/icons/cart.png" alt="" width={40} height={40} />
              </div>
              <h1 className="text-3xl font-bold text-navy">Your cart is empty</h1>
              <p className="mt-3 text-gray-500">
                Browse verified containers across our terminals.
              </p>
              <Button href="/browse" className="mt-8 px-8 py-3">
                Browse Containers
              </Button>
            </div>
          </section>

          <Recommendations products={recommendations} />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar variant="solid" activePath="/cart" />
      <main className="min-h-screen bg-white pt-[72px]">
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl">Cart ({cartCount})</h1>

            {items.map((item) => (
              <div
                key={item.id}
                className="mt-8 flex flex-col gap-6 border-b border-gray-200 pb-8 lg:flex-row lg:items-start lg:justify-between"
              >
                <div className="flex flex-1 gap-5">
                  <div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-lg">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-bold text-navy">{item.title}</h2>
                    <p className="mt-2 text-sm text-gray-500">{item.spec.split("   ")[0]}</p>
                    <p className="text-sm text-gray-500">
                      Terminal: Port Harcourt
                    </p>
                    <p className="mt-2 text-sm font-medium text-red-500">6 units left</p>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-6 lg:flex-col lg:items-end">
                  <p className="text-2xl font-bold text-navy">{item.price}</p>
                  <div className="flex items-center gap-0 overflow-hidden rounded-md">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-10 w-10 items-center justify-center bg-navy text-white"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="flex h-10 w-12 items-center justify-center border-y border-gray-200 bg-white text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-10 w-10 items-center justify-center bg-primary text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Button
              onClick={() => router.push("/checkout")}
              className="mt-8 w-full py-3.5 text-base sm:max-w-md"
            >
              Proceed to Checkout
            </Button>
          </div>
        </section>

        <Recommendations products={recommendations} />
      </main>
      <Footer />
    </>
  );
}

function Recommendations({ products: items }: { products: typeof products }) {
  return (
    <section className="border-t border-gray-100 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">You May Also Like</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/browse" variant="outline-blue" className="w-full max-w-md sm:w-auto">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
