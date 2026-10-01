import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { GroomingIncludes } from "@/components/sections/GroomingIncludes";
import { PricingFactors } from "@/components/sections/PricingFactors";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbsJsonLd } from "@/lib/jsonld";
import { services } from "@/content/services";
import { servicesPage } from "@/content/pages";

export const metadata: Metadata = {
  title: servicesPage.seo.title,
  description: servicesPage.seo.description,
  alternates: { canonical: "/uslugi" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title={servicesPage.title}
        lead={servicesPage.lead}
        crumbs={[{ label: "Главная", href: "/" }, { label: "Услуги" }]}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {services.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={index * 80}>
                <ServiceCard service={service} showPrice />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <GroomingIncludes tone="cream" />
      <PricingFactors tone="white" />
      <CtaBanner />

      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Главная", path: "/" },
          { name: servicesPage.title, path: "/uslugi" },
        ])}
      />
    </>
  );
}
