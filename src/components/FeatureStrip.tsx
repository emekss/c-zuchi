import { cn } from "@/lib/utils";

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeatureStripProps {
  items: readonly FeatureItem[];
  className?: string;
}

function FeatureIcon({ src }: { src: string }) {
  return (
    <span
      aria-hidden
      className="inline-block h-9 w-9 shrink-0 bg-brand"
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export default function FeatureStrip({ items, className }: FeatureStripProps) {
  return (
    <div
      className={cn(
        "relative z-20 mx-auto w-full max-w-wide translate-y-1/2 px-4 sm:px-6 lg:px-10",
        className
      )}
    >
      <div className="rounded-2xl border border-gray-100 bg-white px-6 py-10 shadow-card sm:px-10 sm:py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <FeatureIcon src={item.icon} />
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold leading-snug text-navy sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
