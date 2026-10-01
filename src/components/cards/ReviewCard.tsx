import { IconQuote } from "@/components/icons";
import { reviewsSource, type Review } from "@/content/reviews";
import { salon } from "@/content/salon";

/**
 * Карточка отзыва целиком кликабельна и ведёт на вкладку отзывов в 2ГИС —
 * так читатель может проверить первоисточник, а не верить нам на слово.
 */
export function ReviewCard({ review }: { review: Review }) {
  return (
    <a
      href={reviewsSource.url}
      target="_blank"
      rel="noopener noreferrer"
      data-touch-hover=""
      aria-label={`Отзыв клиента ${review.author} — читать на ${salon.rating.source}, откроется в новой вкладке`}
      className="lift bg-cream flex h-full cursor-pointer flex-col rounded-[var(--radius-card-lg)] p-6 lg:p-7"
    >
      <IconQuote className="text-brand h-5 w-6" />
      <p className="text-ink mt-4 flex-1 text-[15px] leading-relaxed">
        {review.text}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span
          aria-hidden
          className="rounded-pill bg-brand-soft font-display text-brand flex h-11 w-11 shrink-0 items-center justify-center text-lg font-bold"
        >
          {review.author.charAt(0)}
        </span>
        <span className="leading-tight">
          <span className="font-display text-ink block text-[15px] font-bold">
            {review.author}
          </span>
          <span className="text-muted block text-sm">{review.pet}</span>
        </span>
      </div>
    </a>
  );
}
