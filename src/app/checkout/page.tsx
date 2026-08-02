"use client";

import { useRouter } from "next/navigation";
import { Package, ScanSearch } from "lucide-react";
import CheckoutProgress from "@/components/CheckoutProgress";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderSummary from "@/components/OrderSummary";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function CheckoutChoosePage() {
  const router = useRouter();
  const { items, cartCount, checkout, setCheckout } = useCart();

  if (items.length === 0) {
    router.replace("/cart");
    return null;
  }

  return (
    <>
      <Navbar variant="solid" />
      <main className="min-h-screen bg-white pt-[72px]">
        <CheckoutProgress currentStep={1} cartCount={cartCount} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
            <OrderSummary items={items} showBackLink />

            <div className="mt-12">
              <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
                How Would You Like To Proceed?
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <OptionCard
                  selected={checkout.option === "pay"}
                  onClick={() => setCheckout({ option: "pay" })}
                  icon={Package}
                  title="Pay Immediately"
                  description="Buy now and choose your delivery option."
                />
                <OptionCard
                  selected={checkout.option === "inspection"}
                  onClick={() => setCheckout({ option: "inspection" })}
                  icon={ScanSearch}
                  title="Book an Inspection"
                  description="See the container in person before you commit."
                />
              </div>

              <Button
                onClick={() => router.push("/checkout/details")}
                className="mt-8 w-full py-3.5 text-base"
              >
                Continue
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function OptionCard({
  selected,
  onClick,
  icon: Icon,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl border p-5 text-left transition-colors",
        selected ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/40"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <Icon className="h-6 w-6 shrink-0 text-primary" />
        <span
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
            selected ? "border-primary bg-primary" : "border-primary"
          )}
        >
          {selected && <span className="h-2 w-2 rounded-full bg-white" />}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </button>
  );
}
