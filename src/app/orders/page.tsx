import Image from "next/image";
import { DashboardTabs } from "@/components/CheckoutProgress";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { orders } from "@/lib/data";

export default function OrdersPage() {
  return (
    <>
      <Navbar variant="solid" activePath="/orders" />
      <main className="min-h-screen bg-white pt-[72px]">
        <DashboardTabs active="orders" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl">
              My Orders ({orders.length})
            </h1>

            <div className="mt-8 space-y-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="overflow-hidden rounded-xl bg-gray-100 p-5 sm:p-6"
                >
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <p className="text-sm font-bold text-navy">Order No: {order.id}</p>
                    <p className="text-sm font-bold text-navy sm:text-right">
                      Date: {order.date}
                    </p>
                    <p className="text-sm text-navy">
                      Payment status: {order.paymentStatus}
                    </p>
                    <p className="text-sm text-navy sm:text-right">
                      Delivery Status: {order.deliveryStatus}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-col gap-4 border-t border-gray-200 pt-5 sm:flex-row sm:items-center">
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={order.product.image}
                        alt={order.product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-bold text-navy">{order.product.title}</h2>
                      <p className="text-sm text-gray-500">40 FT (High Cube)</p>
                      <p className="text-sm text-gray-500">Terminal: Port Harcourt</p>
                    </div>
                    <p className="text-sm font-medium text-navy">{order.quantity}</p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
                    <span className="font-semibold text-navy">Total</span>
                    <span className="text-xl font-bold text-navy">{order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
