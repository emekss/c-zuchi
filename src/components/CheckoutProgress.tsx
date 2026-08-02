import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { checkoutSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CheckoutProgressProps {
  currentStep: number;
  cartCount?: number;
}

export default function CheckoutProgress({
  currentStep,
  cartCount = 0,
}: CheckoutProgressProps) {
  return (
    <div className="bg-navy-light">
      <div className="mx-auto max-w-wide px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-2 rounded-xl bg-navy px-4 py-3.5 text-xs sm:gap-3 sm:px-6 sm:text-sm">
          {checkoutSteps.map((step, index) => {
            const isActive = index === currentStep;
            const label =
              index === 0 && cartCount > 0 ? `${step} (${cartCount})` : step;

            return (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 shrink-0 text-primary" />
                )}
                <span
                  className={cn(
                    "whitespace-nowrap font-medium",
                    isActive ? "text-primary" : "text-white/85"
                  )}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function DashboardTabs({
  active,
}: {
  active: "orders" | "inspections";
}) {
  return (
    <div className="bg-navy-light">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3 rounded-xl bg-navy px-4 py-3.5 text-sm sm:px-6 sm:text-base">
          <Link
            href="/orders"
            className={cn(
              "font-medium transition-colors",
              active === "orders" ? "text-primary" : "text-white/85 hover:text-white"
            )}
          >
            My Orders
          </Link>
          <ChevronRight className="h-4 w-4 text-primary" />
          <Link
            href="/inspections"
            className={cn(
              "font-medium transition-colors",
              active === "inspections"
                ? "text-primary"
                : "text-white/85 hover:text-white"
            )}
          >
            My Inspections
          </Link>
        </div>
      </div>
    </div>
  );
}
