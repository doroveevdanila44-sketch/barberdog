import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/icons";
import { groomingComparison, groomingIncludes } from "@/content/services";

export function IncludesList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="rounded-pill bg-brand-soft text-blue mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
            <IconCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          <span className="text-ink text-[15px] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** «Что входит в стрижку» + разница гигиенической и модельной. */
export function GroomingIncludes({
  withComparison = true,
  tone = "white",
}: {
  withComparison?: boolean;
  tone?: "white" | "cream";
}) {
  return (
    <section
      className={`${tone === "cream" ? "bg-cream" : "bg-white"} py-14 sm:py-16 lg:py-20`}
    >
      <Container>
        <Reveal>
          <SectionHeading
            title={groomingIncludes.title}
            lead={groomingIncludes.lead}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="shadow-card mx-auto mt-9 max-w-3xl rounded-[var(--radius-card-lg)] bg-white p-6 sm:p-8 lg:mt-12">
            <IncludesList items={groomingIncludes.items} />
          </div>
        </Reveal>

        {withComparison ? (
          <div className="mx-auto mt-6 grid max-w-3xl gap-5 sm:grid-cols-2">
            {groomingComparison.items.map((item, index) => (
              <Reveal as="div" key={item.title} delay={index * 90}>
                <div className="bg-brand-soft h-full rounded-[var(--radius-card-lg)] p-6">
                  <h3 className="font-display text-ink text-[17px] font-bold">
                    {item.title}
                  </h3>
                  <span className="text-brand mt-1 inline-block text-sm font-medium">
                    {item.period}
                  </span>
                  <p className="text-ink/80 mt-3 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
