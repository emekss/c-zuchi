"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Phone, Truck, HandHelping } from "lucide-react";
import CheckoutProgress from "@/components/CheckoutProgress";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderSummary from "@/components/OrderSummary";
import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { terminalAddress, terminalPhone } from "@/lib/data";
import { cn } from "@/lib/utils";

const inputClassName =
  "w-full rounded-lg border border-white/10 bg-[#3E4359] px-4 py-3.5 text-sm text-white placeholder:text-white/45 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export default function CheckoutDetailsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { items, cartCount, checkout, setCheckout } = useCart();
  const [fullName, setFullName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");

  if (items.length === 0) {
    router.replace("/cart");
    return null;
  }

  const handleContinue = (event?: FormEvent) => {
    event?.preventDefault();
    if (checkout.option === "inspection") {
      setCheckout({ inspectionDate: date, inspectionTime: time });
    } else {
      setCheckout({ deliveryAddress: address });
    }
    router.push("/checkout/payment");
  };

  return (
    <>
      <Navbar variant="solid" />
      <main className="min-h-screen bg-white pt-[72px]">
        <CheckoutProgress currentStep={2} cartCount={cartCount} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
            <OrderSummary items={items} showBackLink />

            {checkout.option === "pay" ? (
              <div className="mt-12">
                <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
                  Choose Delivery Method
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <DeliveryOption
                    selected={checkout.deliveryMethod === "pickup"}
                    onClick={() => setCheckout({ deliveryMethod: "pickup" })}
                    icon={HandHelping}
                    title="Self Pickup"
                    description="No delivery cost. Pick up directly from the terminal."
                  />
                  <DeliveryOption
                    selected={checkout.deliveryMethod === "delivery"}
                    onClick={() => setCheckout({ deliveryMethod: "delivery" })}
                    icon={Truck}
                    title="Company Delivery"
                    description="We deliver to your address. Cost calculated based on distance."
                  />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl bg-gray-100 p-5 sm:grid-cols-2">
                  <InfoBlock icon={MapPin} label="Terminal Address" value={terminalAddress} />
                  <InfoBlock icon={Phone} label="Contact Number" value={terminalPhone} />
                </div>

                {checkout.deliveryMethod === "delivery" && (
                  <label className="mt-6 block">
                    <span className="mb-2 block text-sm font-medium text-navy">
                      Delivery Address*
                    </span>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your delivery address"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </label>
                )}

                <Button onClick={handleContinue} className="mt-8 w-full py-3.5 text-base">
                  Continue
                </Button>
              </div>
            ) : (
              <div className="mt-12 bg-navy px-4 py-10 sm:rounded-xl sm:px-8">
                <form onSubmit={handleContinue} className="space-y-5">
                  <Field label="Full Name*" value={fullName} onChange={setFullName} placeholder="Enter Company Name" />
                  <Field label="Email Address*" type="email" value={email} onChange={setEmail} placeholder="Enter Email Address" />
                  <Field label="Phone / Mobile*" type="tel" value={phone} onChange={setPhone} placeholder="Enter Phone Number" />
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Preferred Date*" value={date} onChange={setDate} placeholder="Enter Date" />
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-white">Preferred Time*</span>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className={inputClassName}
                        required
                      >
                        <option value="" className="text-navy">Choose Time</option>
                        <option value="9AM" className="text-navy">9AM</option>
                        <option value="12PM" className="text-navy">12PM</option>
                        <option value="4PM" className="text-navy">4PM</option>
                      </select>
                    </label>
                  </div>
                  <Button type="submit" className="w-full py-3.5 text-base">
                    Continue
                  </Button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DeliveryOption({
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
        <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2", selected ? "border-primary bg-primary" : "border-primary")}>
          {selected && <span className="h-2 w-2 rounded-full bg-white" />}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </button>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <div>
        <p className="text-sm font-semibold text-navy">{label}</p>
        <p className="mt-1 text-sm text-gray-500">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClassName}
        required
      />
    </label>
  );
}
