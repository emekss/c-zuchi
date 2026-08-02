"use client";

import { useRouter } from "next/navigation";
import { CreditCard, ArrowLeftRight, Building2, Hash, Lock } from "lucide-react";
import CheckoutProgress from "@/components/CheckoutProgress";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderSummary from "@/components/OrderSummary";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const paymentMethods = [
  { id: "card", label: "Card", icon: CreditCard },
  { id: "transfer", label: "Transfer", icon: ArrowLeftRight },
  { id: "bank", label: "Bank", icon: Building2 },
  { id: "ussd", label: "USSD", icon: Hash },
];

export default function CheckoutPaymentPage() {
  const router = useRouter();
  const { items, cartCount, checkout, setCheckout, deliveryFee } = useCart();

  if (items.length === 0) {
    router.replace("/cart");
    return null;
  }

  return (
    <>
      <Navbar variant="solid" />
      <main className="min-h-screen bg-white pt-[72px]">
        <CheckoutProgress currentStep={3} cartCount={cartCount} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
            <OrderSummary
              items={items}
              deliveryFee={deliveryFee}
              title="Review Your Order"
              editHref="/checkout/details"
              editLabel="Edit Delivery Method"
            />

            <div className="mt-12">
              <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
                Pay With Paystack
              </h2>

              <div className="mt-8 space-y-3">
                {paymentMethods.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setCheckout({ paymentMethod: id })}
                    className="flex w-full items-center justify-between rounded-xl border border-gray-200 px-5 py-4 transition-colors hover:border-primary/40"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="h-5 w-5 text-navy" />
                      <span className="font-medium text-navy">{label}</span>
                    </div>
                    <span
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full border-2",
                        checkout.paymentMethod === id
                          ? "border-primary bg-primary"
                          : "border-gray-300"
                      )}
                    >
                      {checkout.paymentMethod === id && (
                        <span className="h-2 w-2 rounded-full bg-white" />
                      )}
                    </span>
                  </button>
                ))}
              </div>

              <Button
                onClick={() => router.push("/checkout/confirmation")}
                className="mt-8 w-full py-3.5 text-base"
              >
                Continue
              </Button>

              <p className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-wide text-gray-400">
                <Lock className="h-3.5 w-3.5" />
                Secured by Paystack
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
