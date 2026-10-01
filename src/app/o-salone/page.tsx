import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbsJsonLd } from "@/lib/jsonld";
import { IconAward, IconClock, IconPin, IconStar } from "@/components/icons";
import { aboutPage } from "@/content/pages";
import { salon } from "@/content/salon";
import { care } from "@/content/home";
import { aspectRatio, imagePropsFill } from "@/lib/image";

export const metadata: Metadata = {
  title: aboutPage.seo.title,
  description: aboutPage.seo.description,
  alternates: { canonical: "/o-salone" },
};

const quickFacts = [
  {
    icon: <IconAward className="h-5 w-5" />,
    title: `${salon.experienceYears}+ лет опыта`,
    text: `${salon.master.name}, ${salon.master.role}`,
  },
  {
    icon: <IconStar className="h-5 w-5" />,
    title: `${salon.rating.value} на ${salon.rating.source}`,
    text: `${salon.rating.count} отзывов клиентов`,
  },
  {
    icon: <IconClock className="h-5 w-5" />,
    title: `${salon.hours.short} ${salon.hours.time}`,
    text: salon.hours.note,
  },
  {
    icon: <IconPin className="h-5 w-5" />,
    title: salon.address.street,
    text: salon.address.city,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={aboutPage.title}
        lead={aboutPage.lead}
        crumbs={[{ label: "Главная", href: "/" }, { label: aboutPage.title }]}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div
                className="shadow-card relative w-full overflow-hidden rounded-[var(--radius-card-lg)]"
                style={{ aspectRatio: aspectRatio(care.image) }}
              >
                <Image
                  {...imagePropsFill(care.image)}
                  alt={care.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 540px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={90}>
              {aboutPage.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-muted mb-4 text-[15px] leading-relaxed sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {quickFacts.map((fact) => (
                  <li
                    key={fact.title}
                    className="bg-cream flex items-start gap-3 rounded-[var(--radius-card)] p-4"
                  >
                    <span className="rounded-pill text-brand flex h-10 w-10 shrink-0 items-center justify-center bg-white">
                      {fact.icon}
                    </span>
                    <span className="leading-snug">
                      <span className="font-display text-ink block text-[15px] font-bold">
                        {fact.title}
                      </span>
                      <span className="text-muted block text-sm">
                        {fact.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-14 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading title="Как мы работаем" />
          </Reveal>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {aboutPage.principles.map((principle, index) => (
              <Reveal as="li" key={principle.title} delay={index * 80}>
                <div className="shadow-card h-full rounded-[var(--radius-card-lg)] bg-white p-6">
                  <h3 className="font-display text-ink text-[17px] font-bold">
                    {principle.title}
                  </h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    {principle.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />

      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Главная", path: "/" },
          { name: aboutPage.title, path: "/o-salone" },
        ])}
      />
    </>
  );
}
