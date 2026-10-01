import type { ContentImage, FeatureItem } from "./types";

export const hero: {
  title: string;
  subtitle: string;
  badge: string;
  image: ContentImage;
  /** Вертикальный кадр — только для телефонов */
  imageMobile: ContentImage;
} = {
  title: "Красота, здоровье и забота о вашем питомце",
  subtitle:
    "Профессиональный уход за собаками и кошками любой породы в Петропавловске-Камчатском.",
  badge: "Более 10 лет заботимся о питомцах Камчатки",
  image: {
    src: "/images/hero/hero-wide.jpg",
    alt: "Персиковый пудель в барберской накидке в кресле зоосалона BarberDog",
  },
  imageMobile: {
    src: "/images/hero/hero-phone.jpg",
    alt: "Персиковый пудель в барберской накидке в кресле зоосалона BarberDog",
  },
};

export const advantages: FeatureItem[] = [
  {
    id: "experience",
    icon: "shield-check",
    title: "10+ лет опыта",
    text: "Более десяти лет профессионального ухода и доверия клиентов.",
  },
  {
    id: "complex",
    icon: "heart-pulse",
    title: "Комплексный уход",
    text: "Груминг, гигиена, здоровье шерсти — всё за один визит.",
  },
  {
    id: "pets",
    icon: "pets",
    title: "Собаки и кошки",
    text: "Работаем с питомцами любых пород и размеров.",
  },
];

export const sections = {
  services: {
    title: "Наши услуги",
    allLabel: "Смотреть все услуги",
    allHref: "/uslugi",
  },
  beforeAfter: {
    title: "Результат, который видно сразу",
    ctaLabel: "Смотреть больше работ",
    ctaHref: "/raboty",
  },
  reviews: {
    title: "Что говорят наши клиенты",
    allLabel: "Все отзывы",
    allHref: "/otzyvy",
  },
};

export const care: {
  title: string;
  text: string[];
  image: ContentImage;
  features: FeatureItem[];
} = {
  title: "Забота — это больше, чем красивая стрижка",
  text: [
    "Мы заботимся о здоровье и комфорте вашего питомца. Используем профессиональную косметику, стерильные инструменты и индивидуальный подход к каждому гостю.",
  ],
  image: {
    src: "/images/care/care.jpg",
    alt: "Английский кокер-спаниель на груминг-столе в светлом зале зоосалона",
  },
  features: [
    { id: "cosmetics", icon: "bottle", title: "Профессиональная косметика" },
    { id: "safety", icon: "sparkle-shield", title: "Безопасность и чистота" },
    { id: "approach", icon: "heart", title: "Индивидуальный подход" },
    { id: "masters", icon: "award", title: "Опытные мастера" },
  ],
};

export const ctaBanner: {
  title: string;
  text: string;
  image: ContentImage;
} = {
  title: "Пора навести красоту!",
  text: "Запишите питомца в BarberDog и подарите ему заботу и комфорт.",
  image: {
    src: "/images/cta/cta-banner.jpg",
    alt: "Белый померанский шпиц на фоне красно-сине-белых полос барберского жезла",
  },
};
