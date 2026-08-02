import Image from "next/image";
import Link from "next/link";
import { CartItem } from "@/context/CartContext";
import { formatNaira } from "@/lib/data";

interface OrderSummaryProps {
  items: CartItem[];
  showBackLink?: boolean;
  deliveryFee?: number;
  title?: string;
  editHref?: string;
  editLabel?: string;
}

const parsePrice = (price: string) =>
  Number(price.replace(/[^0-9]/g, "")) || 0;

export default function OrderSummary({
  items,
  showBackLink = false,
  deliveryFee = 0,
  title = "Order Summary",
  editHref,
  editLabel,
}: OrderSummaryProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const total = subtotal + deliveryFee;

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
        {showBackLink && (
          <Link
            href="/cart"
            className="shrink-0 rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            Back to cart
          </Link>
        )}
        {editHref && editLabel && (
          <Link
            href={editHref}
            className="shrink-0 rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            {editLabel}
          </Link>
        )}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-start"
        >
          <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold text-navy">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.spec.split("   ")[0]}</p>
            <p className="text-sm text-gray-500">
              Terminal: {item.spec.includes("Terminal:") ? item.spec.split("Terminal:")[1]?.trim() : "Port Harcourt"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-navy">{item.price}</p>
            <p className="mt-1 text-sm text-gray-500">{item.quantity}</p>
          </div>
        </div>
      ))}

      {deliveryFee > 0 && (
        <div className="flex items-center justify-between text-base text-navy">
          <span>Delivery Fee</span>
          <span className="font-semibold">{formatNaira(deliveryFee)}</span>
        </div>
      )}

      <div className="flex items-center justify-between rounded-lg bg-navy px-5 py-4 text-white">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-xl font-bold">{formatNaira(total)}</span>
      </div>
    </div>
  );
}
