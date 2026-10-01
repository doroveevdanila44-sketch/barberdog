import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbsJsonLd } from "@/lib/jsonld";
import { IconStar } from "@/components/icons";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { reviews, reviewsSource } from "@/content/reviews";
import { reviewsPage } from "@/content/pages";
import { salon } from "@/content/salon";

export const metadata: Metadata = {
  title: reviewsPage.seo.title,
  description: reviewsPage.seo.description,
  alternates: { canonical: "/otzyvy" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title={reviewsPage.title}
        lead={reviewsPage.lead}
        crumbs={[{ label: "Главная", href: "/" }, { label: reviewsPage.title }]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <span className="rounded-pill shadow-card inline-flex items-center gap-2 bg-white px-5 py-3">
            <span className="text-brand flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, index) => (
                <IconStar key={index} className="h-4 w-4" />
              ))}
            </span>
            <span className="font-display text-ink text-[15px] font-bold">
              {reviewsSource.rating}
            </span>
            <span className="text-muted text-sm">
              / {reviewsSource.count} отзывов
            </span>
          </span>

          <ButtonLink
            href={reviewsSource.url}
            variant="outline"
            external
            ariaLabel={`${reviewsPage.sourceLabel} (откроется в новой вкладке)`}
          >
            {reviewsPage.sourceLabel}
          </ButtonLink>
        </div>
      </PageHeader>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {reviews.map((review, index) => (
              <Reveal as="li" key={review.id} delay={index * 70}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </ul>

          <p className="text-muted mt-8 text-center text-sm">
            Отзывы приведены в сокращённом виде.{" "}
            <a
              href={reviewsSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-medium underline underline-offset-4"
            >
              Оригиналы — на {salon.rating.source}
            </a>
            .
          </p>
        </Container>
      </section>

      <CtaBanner />

      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Главная", path: "/" },
          { name: reviewsPage.title, path: "/otzyvy" },
        ])}
      />
    </>
  );
}
