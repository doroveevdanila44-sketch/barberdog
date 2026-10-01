import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import {
  GroomingIncludes,
  IncludesList,
} from "@/components/sections/GroomingIncludes";
import { PricingFactors } from "@/components/sections/PricingFactors";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbsJsonLd } from "@/lib/jsonld";
import { services, serviceBySlug } from "@/content/services";
import { servicesPage } from "@/content/pages";
import { salon } from "@/content/salon";
import { aspectRatio, imagePropsFill } from "@/lib/image";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `/uslugi/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [{ url: service.image.src, alt: service.image.alt }],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHeader
        title={service.title}
        crumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/uslugi" },
          { label: service.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <BookingButton size="lg" />
          {service.priceFrom ? (
            <span className="rounded-pill font-display text-brand shadow-card bg-white px-5 py-3 text-[15px] font-semibold">
              {service.priceFrom}
            </span>
          ) : null}
        </div>
      </PageHeader>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div
                className="shadow-card relative w-full overflow-hidden rounded-[var(--radius-card-lg)]"
                style={{ aspectRatio: aspectRatio(service.image) }}
              >
                <Image
                  {...imagePropsFill(service.image)}
                  alt={service.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 540px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={90}>
              {service.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-muted mb-4 text-[15px] leading-relaxed sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              <div className="bg-cream mt-8 rounded-[var(--radius-card-lg)] p-6 sm:p-7">
                <h2 className="font-display text-ink text-[19px] font-bold">
                  Цены
                </h2>
                <ul className="divide-line mt-4 divide-y">
                  {service.prices.map((item) => (
                    <li
                      key={item.title}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3 first:pt-0 last:pb-0"
                    >
                      <span className="text-ink text-[15px]">
                        {item.title}
                        {item.note ? (
                          <span className="text-muted mt-0.5 block text-sm">
                            {item.note}
                          </span>
                        ) : null}
                      </span>
                      {item.price ? (
                        <span className="font-display text-brand text-[15px] font-semibold whitespace-nowrap">
                          {item.price}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <p className="text-muted mt-4 text-sm">
                  Прайс актуален на {salon.priceListUpdatedAt}. Все цены —
                  стартовые:{" "}
                  <a
                    href="#stoimost"
                    className="text-brand font-medium underline underline-offset-4"
                  >
                    от чего зависит стоимость
                  </a>
                  .
                </p>
              </div>

              {service.includes?.length ? (
                <div className="border-line mt-6 rounded-[var(--radius-card-lg)] border p-6 sm:p-7">
                  <h2 className="font-display text-ink text-[19px] font-bold">
                    Что входит
                  </h2>
                  <div className="mt-4">
                    <IncludesList items={service.includes} />
                  </div>
                </div>
              ) : null}
            </Reveal>
          </div>

          {service.facts?.length ? (
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14">
              {service.facts.map((fact, index) => (
                <Reveal as="li" key={fact.title} delay={index * 90}>
                  <div className="bg-brand-soft h-full rounded-[var(--radius-card-lg)] p-6">
                    <h3 className="font-display text-ink text-[17px] font-bold">
                      {fact.title}
                    </h3>
                    <p className="text-ink/80 mt-2 text-sm leading-relaxed">
                      {fact.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          ) : null}
        </Container>
      </section>

      {service.showsGroomingIncludes ? (
        <GroomingIncludes
          tone="cream"
          withComparison={service.slug === "grooming-sobak"}
        />
      ) : null}

      <PricingFactors
        tone={service.showsGroomingIncludes ? "white" : "cream"}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading title="Другие услуги" />
          </Reveal>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {others.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={index * 80}>
                <ServiceCard
                  service={item}
                  showPrice
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 360px"
                />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />

      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Главная", path: "/" },
          { name: servicesPage.title, path: "/uslugi" },
          { name: service.title, path: `/uslugi/${service.slug}` },
        ])}
      />
    </>
  );
}
