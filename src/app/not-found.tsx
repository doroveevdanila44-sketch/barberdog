import { Container } from "@/components/ui/Container";
import { ButtonLink, BookingButton } from "@/components/ui/Button";
import { IconPawSolid } from "@/components/icons";
import { notFoundPage } from "@/content/pages";

export default function NotFound() {
  return (
    <section className="bg-cream pt-[140px] pb-20 lg:pt-[180px]">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <span className="rounded-pill text-brand mx-auto flex h-16 w-16 items-center justify-center bg-white">
            <IconPawSolid className="h-8 w-8" />
          </span>
          <h1 className="mt-6 text-[32px] sm:text-[40px]">
            {notFoundPage.title}
          </h1>
          <p className="text-muted mt-4 text-[15px] leading-relaxed sm:text-base">
            {notFoundPage.text}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={notFoundPage.action.href} size="lg">
              {notFoundPage.action.label}
            </ButtonLink>
            <BookingButton size="lg" variant="outline" />
          </div>
        </div>
      </Container>
    </section>
  );
}
