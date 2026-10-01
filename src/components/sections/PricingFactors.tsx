import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons";
import { pricingFactors } from "@/content/services";

/**
 * Обязательный блок «От чего зависит стоимость» — стоит и в каталоге услуг,
 * и на каждой странице услуги. Проговариваем разницу между стартовой ценой
 * и итоговой до звонка, а не после визита.
 */
export function PricingFactors({
  tone = "cream",
}: {
  tone?: "cream" | "white";
}) {
  return (
    <section
      id="stoimost"
      className={`${tone === "cream" ? "bg-cream" : "bg-white"} py-14 sm:py-16 lg:py-20`}
    >
      <Container>
        <Reveal>
          <SectionHeading
            title={pricingFactors.title}
            lead={pricingFactors.lead}
          />
        </Reveal>

        <ul className="mt-9 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {pricingFactors.items.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 80} className="h-full">
              <div className="shadow-card flex h-full flex-col rounded-[var(--radius-card-lg)] bg-white p-6">
                <span className="rounded-pill bg-brand-soft text-brand flex h-12 w-12 items-center justify-center">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-ink mt-4 text-[17px] font-bold">
                  {item.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="bg-brand-soft text-ink mx-auto mt-8 max-w-3xl rounded-[var(--radius-card-lg)] px-6 py-5 text-center text-[15px] leading-relaxed">
            {pricingFactors.footnote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
