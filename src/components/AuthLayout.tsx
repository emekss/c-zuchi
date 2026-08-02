"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { testimonials } from "@/lib/data";

interface AuthLayoutProps {
  title: React.ReactNode;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerHref: string;
}

const inputClassName =
  "w-full rounded-lg border border-white/10 bg-[#3E4359] px-4 py-3.5 text-sm text-white placeholder:text-white/45 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export default function AuthLayout({
  title,
  children,
  footerText,
  footerLinkText,
  footerHref,
}: AuthLayoutProps) {
  return (
    <>
      <PageHero title={title} showSubtitle={false} variant="auth" />

      <section className="bg-navy py-12 sm:py-16">
        <div className="mx-auto w-full max-w-xl px-4 sm:px-6">
          {children}
          <p className="mt-6 text-center text-sm text-white/75">
            {footerText}{" "}
            <Link href={footerHref} className="font-semibold text-primary hover:underline">
              {footerLinkText}
            </Link>
          </p>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />
    </>
  );
}

export function AuthInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
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
      />
      {error && <span className="mt-1.5 block text-xs text-red-300">{error}</span>}
    </label>
  );
}

export { inputClassName };
