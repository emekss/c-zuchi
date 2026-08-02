"use client";

import Carousel from "@/components/shared/Carousel";
import { heroSlides, pageSubtext } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  showSubtitle?: boolean;
  className?: string;
}

const heroShellClassName =
  "min-h-[460px] sm:min-h-[500px] lg:min-h-[540px]";

export default function PageHero({
  title,
  subtitle = pageSubtext,
  showSubtitle = true,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative", className)}>
      <Carousel
        slides={heroSlides}
        interval={6000}
        className={heroShellClassName}
        overlayClassName="bg-gradient-to-br from-navy/90 via-navy/60 to-navy/30"
        dotClassName={cn(
          "!bottom-auto left-1/2 -translate-x-1/2",
          showSubtitle ? "top-[62%] sm:top-[60%]" : "top-[56%] sm:top-[54%]"
        )}
      >
        <div
          className={cn(
            "relative z-10 flex flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-6 lg:px-10",
            heroShellClassName
          )}
        >
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {showSubtitle && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </Carousel>
    </section>
  );
}
