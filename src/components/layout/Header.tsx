"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import {
  IconCalendar,
  IconClose,
  IconMenu,
  IconPhone,
} from "@/components/icons";
import { mainNav } from "@/content/nav";
import { bookingAction, salon } from "@/content/salon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Перешли на другую страницу — закрываем мобильное меню
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  // Шапка уменьшается и получает фон при скролле
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Пока открыто мобильное меню — страница под ним не скроллится
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || menuOpen
          ? "shadow-header bg-ink/80 backdrop-blur-md"
          : pathname === "/"
            ? "bg-ink/25"
            : "bg-ink"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between gap-4 transition-[height] duration-300 ${
            scrolled ? "h-14 lg:h-[58px]" : "h-[62px] lg:h-[70px]"
          }`}
        >
          <Logo
            tone="light"
            markClassName={`w-auto transition-[height] duration-300 ${
              scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12"
            }`}
          />

          <nav aria-label="Основное меню" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-touch-hover=""
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`btn-motion rounded-pill inline-block px-1 py-1 text-[15px] font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-brand"
                        : "hover:text-brand text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* На узких экранах кнопку заменяют иконка звонка и меню */}
            <span className="hidden sm:block">
              <ButtonLink
                href={bookingAction.href}
                size="md"
                className="px-5 py-2 text-sm"
                icon={<IconCalendar className="h-[17px] w-[17px]" />}
              >
                {bookingAction.shortLabel}
              </ButtonLink>
            </span>

            <a
              href={salon.phone.href}
              data-touch-hover=""
              aria-label={`Позвонить: ${salon.phone.display}`}
              className="btn-motion rounded-pill flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 bg-white/5 text-white"
            >
              <IconPhone className="h-[18px] w-[18px]" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              className="btn-motion rounded-pill flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 bg-white/5 text-white lg:hidden"
            >
              {menuOpen ? (
                <IconClose className="h-5 w-5" />
              ) : (
                <IconMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="bg-ink border-t border-white/10 lg:hidden"
      >
        <Container className="py-6">
          <nav aria-label="Мобильное меню">
            <ul className="flex flex-col gap-1">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`font-display block rounded-2xl px-4 py-3 text-lg font-medium ${
                      isActive(link.href)
                        ? "text-brand bg-white/10"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <ButtonLink
              href={bookingAction.href}
              size="lg"
              className="w-full"
              icon={<IconCalendar className="h-5 w-5" />}
            >
              {bookingAction.label}
            </ButtonLink>
            <a
              href={salon.phone.href}
              className="font-display text-center text-lg font-semibold text-white"
            >
              {salon.phone.display}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
