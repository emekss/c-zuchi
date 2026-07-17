"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activePath?: string;
}

export default function Navbar({ activePath = "/" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isOverHero = !isScrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-gray-200/80 bg-white/95 shadow-navbar backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-wide items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/icons/logo.png"
            alt="C-ZUCHI Global Service LTD"
            width={160}
            height={40}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activePath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : isOverHero
                      ? "text-white/90 hover:text-white"
                      : "text-gray-600 hover:text-navy"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className={cn(
              "rounded-md p-2 transition-colors",
              isOverHero ? "hover:bg-white/10" : "hover:bg-gray-100"
            )}
          >
            <Image
              src="/icons/cart.png"
              alt=""
              width={22}
              height={22}
              className={cn(isOverHero ? "" : "brightness-0")}
            />
          </Link>
          <Button
            href="/login"
            variant={isOverHero ? "outline" : "outline-blue"}
            className={cn(
              "px-4 py-2 text-sm",
              isOverHero ? "" : "!border-gray-300 !text-gray-700 hover:!bg-gray-50"
            )}
          >
            Log In
          </Button>
          <Button href="/signup" className="px-4 py-2 text-sm">
            Sign Up
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "rounded-md p-2 lg:hidden",
            isOverHero ? "text-white" : "text-navy"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-navy/95 backdrop-blur-sm lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => {
              const isActive = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium",
                    isActive ? "text-primary" : "text-white/90"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
              <Button href="/login" variant="outline" className="w-full">
                Log In
              </Button>
              <Button href="/signup" className="w-full">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
