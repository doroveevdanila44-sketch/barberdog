import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/content/services";
import { sections } from "@/content/home";

/**
 * На телефоне показываем три карточки, четвёртая — за кнопкой «Смотреть все
 * услуги», чтобы главная не превращалась в бесконечную ленту.
 * От планшета и шире видны все четыре, как в макете.
 */
const MOBILE_VISIBLE = 3;

export function ServicesSection() {
  return (
    <section id="uslugi" className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <Reveal>
          <SectionHeading title={sections.services.title} />
        </Reveal>

        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <Reveal
              as="li"
              key={service.slug}
              delay={index * 80}
              className={index >= MOBILE_VISIBLE ? "hidden sm:block" : ""}
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 flex justify-center sm:hidden">
          <ButtonLink href={sections.services.allHref} variant="outline">
            {sections.services.allLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
