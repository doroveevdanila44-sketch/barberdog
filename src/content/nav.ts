export type NavLink = {
  label: string;
  href: string;
};

/** Меню в шапке — порядок как в макете. */
export const mainNav: NavLink[] = [
  { label: "Услуги", href: "/uslugi" },
  { label: "До / После", href: "/raboty" },
  { label: "О салоне", href: "/o-salone" },
  { label: "Отзывы", href: "/otzyvy" },
  { label: "Контакты", href: "/kontakty" },
];

/** Все публичные маршруты — используется в sitemap.ts. */
export const staticRoutes = [
  "/",
  "/uslugi",
  "/raboty",
  "/o-salone",
  "/otzyvy",
  "/kontakty",
] as const;
