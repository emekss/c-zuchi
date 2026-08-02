"use client";

import Image from "next/image";
import { DashboardTabs } from "@/components/CheckoutProgress";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import { inspections } from "@/lib/data";

export default function InspectionsPage() {
  const hasInspections = inspections.length > 0;

  return (
    <>
      <Navbar variant="solid" activePath="/inspections" />
      <main className="min-h-screen bg-white pt-[72px]">
        <DashboardTabs active="inspections" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl">
              My Inspections ({inspections.length})
            </h1>

            {hasInspections ? (
              <div className="mt-8 space-y-6">
                {inspections.map((inspection) => (
                  <div
                    key={inspection.id}
                    className="overflow-hidden rounded-xl bg-gray-100 p-5 sm:p-6"
                  >
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <p className="text-sm font-bold text-navy">Date: {inspection.date}</p>
                      <p className="text-sm font-bold text-navy sm:text-right">
                        Time: {inspection.time}
                      </p>
                      <p className="text-sm text-navy">Terminal: {inspection.terminal}</p>
                      <p className="text-sm text-navy sm:text-right">
                        Address: {inspection.address}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-col gap-4 border-t border-gray-200 pt-5 sm:flex-row sm:items-center">
                      <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={inspection.product.image}
                          alt={inspection.product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="font-bold text-navy">{inspection.product.title}</h2>
                        <p className="text-sm text-gray-500">40 FT (High Cube)</p>
                        <p className="text-sm text-gray-500">Terminal: Port Harcourt</p>
                      </div>
                      <p className="text-sm font-medium text-navy">{inspection.quantity}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
                      <span className="font-semibold text-navy">Total</span>
                      <span className="text-xl font-bold text-navy">{inspection.total}</span>
                    </div>

                    <Button className="mt-5 w-full py-3">Download Invoice</Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-8 flex flex-col items-center rounded-xl bg-gray-100 px-6 py-16 text-center">
                <Image
                  src="/icons/inspect.png"
                  alt=""
                  width={64}
                  height={64}
                  className="mb-6"
                />
                <h2 className="text-xl font-bold text-navy">No inspections booked yet</h2>
                <Button href="/checkout" className="mt-6 px-8 py-3">
                  Book an Inspection
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
