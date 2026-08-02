"use client";

import { FormEvent, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Button from "@/components/ui/Button";
import { pageSubtext, testimonials } from "@/lib/data";

const inputClassName =
  "w-full rounded-lg border border-white/10 bg-[#3E4359] px-4 py-3.5 text-sm text-white placeholder:text-white/45 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (name && email && message) setSubmitted(true);
  };

  return (
    <>
      <Navbar activePath="/contact" />
      <main>
        <PageHero title="Contact Us" />

        <section className="bg-navy py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Get In Touch.</h2>
              <p className="mt-4 text-sm text-white/70 sm:text-base">{pageSubtext}</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white">Name*</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Company Name"
                    className={inputClassName}
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white">Email Address*</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className={inputClassName}
                    required
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white">Send Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type Here..."
                  rows={6}
                  className={`${inputClassName} resize-none`}
                  required
                />
              </label>
              {submitted && (
                <p className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-white">
                  Thank you. Your message has been sent.
                </p>
              )}
              <Button type="submit" showArrow className="w-full py-3.5 text-base">
                Send Message
              </Button>
            </form>
          </div>
        </section>

        <TestimonialCarousel testimonials={testimonials} />
      </main>
      <Footer />
    </>
  );
}
