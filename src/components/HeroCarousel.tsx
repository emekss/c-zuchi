"use client";

import Image from "next/image";
import Carousel, { CarouselSlide } from "@/components/shared/Carousel";
import FeatureStrip, { FeatureItem } from "@/components/FeatureStrip";
import Button from "@/components/ui/Button";

interface HeroCarouselProps {
  slides: readonly CarouselSlide[];
  featureItems: readonly FeatureItem[];
}

export default function HeroCarousel({ slides, featureItems }: HeroCarouselProps) {
  return (
    <section className="relative">
      <Carousel
        slides={slides}
        interval={5500}
        className="min-h-[680px] sm:min-h-[720px] lg:min-h-[780px]"
        overlayClassName="bg-gradient-to-br from-navy/90 via-navy/55 to-navy/20"
        dotClassName="bottom-28 sm:bottom-32 lg:bottom-36"
      >
        <div className="relative z-10 flex min-h-[680px] flex-col items-center justify-center px-4 pb-32 pt-28 text-center sm:min-h-[720px] sm:px-6 sm:pb-36 sm:pt-32 lg:min-h-[780px] lg:px-10 lg:pb-40">
          <form
            className="mb-8 flex w-full max-w-3xl items-center rounded-full bg-white p-1.5 shadow-lg sm:mb-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 pl-4 sm:pl-5">
              <Image
                src="/icons/search.png"
                alt=""
                width={20}
                height={20}
                className="shrink-0"
              />
              <input
                type="search"
                placeholder="Search by size, type, or location"
                className="w-full bg-transparent py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-base"
              />
            </div>
            <Button type="submit" className="shrink-0 rounded-full px-5 py-2.5 sm:px-7">
              Search
            </Button>
          </form>

          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[4.25rem]">
            Your Trusted Shipping Container Plug.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Browse verified containers across our terminals, book a viewing, or order
            with delivery.
          </p>

          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <Button
              href="/browse"
              icon="/icons/container.png"
              iconAlt=""
              className="w-full sm:w-auto"
            >
              Browse Containers
            </Button>
            <Button
              href="/inspection"
              variant="outline"
              icon="/icons/inspect.png"
              iconAlt=""
              className="w-full sm:w-auto"
            >
              Book an Inspection
            </Button>
          </div>
        </div>
      </Carousel>

      <FeatureStrip items={featureItems} />
    </section>
  );
}
