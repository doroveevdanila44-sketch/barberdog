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
 * На телефоне (до 768px) показывается отдельный вертикальный кадр,
 * на планшете и компьютере — широкий.
 */
export function Hero() {
  return (
    <section className="bg-ink relative overflow-hidden">
      <Container className="relative z-10">
        <div className="pt-[92px] pb-2 lg:grid lg:min-h-[760px] lg:grid-cols-2 lg:items-center lg:gap-10 lg:pt-[88px] lg:pb-[40px]">
          <Reveal className="max-w-[540px]">
            <h1 className="text-[32px] leading-[1.14] text-white sm:text-[42px] lg:text-[50px]">
              {hero.title}
            </h1>

            <p className="mt-5 max-w-[430px] text-[16px] leading-relaxed text-white/75 sm:text-[17px]">
              {hero.subtitle}
            </p>

            <div className="mt-7">
              <BookingButton size="lg" />
            </div>

            <div className="mt-7 flex items-center gap-3">
              <span className="text-brand shrink-0">
                <IconHeart className="h-9 w-9" />
              </span>
              <p className="max-w-[230px] text-sm leading-snug text-white">
                {hero.badge}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Телефон: отдельный вертикальный кадр под текстом */}
      <div className="photo-fade-up relative -mt-6 h-[480px] w-full min-[480px]:h-[560px] md:hidden">
        <Image
          {...imagePropsFill(hero.imageMobile)}
          alt={hero.imageMobile.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Планшет и компьютер: широкий кадр, справа на больших экранах */}
      <div className="photo-fade-up lg:photo-fade-left lg:hero-photo-mask relative -mt-10 hidden h-[430px] w-full md:block lg:absolute lg:inset-y-0 lg:right-0 lg:z-0 lg:mt-0 lg:h-auto lg:w-[58%] xl:w-[56%]">
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
