"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Headphones,
  ListOrdered,
  LogOut,
  Menu,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activePath?: string;
  variant?: "hero" | "solid";
}

export default function Navbar({
  activePath = "/",
  variant = "hero",
}: NavbarProps) {
  const { user, isLoggedIn, logout } = useAuth();
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isSolid = variant === "solid";

  useEffect(() => {
    if (isSolid) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSolid]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isOverHero = !isSolid && !isScrolled;
  const linkClass = (isActive: boolean) =>
    cn(
      "text-sm font-medium transition-colors",
      isActive
        ? "text-primary"
        : isOverHero || isSolid
          ? "text-white/90 hover:text-white"
          : "text-gray-600 hover:text-navy"
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isSolid
          ? "bg-navy shadow-navbar"
          : isScrolled
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(activePath === link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className={cn(
              "relative rounded-md p-2 transition-colors",
              isOverHero || isSolid ? "hover:bg-white/10" : "hover:bg-gray-100"
            )}
          >
            <Image
              src="/icons/cart.png"
              alt=""
              width={22}
              height={22}
              className={cn(isOverHero || isSolid ? "" : "brightness-0")}
            />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {isLoggedIn && user ? (
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-white transition-colors hover:bg-white/10"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10">
                  <User className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{user.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card">
                  <div className="p-2">
                    <MenuLink href="/account" icon={User} onClick={() => setMenuOpen(false)}>
                      Account Information
                    </MenuLink>
                    <MenuLink href="/browse" icon={ShoppingBag} onClick={() => setMenuOpen(false)} highlight>
                      Place Order
                    </MenuLink>
                    <MenuLink href="/orders" icon={ListOrdered} onClick={() => setMenuOpen(false)} badge={3}>
                      My Orders
                    </MenuLink>
                    <MenuLink href="/contact" icon={Headphones} onClick={() => setMenuOpen(false)}>
                      Contact Us
                    </MenuLink>
                  </div>
                  <div className="space-y-2 border-t border-gray-100 p-3">
                    <Button href="/contact" icon="/icons/chat.png" className="w-full py-2.5">
                      Live Chat
                    </Button>
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-md border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                    >
                      <LogOut className="h-4 w-4" />
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button
                href="/login"
                variant={isOverHero || isSolid ? "outline" : "outline-blue"}
                className={cn(
                  "px-4 py-2 text-sm",
                  !(isOverHero || isSolid) &&
                    "!border-gray-300 !text-gray-700 hover:!bg-gray-50"
                )}
              >
                Log In
              </Button>
              <Button href="/signup" className="px-4 py-2 text-sm">
                Sign Up
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          className={cn(
            "rounded-md p-2 lg:hidden",
            isOverHero || isSolid ? "text-white" : "text-navy"
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium",
                  activePath === link.href ? "text-primary" : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
              <Link href="/cart" onClick={() => setMobileOpen(false)} className="text-white/90">
                Cart {cartCount > 0 ? `(${cartCount})` : ""}
              </Link>
              {isLoggedIn ? (
                <>
                  <Link href="/account" onClick={() => setMobileOpen(false)} className="text-white/90">
                    Account
                  </Link>
                  <Link href="/orders" onClick={() => setMobileOpen(false)} className="text-white/90">
                    My Orders
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="text-left text-white/90"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Button href="/login" variant="outline" className="w-full">
                    Log In
                  </Button>
                  <Button href="/signup" className="w-full">
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuLink({
  href,
  icon: Icon,
  children,
  onClick,
  highlight,
  badge,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  onClick: () => void;
  highlight?: boolean;
  badge?: number;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gray-50",
        highlight && "bg-primary/10 text-primary"
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span className="flex-1">{children}</span>
      {badge !== undefined && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold text-white">
          {badge}
        </span>
      )}
    </Link>
  );
}
