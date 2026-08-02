"use client";

import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";
import CheckoutProgress from "@/components/CheckoutProgress";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderSummary from "@/components/OrderSummary";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function CheckoutConfirmationPage() {
  const { user } = useAuth();
  const { items, cartCount, checkout, deliveryFee, clearCart } = useCart();

  const email = user?.email ?? "emekaokoh@gmail.com";
  const isPickup = checkout.deliveryMethod === "pickup";
  const isInspection = checkout.option === "inspection";

  return (
    <>
      <Navbar variant="solid" />
      <main className="min-h-screen bg-white pt-[72px]">
        <CheckoutProgress currentStep={4} cartCount={cartCount} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
            <OrderSummary
              items={items}
              deliveryFee={deliveryFee}
              title="Review Your Order"
              editHref="/checkout/details"
              editLabel="Edit Delivery Method"
            />

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Pay With Paystack</h2>

              <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center">
                <Image src="/icons/success.png" alt="" width={96} height={96} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-navy sm:text-3xl">
                Payment Successful!
              </h3>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
                A receipt has been sent to{" "}
                <Link href={`mailto:${email}`} className="text-primary hover:underline">
                  {email}
                </Link>
                .{" "}
                {isInspection
                  ? "Your inspection has been booked. Our team will confirm your appointment."
                  : isPickup
                    ? "Bring your order confirmation and a valid ID when you arrive at the terminal."
                    : "Our team will contact you to schedule delivery."}
              </p>

              <p className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-wide text-gray-400">
                <Lock className="h-3.5 w-3.5" />
                Secured by Paystack
              </p>

              <button
                type="button"
                onClick={clearCart}
                className="mt-8 text-sm font-semibold text-primary hover:underline"
              >
                Continue shopping
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
