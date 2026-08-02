"use client";

import { useState } from "react";
import Carousel from "@/components/shared/Carousel";
import FeatureStrip, { FeatureItem } from "@/components/FeatureStrip";
import { heroSlides, pageSubtext } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PageHeroWithFeaturesProps {
  title: string;
  subtitle?: string;
  featureItems: readonly FeatureItem[];
  className?: string;
}

const heroShellClassName =
  "min-h-[680px] sm:min-h-[720px] lg:min-h-[780px]";

export default function PageHeroWithFeatures({
  title,
  subtitle = pageSubtext,
  featureItems,
  className,
}: PageHeroWithFeaturesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={cn("relative", className)}>
      <Carousel
        slides={heroSlides}
        interval={6000}
        className={heroShellClassName}
        overlayClassName="bg-gradient-to-br from-navy/90 via-navy/55 to-navy/20"
        showDots={false}
        controlledIndex={activeIndex}
        onControlledIndexChange={setActiveIndex}
      >
        <div
          className={cn(
            "relative z-10 flex flex-col items-center justify-center px-4 pb-40 pt-28 text-center sm:px-6 sm:pb-44 sm:pt-32 lg:px-10 lg:pb-48",
            heroShellClassName
          )}
        >
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            {subtitle}
          </p>

          <div className="mt-6 flex items-center gap-2.5 sm:mt-8">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "h-3 w-3 bg-brand"
                    : "h-2.5 w-2.5 bg-[#1a3568] hover:bg-[#243f75]"
                )}
              />
            ))}
          </div>
        </div>
      </Carousel>

      <FeatureStrip items={featureItems} />
    </section>
  );
}
