import Link from "next/link";
import type { ReactNode } from "react";
import { IconCalendar } from "@/components/icons";
import { bookingAction } from "@/content/salon";

type Variant = "primary" | "outline" | "soft";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-brand hover:bg-brand active:bg-brand",
  outline: "border border-blue bg-white text-blue hover:bg-white",
  soft: "bg-brand-soft text-blue hover:bg-brand-soft",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base sm:text-[17px]",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  ariaLabel?: string;
  /** Внешняя ссылка — открываем в новой вкладке */
  external?: boolean;
};

/**
 * Все CTA на сайте — ссылки (звонок или переход), поэтому это <a>/<Link>,
 * а не <button>. Анимация задана в globals.css: увеличение при наведении
 * и при нажатии, без затемнения; на тач-устройствах — при проведении пальцем.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  ariaLabel,
  external = false,
}: ButtonLinkProps) {
  const classes = [
    "btn-motion inline-flex items-center justify-center gap-2.5 rounded-pill font-medium",
    "font-display tracking-[-0.01em] whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  const content = (
    <>
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span>{children}</span>
    </>
  );

  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        data-touch-hover=""
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      data-touch-hover=""
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

/** Кнопка записи — всегда звонок мастеру, никаких форм и модалок. */
export function BookingButton({
  size = "lg",
  variant = "primary",
  className = "",
  label = bookingAction.label,
  withIcon = true,
}: {
  size?: Size;
  variant?: Variant;
  className?: string;
  label?: string;
  withIcon?: boolean;
}) {
  return (
    <ButtonLink
      href={bookingAction.href}
      size={size}
      variant={variant}
      className={className}
      icon={withIcon ? <IconCalendar className="h-5 w-5" /> : undefined}
    >
      {label}
    </ButtonLink>
  );
}
