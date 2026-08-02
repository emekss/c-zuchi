"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export default function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className="text-base font-bold text-navy sm:text-lg">
                {item.title}
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary">
                <ChevronUp
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    !isOpen && "rotate-180"
                  )}
                />
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-gray-100 px-5 pb-5 pt-4 sm:px-6">
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
