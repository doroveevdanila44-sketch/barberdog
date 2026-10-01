import type { ReactNode } from "react";
import { IconPawSolid } from "@/components/icons";

/** Разделитель «линия — лапка — линия» из макета. */
export function PawDivider({
  align = "center",
  className = "",
}: {
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <span
      className={`flex items-center gap-2 ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
      aria-hidden
    >
      <span className="rounded-pill bg-blue/40 h-px w-9" />
      <IconPawSolid className="text-brand h-4 w-4" />
      <span className="rounded-pill bg-blue/40 h-px w-9" />
    </span>
  );
}

export function SectionHeading({
  title,
  lead,
  align = "center",
  as: Tag = "h2",
  id,
  className = "",
}: {
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : "text-left"} ${className}`}>
      <Tag
        id={id}
        className={
          Tag === "h1"
            ? "text-[32px] leading-[1.15] sm:text-[40px] lg:text-[48px]"
            : "text-[26px] leading-[1.2] sm:text-[32px] lg:text-[38px]"
        }
      >
        {title}
      </Tag>
      <PawDivider align={align} className="mt-4" />
      {lead ? (
        <p
          className={`text-muted mt-5 text-[15px] leading-relaxed sm:text-base ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
