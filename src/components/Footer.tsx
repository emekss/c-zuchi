import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { footerLinks } from "@/lib/data";

const socialLinks = [
  { label: "X", href: "https://x.com", icon: "/icons/x.png" },
  { label: "TikTok", href: "https://tiktok.com", icon: "/icons/tiktok.png" },
  { label: "Facebook", href: "https://facebook.com", icon: "/icons/facebook.png" },
  { label: "Instagram", href: "https://instagram.com", icon: "/icons/instagram.png" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-10 lg:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/icons/logo.png"
              alt="C-ZUCHI Global Service LTD"
              width={160}
              height={40}
              className="h-9 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button href="/contact" className="w-full shrink-0 sm:w-auto">
            Contact Us
          </Button>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            © C-ZUCHI Global Service LTD 2026
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-primary"
              >
                <Image src={icon} alt="" width={16} height={16} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
