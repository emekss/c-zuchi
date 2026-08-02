"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CarouselSlide {
  id: string | number;
  image: string;
  alt: string;
}

interface CarouselProps {
  slides: readonly CarouselSlide[];
  interval?: number;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
  showDots?: boolean;
  dotClassName?: string;
  activeDotClassName?: string;
  inactiveDotClassName?: string;
  onSlideChange?: (index: number) => void;
  hideBackground?: boolean;
  controlledIndex?: number;
  onControlledIndexChange?: (index: number) => void;
}

export default function Carousel({
  slides,
  interval = 5500,
  className,
  imageClassName,
  overlayClassName,
  children,
  showDots = true,
  dotClassName,
  activeDotClassName,
  inactiveDotClassName,
  onSlideChange,
  hideBackground = false,
  controlledIndex,
  onControlledIndexChange,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const isControlled = controlledIndex !== undefined;
  const activeIndex = isControlled ? controlledIndex : currentIndex;

  const goToSlide = useCallback(
    (index: number) => {
      if (isControlled) {
        onControlledIndexChange?.(index);
      } else {
        setCurrentIndex(index);
      }
      onSlideChange?.(index);
    },
    [isControlled, onControlledIndexChange, onSlideChange]
  );

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      const next = (activeIndex + 1) % slides.length;
      goToSlide(next);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, isPaused, slides.length, activeIndex, goToSlide]);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {!hideBackground && (
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={slides[activeIndex].id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-cover bg-center bg-no-repeat",
                  imageClassName
                )}
                style={{ backgroundImage: `url(${slides[activeIndex].image})` }}
                role="img"
                aria-label={slides[activeIndex].alt}
              />
              {overlayClassName && (
                <div className={cn("absolute inset-0", overlayClassName)} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {children}

      {showDots && slides.length > 1 && (
        <div
          className={cn(
            "absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2.5",
            dotClassName
          )}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-all duration-300",
                index === activeIndex
                  ? cn("bg-primary scale-110", activeDotClassName)
                  : cn("bg-white/40 hover:bg-white/60", inactiveDotClassName)
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
