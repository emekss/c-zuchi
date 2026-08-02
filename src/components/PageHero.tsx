"use client";

import Carousel from "@/components/shared/Carousel";
import { heroSlides, pageSubtext } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({
  title,
  subtitle = pageSubtext,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative", className)}>
      <Carousel
        slides={heroSlides}
        interval={6000}
        className="min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]"
        overlayClassName="bg-gradient-to-br from-navy/90 via-navy/60 to-navy/30"
        dotClassName="bottom-6"
      >
        <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center px-4 pb-14 pt-28 text-center sm:min-h-[360px] sm:px-6 lg:min-h-[400px] lg:px-10">
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            {subtitle}
          </p>
        </div>
      </Carousel>
    </section>
  );
}
