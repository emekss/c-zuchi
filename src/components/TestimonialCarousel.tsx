"use client";

import { useState } from "react";
import Image from "next/image";
import Carousel from "@/components/shared/Carousel";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  images: readonly string[];
}

interface TestimonialCarouselProps {
  testimonials: readonly Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const slides = testimonials.map((item) => ({
    id: item.id,
    image: item.images[0],
    alt: `Testimonial from ${item.name}`,
  }));

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            {current.images.map((image, index) => (
              <div
                key={`${current.id}-${index}`}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          <div className="relative min-h-[280px]">
            <Carousel
              slides={slides}
              interval={6000}
              onSlideChange={setActiveIndex}
              hideBackground
              showDots
              className="min-h-[280px]"
              dotClassName="relative mt-8 justify-start lg:absolute lg:bottom-0 lg:left-0 lg:mt-0"
            >
              <div className="relative z-10">
                <blockquote className="text-2xl font-semibold leading-snug text-navy sm:text-3xl lg:text-[2rem]">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {current.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-navy">{current.name}</p>
                    <p className="text-sm text-gray-500">{current.role}</p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
