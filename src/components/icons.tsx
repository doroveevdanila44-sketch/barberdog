import type { SVGProps } from "react";
import type { IconName } from "@/content/types";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

/* ------------------------------ услуги ------------------------------ */

export function IconScissors(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6.5" r="2.5" />
      <circle cx="6" cy="17.5" r="2.5" />
      <path d="M8.1 8 20 19M8.1 16 20 5" />
    </svg>
  );
}

export function IconComb(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.8 15.4 15.4 4.8a2.6 2.6 0 0 1 3.7 0l.1.1a2.6 2.6 0 0 1 0 3.7L8.6 19.2a2.6 2.6 0 0 1-3.7 0l-.1-.1a2.6 2.6 0 0 1 0-3.7Z" />
      <path d="M8.5 11.7 10 13.2M11 9.2l1.5 1.5M13.5 6.7 15 8.2" />
    </svg>
  );
}

export function IconBrush(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="3" width="10" height="8" rx="3" />
      <path d="M12 11v10" />
      <path d="M9 11v3M15 11v3" />
    </svg>
  );
}

export function IconPaw(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="7" cy="8.2" rx="1.9" ry="2.4" />
      <ellipse cx="12" cy="6.4" rx="1.9" ry="2.5" />
      <ellipse cx="17" cy="8.2" rx="1.9" ry="2.4" />
      <path d="M12 12.2c2.6 0 4.8 1.8 4.8 4 0 1.9-1.5 2.9-3.2 2.9-.7 0-1.1-.3-1.6-.3s-.9.3-1.6.3c-1.7 0-3.2-1-3.2-2.9 0-2.2 2.2-4 4.8-4Z" />
    </svg>
  );
}

/** Сплошная лапка для декоративных разделителей. */
export function IconPawSolid(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <ellipse cx="6.6" cy="8.6" rx="2" ry="2.6" />
      <ellipse cx="11.9" cy="6.6" rx="2.1" ry="2.8" />
      <ellipse cx="17.3" cy="8.6" rx="2" ry="2.6" />
      <path d="M11.9 12c2.8 0 5.1 1.9 5.1 4.2 0 2-1.6 3.1-3.4 3.1-.8 0-1.2-.3-1.7-.3s-1 .3-1.7.3c-1.8 0-3.4-1.1-3.4-3.1 0-2.3 2.3-4.2 5.1-4.2Z" />
    </svg>
  );
}

/* --------------------------- преимущества --------------------------- */

export function IconShieldCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.8v5.4c0 4 2.9 7.7 7 9.1 4.1-1.4 7-5.1 7-9.1V5.8L12 3Z" />
      <path d="m9.2 11.9 2 2 3.6-3.7" />
    </svg>
  );
}

export function IconHeartPulse(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.3s-7.6-4.6-7.6-9.7A4.3 4.3 0 0 1 12 7.8a4.3 4.3 0 0 1 7.6 2.8c0 5.1-7.6 9.7-7.6 9.7Z" />
      <path d="M7.6 12.6h2.2l1.2-2 1.6 3.4 1.1-1.4h2.7" />
    </svg>
  );
}

export function IconPets(props: IconProps) {
  return (
    <svg {...base} {...props}>
      {/* собака: цельный силуэт головы с висячими ушами */}
      <path d="M6.9 7.3c1.7 0 3.1 1 3.8 2.5 1.2.4 1.9 1.9 1.7 3.5-.2 1.5-1.3 2.6-2.5 2.5-.6 1.1-1.7 1.8-3 1.8s-2.4-.7-3-1.8c-1.2.1-2.3-1-2.5-2.5-.2-1.6.5-3.1 1.7-3.5.7-1.5 2.1-2.5 3.8-2.5Z" />
      <path d="M6.1 13.9h1.6" />
      {/* кошка: цельный силуэт головы с острыми ушами */}
      <path d="M14.1 10.6 13.6 6.4l3.4 2.3a5.6 5.6 0 0 1 1.6 0l3.4-2.3-.5 4.2a4.5 4.5 0 0 1 .9 2.7c0 2.4-1.9 4.4-4.6 4.4s-4.6-2-4.6-4.4c0-1 .3-1.9.9-2.7Z" />
    </svg>
  );
}

/* ------------------------------ забота ------------------------------ */

export function IconBottle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10 3h4v2.4a3 3 0 0 0 .7 1.9l.9 1.1a4 4 0 0 1 .9 2.5V19a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-8.1a4 4 0 0 1 .9-2.5l.9-1.1a3 3 0 0 0 .7-1.9V3Z" />
      <path d="M8.5 12.5h7" />
    </svg>
  );
}

export function IconSparkleShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.8v5.4c0 4 2.9 7.7 7 9.1 4.1-1.4 7-5.1 7-9.1V5.8L12 3Z" />
      <path d="M12 8.4l.9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9.9-2Z" />
    </svg>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.3s-7.6-4.6-7.6-9.7A4.3 4.3 0 0 1 12 7.8a4.3 4.3 0 0 1 7.6 2.8c0 5.1-7.6 9.7-7.6 9.7Z" />
    </svg>
  );
}

export function IconAward(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13.5-1.4 6.4 4.4-2.4 4.4 2.4-1.4-6.4" />
      <path d="m12 6.6.8 1.7 1.8.3-1.3 1.3.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.3 1.8-.3.8-1.7Z" />
    </svg>
  );
}

/* ------------------------ стоимость и прочее ------------------------ */

export function IconWool(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M4.4 9.2c3.4.8 6.4 3 8 6.1M6.3 5.7c3.6 1.8 6.4 4.9 7.8 8.7M10.4 3.7c2.7 2 4.8 4.7 6.1 7.9M19.5 9.6c-1.1-2-2.6-3.7-4.4-5" />
    </svg>
  );
}

export function IconRuler(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="8.5" width="19" height="7" rx="1.8" />
      <path d="M7 8.5v3M11 8.5v4M15 8.5v3M19 8.5v4" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.4V12l3 1.8" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h2.2l1.6 4-2 1.4a11.5 11.5 0 0 0 5.3 5.3l1.4-2 4 1.6v2.2a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
      <path d="M3.5 9.8h17M8.2 3.5v3M15.8 3.5v3" />
      <path d="M12 13v3.4M10.3 14.7h3.4" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="m14.5 5-7 7 7 7" />
    </svg>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="m9.5 5 7 7-7 7" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9L12 3.6Z" />
    </svg>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M13.4 0c-1.5 4-2.4 7.4-2.7 10.2h3.2V24H0V13.5C0 8.4 1.6 3.9 4.8 0h8.6Zm17.4 0c-1.5 4-2.4 7.4-2.7 10.2h3.2V24H17.4V13.5c0-5.1 1.6-9.6 4.8-13.5h8.6Z" />
    </svg>
  );
}

/* ------------------------------ мессенджеры ------------------------------ */

export function IconWhatsApp(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.5 4c-.2 0-.5 0-.7.4-.3.4-1 1-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-.7 1c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5v-.5c-.1-.2-.7-1.7-.9-2.3-.2-.5-.5-.5-.7-.5h-.3Z" />
    </svg>
  );
}

export function IconTelegram(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 6.9-1.6 7.6c-.1.5-.4.7-.9.4l-2.4-1.8-1.2 1.1c-.1.1-.2.3-.5.3l.2-2.5 4.5-4.1c.2-.2 0-.3-.3-.1l-5.6 3.5-2.4-.8c-.5-.2-.5-.5.1-.8l9.4-3.6c.4-.2.8.1.7.8Z" />
    </svg>
  );
}

export function IconMax(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M12 2.5c-5.2 0-9.5 3.9-9.5 8.9 0 2.7 1.2 5 3.2 6.6V21l3.1-1.7c1 .3 2.1.5 3.2.5 5.2 0 9.5-3.9 9.5-8.9S17.2 2.5 12 2.5Zm-3.6 10.2a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm3.6 0a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm3.6 0a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z" />
    </svg>
  );
}

/* --------------------------- реестр иконок --------------------------- */

const registry: Record<IconName, (props: IconProps) => React.JSX.Element> = {
  scissors: IconScissors,
  comb: IconComb,
  brush: IconBrush,
  paw: IconPaw,
  "shield-check": IconShieldCheck,
  "heart-pulse": IconHeartPulse,
  pets: IconPets,
  bottle: IconBottle,
  "sparkle-shield": IconSparkleShield,
  heart: IconHeart,
  award: IconAward,
  clock: IconClock,
  ruler: IconRuler,
  wool: IconWool,
};

export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const Component = registry[name];
  return <Component {...props} />;
}
