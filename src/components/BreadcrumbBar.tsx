import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbBarProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadcrumbBar({ items, className }: BreadcrumbBarProps) {
  return (
    <div className={cn("bg-navy py-3.5", className)}>
      <div className="mx-auto flex max-w-wide flex-wrap items-center gap-2 px-4 text-sm sm:px-6 lg:px-10">
        {items.map((item, index) => (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="h-4 w-4 text-primary" />}
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  index === items.length - 1
                    ? "font-medium text-primary"
                    : "text-white/80"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-primary">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
