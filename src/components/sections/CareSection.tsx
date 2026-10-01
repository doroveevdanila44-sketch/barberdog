import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PawDivider } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/icons";
import { care } from "@/content/home";
import { aspectRatio, imagePropsFill } from "@/lib/image";

export function CareSection() {
  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div
              className="shadow-card relative w-full overflow-hidden rounded-[var(--radius-card-lg)]"
              style={{ aspectRatio: aspectRatio(care.image) }}
            >
              <Image
                {...imagePropsFill(care.image)}
                alt={care.image.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-[26px] leading-[1.2] sm:text-[32px] lg:text-[36px]">
              {care.title}
            </h2>
            <PawDivider align="left" className="mt-4" />

            {care.text.map((paragraph) => (
              <p
                key={paragraph}
                className="text-muted mt-5 max-w-[520px] text-[15px] leading-relaxed sm:text-base"
              >
                {paragraph}
              </p>
            ))}

            <ul className="mt-8 grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-0">
              {care.features.map((feature, index) => (
                <li
                  key={feature.id}
                  className={`flex flex-col items-center px-2 text-center sm:px-3 ${
                    index > 0 ? "sm:border-line sm:border-l" : ""
                  }`}
                >
                  <span className="text-brand">
                    <Icon name={feature.icon} className="h-9 w-9" />
                  </span>
                  <span className="text-ink mt-3 text-[13px] leading-snug">
                    {feature.title}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
