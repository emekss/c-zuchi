import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-blue" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  iconAlt?: string;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover border border-transparent",
  secondary:
    "bg-transparent text-white border border-white hover:bg-white/10",
  outline:
    "bg-transparent text-white border border-white hover:bg-white/10",
  "outline-blue":
    "bg-transparent text-primary border border-primary hover:bg-primary/5",
  ghost: "bg-transparent text-white hover:bg-white/10 border border-transparent",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  icon,
  iconAlt = "",
  showArrow = false,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && (
        <Image src={icon} alt={iconAlt} width={18} height={18} className="shrink-0" />
      )}
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
