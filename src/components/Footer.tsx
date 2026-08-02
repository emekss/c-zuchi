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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-8 lg:gap-y-10">
          <Link href="/" className="justify-self-start lg:row-start-1">
            <Image
              src="/icons/logo.png"
              alt="C-ZUCHI Global Service LTD"
              width={160}
              height={40}
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-start gap-x-5 gap-y-2 sm:gap-x-6 lg:col-start-2 lg:row-start-1 lg:justify-center">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="lg:col-start-3 lg:row-start-1 lg:justify-self-end">
            <Button href="/contact" className="w-full px-6 py-2.5 sm:w-auto">
              Contact Us
            </Button>
          </div>

          <p className="hidden text-sm text-white/70 lg:col-start-1 lg:row-start-2 lg:block">
            © C-ZUCHI Global Service LTD 2026
          </p>

          <div className="hidden lg:col-start-2 lg:row-start-2 lg:block" aria-hidden />

          <div className="flex items-center justify-between gap-5 lg:col-start-3 lg:row-start-2 lg:justify-self-end">
            <p className="text-sm text-white/70 lg:hidden">
              © C-ZUCHI Global Service LTD 2026
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="opacity-90 transition-opacity hover:opacity-100"
                >
                  <Image src={icon} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
