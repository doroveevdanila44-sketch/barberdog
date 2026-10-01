import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons";
import { advantages } from "@/content/home";

export function Advantages() {
  return (
    <section className="bg-cream" aria-label="Почему нам доверяют">
      <Container>
        <ul className="grid gap-8 py-12 md:grid-cols-3 md:gap-0 md:py-14">
          {advantages.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 90}
              className={`flex flex-col items-center px-2 text-center md:px-8 ${
                index > 0 ? "md:border-line md:border-l" : ""
              }`}
            >
              <span className="text-brand">
                <Icon name={item.icon} className="h-11 w-11" />
              </span>
              <h3 className="font-display text-ink mt-4 text-[19px] font-bold">
                {item.title}
              </h3>
              {item.text ? (
                <p className="text-muted mt-2 max-w-[280px] text-sm leading-relaxed">
                  {item.text}
                </p>
              ) : null}
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
