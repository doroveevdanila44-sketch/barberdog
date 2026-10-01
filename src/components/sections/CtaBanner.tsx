import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BookingButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IconPawSolid } from "@/components/icons";
import { ctaBanner } from "@/content/home";
import { imagePropsFill } from "@/lib/image";

/** Чёрный фон баннера: фото с полосами жезла растворяется в нём маской. */
const BANNER_BG = "#111317";

export function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: BANNER_BG }}
    >
      {/* Декоративные лапки */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <IconPawSolid className="absolute top-[18%] left-[44%] h-10 w-10 rotate-12 text-white/20" />
        <IconPawSolid className="absolute top-[52%] left-[36%] h-14 w-14 -rotate-6 text-white/15" />
        <IconPawSolid className="absolute top-[70%] left-[50%] h-9 w-9 rotate-[22deg] text-white/20" />
      </span>

      <Container className="relative z-10">
        <Reveal className="max-w-[520px] pt-12 pb-4 md:py-16 lg:py-20">
          <h2 className="text-[26px] leading-[1.2] text-white sm:text-[32px] lg:text-[36px]">
            {ctaBanner.title}
          </h2>
          <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-white/80 sm:text-base">
            {ctaBanner.text}
          </p>
          <div className="mt-7">
            <BookingButton size="lg" />
          </div>
        </Reveal>
      </Container>

      <div className="photo-fade-up md:photo-fade-left relative -mt-8 h-[240px] w-full sm:h-[290px] md:absolute md:inset-y-0 md:right-0 md:mt-0 md:h-auto md:w-[58%] lg:w-[56%]">
        <Image
          {...imagePropsFill(ctaBanner.image)}
          alt={ctaBanner.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover object-right"
        />
      </div>
    </section>
  );
}
