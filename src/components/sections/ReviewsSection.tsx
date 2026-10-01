import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { reviews, reviewsSource } from "@/content/reviews";
import { sections } from "@/content/home";
import { salon } from "@/content/salon";

export function ReviewsSection() {
  return (
    <section id="otzyvy" className="bg-white pt-16 pb-16 lg:pt-24 lg:pb-20">
      <Container>
        <Reveal>
          <SectionHeading title={sections.reviews.title} />
        </Reveal>
        <Reveal delay={80} className="mt-9 lg:mt-12">
          <ReviewsCarousel reviews={reviews} />
        </Reveal>
        <p className="text-muted mt-6 text-center text-sm">
          <a
            href={reviewsSource.url}
            target="_blank"
            rel="noopener noreferrer"
            data-touch-hover=""
            className="btn-motion text-brand inline-block font-medium underline underline-offset-4"
          >
            Отзывы с {salon.rating.source}
          </a>
        </p>
      </Container>
    </section>
  );
}
