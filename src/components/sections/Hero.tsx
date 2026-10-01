import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BookingButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IconHeart } from "@/components/icons";
import { hero } from "@/content/home";
import { imagePropsFill } from "@/lib/image";

/**
 * Единая композиция на всех разрешениях: фотография во всю ширину блока,
 * без скруглений и отступов, текст лежит поверх неё, а край фото растворяется
 * в кремовом фоне маской — стыка не видно.
 *
 * Кадрирование по правому краю: пудель стоит справа, поэтому при любой
 * ширине экрана он остаётся целым — вместе с бабочкой и корпусом.
 */
export function Hero() {
  return (
    <section className="bg-cream relative overflow-hidden">
      <Container className="relative z-10">
        <div className="pt-[92px] pb-2 lg:grid lg:grid-cols-2 lg:gap-10 lg:pt-[128px] lg:pb-[116px]">
          <Reveal className="max-w-[540px]">
            <h1 className="text-[32px] leading-[1.14] sm:text-[42px] lg:text-[50px]">
              {hero.title}
            </h1>

            <p className="text-muted mt-5 max-w-[430px] text-[16px] leading-relaxed sm:text-[17px]">
              {hero.subtitle}
            </p>

            <div className="mt-7">
              <BookingButton size="lg" />
            </div>

            <div className="mt-7 flex items-center gap-3">
              <span className="text-blue shrink-0">
                <IconHeart className="h-9 w-9" />
              </span>
              <p className="text-ink max-w-[230px] text-sm leading-snug">
                {hero.badge}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Одно и то же фото: снизу на узких экранах, справа на широких */}
      <div className="photo-fade-up lg:photo-fade-left relative -mt-10 h-[290px] w-full sm:h-[370px] md:h-[430px] lg:absolute lg:inset-y-0 lg:right-0 lg:z-0 lg:mt-0 lg:h-auto lg:w-[58%] xl:w-[56%]">
        <Image
          {...imagePropsFill(hero.image)}
          alt={hero.image.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-right"
        />
      </div>
    </section>
  );
}
