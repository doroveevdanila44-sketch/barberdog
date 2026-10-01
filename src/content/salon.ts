/**
 * Единый источник правды о салоне: контакты, режим, реквизиты для JSON-LD.
 * Меняется здесь — меняется на всех страницах.
 */

const PHONE_RAW = "+79960350603";

export const salon = {
  name: "BarberDog",
  fullName: "Груминг-салон BarberDog",
  kicker: "груминг",
  tagline: "Груминг собак и кошек в Петропавловске-Камчатском",
  description:
    "Груминг-салон BarberDog в Петропавловске-Камчатском: груминг собак и кошек, гигиенические и модельные стрижки, экспресс-линька, уход за когтями, ушами и глазами. Более 10 лет опыта.",

  city: "Петропавловск-Камчатский",
  region: "Камчатский край",
  address: {
    street: "ул. Войцешека, 9",
    city: "Петропавловск-Камчатский",
    postalCode: "683031",
    country: "RU",
    /** Одной строкой — для футера и микроразметки */
    full: "ул. Войцешека, 9, Петропавловск-Камчатский",
  },

  hours: {
    short: "Ежедневно",
    time: "09:00 – 22:00",
    note: "по предварительной записи",
    /** Для JSON-LD */
    opens: "09:00",
    closes: "22:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

  phone: {
    display: "+7 996 035-06-03",
    raw: PHONE_RAW,
    href: `tel:${PHONE_RAW}`,
  },

  messengers: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: `https://wa.me/${PHONE_RAW.replace("+", "")}`,
    },
    {
      id: "max",
      label: "Max",
      href: "https://max.ru/u/f9LHodD0cOJuZrX7aORsJ4W7W1opf5HMdcBQ2gfna9jeQxE8T0qbSR6m3B8",
    },
  ] as const,

  master: {
    name: "Лариса",
    role: "мастер-грумер",
    experienceYears: 10,
  },

  experienceYears: 10,

  rating: {
    value: 5,
    count: 70,
    source: "2ГИС",
    url: "https://2gis.ru/p_kamchatskiy/firm/70000001093630721/tab/reviews",
  },

  priceListUpdatedAt: "23.10.2024",

  /** Домен подставляется на Vercel; локально — плейсхолдер. */
  siteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://barberdog.vercel.app"
  ).replace(/\/$/, ""),
} as const;

/** Единая цель всех кнопок записи — звонок, без форм и модалок. */
export const bookingAction = {
  label: "Записаться онлайн",
  shortLabel: "Записаться",
  href: salon.phone.href,
} as const;
