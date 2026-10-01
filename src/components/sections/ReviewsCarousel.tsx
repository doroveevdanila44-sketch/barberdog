"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@/components/icons";
import { ReviewCard } from "@/components/cards/ReviewCard";
import type { Review } from "@/content/reviews";

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return;

    const cardWidth = first.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const perView = Math.max(
      1,
      Math.round((track.clientWidth + gap) / (cardWidth + gap)),
    );
    setPages(Math.max(1, reviews.length - perView + 1));

    const step = cardWidth + gap;
    setActive(step > 0 ? Math.round(track.scrollLeft / step) : 0);
  }, [reviews.length]);

  useEffect(() => {
    measure();
    const track = trackRef.current;
    if (!track) return;

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [measure]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const clampedActive = Math.min(active, pages - 1);

  return (
    <div>
      <div className="relative lg:px-14">
        <button
          type="button"
          onClick={() => scrollToIndex(Math.max(0, clampedActive - 1))}
          disabled={clampedActive === 0}
          aria-label="Предыдущие отзывы"
          data-touch-hover=""
          className="btn-motion rounded-pill bg-blue shadow-card absolute top-1/2 left-0 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-white disabled:pointer-events-none disabled:opacity-35 lg:flex"
        >
          <IconChevronLeft className="h-5 w-5" />
        </button>

        <ul
          ref={trackRef}
          onScroll={measure}
          className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 py-2"
          aria-label="Отзывы клиентов"
        >
          {reviews.map((review) => (
            <li
              key={review.id}
              className="w-[84%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => scrollToIndex(Math.min(pages - 1, clampedActive + 1))}
          disabled={clampedActive >= pages - 1}
          aria-label="Следующие отзывы"
          data-touch-hover=""
          className="btn-motion rounded-pill bg-blue shadow-card absolute top-1/2 right-0 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-white disabled:pointer-events-none disabled:opacity-35 lg:flex"
        >
          <IconChevronRight className="h-5 w-5" />
        </button>
      </div>

      {pages > 1 ? (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Показать отзыв ${index + 1}`}
              aria-current={index === clampedActive}
              className={`rounded-pill h-2.5 transition-all duration-300 ${
                index === clampedActive
                  ? "bg-brand w-6"
                  : "bg-blue/25 hover:bg-blue/45 w-2.5"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
