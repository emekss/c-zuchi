import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { footerLinks } from "@/lib/data";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.5 3h-2.2c.2 1.2.9 2.3 2 3v2.1c-1.5-.1-2.9-.6-4.1-1.4v6.8c0 3.4-2.8 6.2-6.2 6.2S0 17.9 0 14.5 2.8 8.3 6.2 8.3c.4 0 .8 0 1.2.1v2.3c-.4-.1-.8-.2-1.2-.2-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V3z" />
      <path d="M22 7.5c-1.2.9-2.7 1.4-4.2 1.5v2.1c1.5-.1 3-.6 4.2-1.5V7.5z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.53 3H21l-6.88 7.86L22 21h-6.2l-4.85-6.34L5.2 21H2l7.36-8.4L2 3h6.35l4.38 5.78L17.53 3zm-1.09 16.2h1.72L8.7 4.67H6.86l9.58 14.53z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 9.5V7.8c0-.8.6-1.3 1.3-1.3h1.7V3h-2.3c-2.8 0-4.7 1.7-4.7 4.8v1.7H7v3.5h2.5V21h4V13h3l.5-3.5H13.5z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zM17.8 7.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </svg>
  );
}

const socialLinks = [
  { label: "X", href: "https://x.com", icon: XIcon },
  { label: "TikTok", href: "https://tiktok.com", icon: TikTokIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
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
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
