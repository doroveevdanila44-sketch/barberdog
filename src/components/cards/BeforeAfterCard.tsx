import Image from "next/image";
import { beforeAfterLabels, type BeforeAfterWork } from "@/content/works";
import { aspectRatio, imagePropsFill } from "@/lib/image";

/**
 * Работа «до и после». Фотография — цельный кадр в оригинальных пропорциях,
 * где слева «до», справа «после»; подписи и разделитель накладываем сверху.
 */
export function BeforeAfterCard({
  work,
  sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 380px",
  priority = false,
}: {
  work: BeforeAfterWork;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure
      data-touch-hover=""
      className="lift shadow-card overflow-hidden rounded-[var(--radius-card-lg)] bg-white p-2"
    >
      <div
        className="relative w-full overflow-hidden rounded-[var(--radius-card)]"
        style={{ aspectRatio: aspectRatio(work.image) }}
      >
        <Image
          {...imagePropsFill(work.image)}
          alt={work.image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="zoom-inner object-cover"
        />

        {/* Тонкая линия по стыку кадров */}
        <span
          aria-hidden
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/70"
        />

        <span className="rounded-pill text-ink absolute top-3 left-3 bg-white/95 px-3 py-1 text-xs font-medium shadow-[0_4px_10px_-6px_rgba(17,19,23,0.5)]">
          {beforeAfterLabels.before}
        </span>
        <span className="rounded-pill bg-brand absolute top-3 right-3 px-3 py-1 text-xs font-medium text-white shadow-[0_4px_10px_-6px_rgba(216,35,47,0.8)]">
          {beforeAfterLabels.after}
        </span>
      </div>

      <figcaption className="flex items-baseline justify-between gap-3 px-3 py-3">
        <span className="font-display text-ink text-[15px] font-bold">
          {work.title}
        </span>
        <span className="text-muted text-sm">{work.pet}</span>
      </figcaption>
    </figure>
  );
}
