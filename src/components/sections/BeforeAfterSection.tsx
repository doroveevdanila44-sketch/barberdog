import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { BeforeAfterCard } from "@/components/cards/BeforeAfterCard";
import { beforeAfterWorks } from "@/content/works";
import { sections } from "@/content/home";

/** Все три пары до/после видны на любом экране — их немного. */

export function BeforeAfterSection() {
  return (
    <section id="do-posle" className="bg-white pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <Reveal>
          <SectionHeading title={sections.beforeAfter.title} />
        </Reveal>

        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {beforeAfterWorks.map((work, index) => (
            <Reveal as="li" key={work.id} delay={index * 80}>
              <BeforeAfterCard work={work} />
            </Reveal>
          ))}
        </ul>

        <div className="mt-9 flex justify-center">
          <ButtonLink href={sections.beforeAfter.ctaHref} variant="outline">
            {sections.beforeAfter.ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
