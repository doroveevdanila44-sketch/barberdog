import Image from "next/image";
import Link from "next/link";
import { imageMeta } from "@/lib/image-meta";
import { salon } from "@/content/salon";

const logo = imageMeta["/images/logo/logo.png"];

export function Logo({
  className = "",
  markClassName = "h-9 w-auto sm:h-10",
  tone = "dark",
}: {
  className?: string;
  markClassName?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label={`${salon.fullName} — на главную`}
    >
      <Image
        src="/images/logo/logo.png"
        width={logo.width}
        height={logo.height}
        alt=""
        className={`${markClassName} shrink-0`}
        priority
      />
      <span className="leading-none">
        <span
          className={`font-display block text-[13px] font-bold tracking-[0.015em] whitespace-nowrap uppercase sm:text-[15px] ${
            tone === "dark" ? "text-ink" : "text-white"
          }`}
        >
          {salon.name}
        </span>
        <span
          className={`mt-[3px] block text-[8px] tracking-[0.34em] uppercase sm:text-[9px] ${
            tone === "dark" ? "text-muted" : "text-white/70"
          }`}
        >
          {salon.kicker}
        </span>
      </span>
    </Link>
  );
}
