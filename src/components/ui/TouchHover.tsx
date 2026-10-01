"use client";

import { useEffect } from "react";

/**
 * На тач-устройствах :hover не срабатывает, а «липкий» hover после тапа
 * выглядит сломанным. Поэтому подсвечиваем элемент, над которым сейчас
 * проходит палец: ставим на него data-touch-active, а стили в globals.css
 * повторяют поведение наведения курсором.
 */
export function TouchHover() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: none)").matches) return;

    let active: Element | null = null;

    const setActive = (next: Element | null) => {
      if (next === active) return;
      active?.removeAttribute("data-touch-active");
      active = next;
      active?.setAttribute("data-touch-active", "");
    };

    const handleMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      setActive(element?.closest("[data-touch-hover]") ?? null);
    };

    const handleStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      setActive(element?.closest("[data-touch-hover]") ?? null);
    };

    const clear = () => setActive(null);

    document.addEventListener("touchstart", handleStart, { passive: true });
    document.addEventListener("touchmove", handleMove, { passive: true });
    document.addEventListener("touchend", clear, { passive: true });
    document.addEventListener("touchcancel", clear, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleStart);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", clear);
      document.removeEventListener("touchcancel", clear);
      clear();
    };
  }, []);

  return null;
}
