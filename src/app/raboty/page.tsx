import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/Button";
import { BeforeAfterCard } from "@/components/cards/BeforeAfterCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbsJsonLd } from "@/lib/jsonld";
import { IconPawSolid } from "@/components/icons";
import { beforeAfterWorks, worksPage } from "@/content/works";
import { worksPageSeo } from "@/content/pages";

export const metadata: Metadata = {
  title: worksPageSeo.title,
  description: worksPageSeo.description,
  alternates: { canonical: "/raboty" },
};

export default function WorksPage() {
  return (
    <>
      <PageHeader
        title={worksPage.title}
        crumbs={[{ label: "Главная", href: "/" }, { label: worksPage.title }]}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="bg-brand-soft mx-auto max-w-2xl rounded-[var(--radius-card-lg)] px-6 py-12 text-center sm:px-10">
              <span className="rounded-pill text-brand mx-auto flex h-16 w-16 items-center justify-center bg-white">
                <IconPawSolid className="h-8 w-8" />
              </span>
              <h2 className="font-display text-ink mt-6 text-[24px] font-bold sm:text-[28px]">
                {worksPage.stubTitle}
              </h2>
              <p className="text-ink/80 mx-auto mt-4 max-w-md text-[15px] leading-relaxed">
                {worksPage.stubText}
              </p>
              <p className="text-muted mx-auto mt-2 max-w-md text-sm leading-relaxed">
                {worksPage.note}
              </p>
              <div className="mt-8 flex justify-center">
                <BookingButton size="lg" />
              </div>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {beforeAfterWorks.map((work, index) => (
              <Reveal as="li" key={work.id} delay={index * 80}>
                <BeforeAfterCard work={work} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />

      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Главная", path: "/" },
          { name: worksPage.title, path: "/raboty" },
        ])}
      />
    </>
  );
}
