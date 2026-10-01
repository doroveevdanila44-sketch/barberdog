import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import type { Service } from "@/content/services";
import { aspectRatio, imagePropsFill } from "@/lib/image";

export function ServiceCard({
  service,
  showPrice = false,
  sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 280px",
}: {
  service: Service;
  showPrice?: boolean;
  sizes?: string;
}) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      data-touch-hover=""
      className="lift shadow-card flex h-full flex-col overflow-hidden rounded-[var(--radius-card-lg)] bg-white"
    >
      {/* Фото в оригинальных пропорциях — без кадрирования */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: aspectRatio(service.image) }}
      >
        <Image
          {...imagePropsFill(service.image)}
          alt={service.image.alt}
          fill
          sizes={sizes}
          className="zoom-inner object-cover"
        />
      </div>

      <div className="relative -mt-9 flex flex-1 flex-col rounded-t-[var(--radius-card)] bg-white px-5 pt-9 pb-6">
        <span className="rounded-pill border-brand/30 text-brand absolute -top-6 left-5 flex h-12 w-12 items-center justify-center border bg-white shadow-[0_8px_18px_-12px_rgba(200,36,43,0.9)]">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>

        <h3 className="font-display text-ink text-[17px] font-bold">
          {service.title}
        </h3>
        <p className="text-muted mt-2 text-sm leading-relaxed">
          {service.cardText}
        </p>

        {showPrice ? (
          <span className="rounded-pill bg-brand-soft text-brand mt-4 inline-flex w-fit px-4 py-1.5 text-sm font-medium">
            {service.priceFrom ?? "цена по запросу"}
          </span>
        ) : null}
      </div>
    </Link>
  );
}
