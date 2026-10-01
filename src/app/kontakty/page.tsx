import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton, ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbsJsonLd } from "@/lib/jsonld";
import {
  IconClock,
  IconPhone,
  IconPin,
  IconMax,
  IconWhatsApp,
} from "@/components/icons";
import { contactsPage } from "@/content/pages";
import { salon } from "@/content/salon";

export const metadata: Metadata = {
  title: contactsPage.seo.title,
  description: contactsPage.seo.description,
  alternates: { canonical: "/kontakty" },
};

const messengerIcons = {
  whatsapp: IconWhatsApp,
  max: IconMax,
} as const;

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        title={contactsPage.title}
        lead={contactsPage.lead}
        crumbs={[
          { label: "Главная", href: "/" },
          { label: contactsPage.title },
        ]}
      >
        <BookingButton size="lg" />
      </PageHeader>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            <Reveal>
              <div className="bg-cream h-full rounded-[var(--radius-card-lg)] p-6 sm:p-7">
                <span className="rounded-pill text-brand flex h-12 w-12 items-center justify-center bg-white">
                  <IconPhone className="h-6 w-6" />
                </span>
                <h2 className="font-display text-ink mt-4 text-[19px] font-bold">
                  Телефон
                </h2>
                <a
                  href={salon.phone.href}
                  data-touch-hover=""
                  className="btn-motion font-display text-brand mt-2 inline-block text-[20px] font-bold"
                >
                  {salon.phone.display}
                </a>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  Запись только по телефону — так мастер сразу уточнит породу,
                  состояние шерсти и подберёт время.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {salon.messengers.map((messenger) => {
                    const MessengerIcon = messengerIcons[messenger.id];
                    return (
                      <ButtonLink
                        key={messenger.id}
                        href={messenger.href}
                        variant="outline"
                        external
                        icon={<MessengerIcon className="h-5 w-5" />}
                      >
                        {messenger.label}
                      </ButtonLink>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="bg-cream h-full rounded-[var(--radius-card-lg)] p-6 sm:p-7">
                <span className="rounded-pill text-brand flex h-12 w-12 items-center justify-center bg-white">
                  <IconPin className="h-6 w-6" />
                </span>
                <h2 className="font-display text-ink mt-4 text-[19px] font-bold">
                  Адрес
                </h2>
                <address className="text-ink mt-2 text-[15px] leading-relaxed not-italic">
                  {salon.address.street}
                  <br />
                  {salon.address.city}
                </address>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {contactsPage.addressNote}
                </p>
                <div className="mt-5">
                  <ButtonLink
                    href={salon.rating.url}
                    variant="outline"
                    external
                    ariaLabel={`Открыть карточку салона на ${salon.rating.source} (в новой вкладке)`}
                  >
                    Открыть на {salon.rating.source}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="bg-cream h-full rounded-[var(--radius-card-lg)] p-6 sm:p-7">
                <span className="rounded-pill text-brand flex h-12 w-12 items-center justify-center bg-white">
                  <IconClock className="h-6 w-6" />
                </span>
                <h2 className="font-display text-ink mt-4 text-[19px] font-bold">
                  Режим работы
                </h2>
                <p className="text-ink mt-2 text-[15px] leading-relaxed">
                  {salon.hours.short}
                  <br />
                  <span className="font-display text-brand text-[20px] font-bold">
                    {salon.hours.time}
                  </span>
                </p>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  Работаем {salon.hours.note}: у каждого питомца своё время и
                  никакой очереди.
                </p>
                <p className="text-muted mt-4 text-sm leading-relaxed">
                  Мастер — {salon.master.name}, опыт более{" "}
                  {salon.experienceYears} лет.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBanner />

      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Главная", path: "/" },
          { name: contactsPage.title, path: "/kontakty" },
        ])}
      />
    </>
  );
}
