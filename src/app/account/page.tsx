"use client";

import { FormEvent, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

export default function AccountPage() {
  const { user, updateUser } = useAuth();
  const [fullName, setFullName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [password, setPassword] = useState(user?.password ?? "");
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    updateUser({ name: fullName, email, phone, password });
    setSaved(true);
  };

  return (
    <>
      <Navbar variant="solid" activePath="/account" />
      <main className="min-h-screen bg-white pt-[72px]">
        <div className="border-b border-gray-100 bg-white py-10">
          <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl">Account Information</h1>
          </div>
        </div>

        <section className="bg-navy py-12 sm:py-16">
          <div className="mx-auto w-full max-w-xl px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Full Name" value={fullName} onChange={setFullName} />
              <Field label="Email Address" type="email" value={email} onChange={setEmail} />
              <Field label="Phone / Mobile" type="tel" value={phone} onChange={setPhone} />
              <Field label="Password" type="text" value={password} onChange={setPassword} />
              {saved && (
                <p className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-white">
                  Your changes have been saved.
                </p>
              )}
              <Button type="submit" showArrow className="w-full py-3.5 text-base">
                Save Changes
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-[#3E4359] px-4 py-3.5 text-sm text-white placeholder:text-white/45 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </label>
  );
}
