"use client";

import { useState } from "react";
import Carousel from "@/components/shared/Carousel";
import { heroSlides, pageSubtext } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  showSubtitle?: boolean;
  variant?: "default" | "auth";
  className?: string;
}

const variantStyles = {
  default: {
    shell: "min-h-[460px] sm:min-h-[500px] lg:min-h-[540px]",
    heading:
      "max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]",
    dots: "mt-6 sm:mt-8",
  },
  auth: {
    shell: "min-h-[520px] sm:min-h-[560px] lg:min-h-[600px]",
    heading:
      "max-w-[18rem] text-[2.625rem] font-bold leading-[1.12] tracking-tight sm:max-w-none sm:text-5xl sm:leading-[1.1] lg:text-[3.75rem]",
    dots: "mt-8 sm:mt-10",
  },
} as const;

export default function PageHero({
  title,
  subtitle = pageSubtext,
  showSubtitle = true,
  variant = "default",
  className,
}: PageHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const styles = variantStyles[variant];

  return (
    <section className={cn("relative", className)}>
      <Carousel
        slides={heroSlides}
        interval={6000}
        className={styles.shell}
        overlayClassName="bg-gradient-to-br from-navy/90 via-navy/65 to-navy/35"
        showDots={false}
        controlledIndex={activeIndex}
        onControlledIndexChange={setActiveIndex}
      >
        <div
          className={cn(
            "relative z-10 flex flex-col items-center justify-center px-4 pb-20 pt-28 text-center sm:px-6 lg:px-10",
            styles.shell
          )}
        >
          <h1 className={cn("text-balance text-white", styles.heading)}>{title}</h1>

          {showSubtitle && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              {subtitle}
            </p>
          )}

          <div className={cn("flex items-center gap-2.5", styles.dots)}>
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "h-3 w-3 bg-primary"
                    : "h-2.5 w-2.5 bg-primary/30 hover:bg-primary/45"
                )}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
