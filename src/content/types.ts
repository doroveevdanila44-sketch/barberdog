import type { ImageSrc } from "@/lib/image-meta";

/** Изображение вместе с осмысленным alt. Размеры и blur подставляются из image-meta. */
export type ContentImage = {
  src: ImageSrc;
  alt: string;
};

/** Ссылка «Записаться» и прочие CTA. */
export type ActionLink = {
  label: string;
  href: string;
};

export type PriceItem = {
  title: string;
  /** Уже отформатированная строка вида «от 3 000 ₽». Отсутствует, если цена по запросу. */
  price?: string;
  note?: string;
};

export type FeatureItem = {
  id: string;
  title: string;
  text?: string;
  /** Ключ иконки из src/components/icons.tsx */
  icon: IconName;
};

export type IconName =
  | "scissors"
  | "comb"
  | "brush"
  | "paw"
  | "shield-check"
  | "heart-pulse"
  | "pets"
  | "bottle"
  | "sparkle-shield"
  | "heart"
  | "award"
  | "clock"
  | "ruler"
  | "wool";
