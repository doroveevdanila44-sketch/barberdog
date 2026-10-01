import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PawDivider } from "@/components/ui/SectionHeading";

export type Crumb = { label: string; href?: string };

/** Шапка внутренней страницы: учитывает высоту фиксированного хедера. */
export function PageHeader({
  title,
  lead,
  crumbs,
  children,
}: {
  title: string;
  lead?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="bg-cream pt-[104px] pb-12 sm:pt-[124px] lg:pt-[150px] lg:pb-16">
      <Container>
        {crumbs?.length ? (
          <nav aria-label="Хлебные крошки" className="mb-6">
            <ol className="text-muted flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              {crumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-brand transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink">
                      {crumb.label}
                    </span>
                  )}
                  {index < crumbs.length - 1 ? (
                    <span aria-hidden className="text-blue/50">
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <h1 className="max-w-3xl text-[32px] leading-[1.15] sm:text-[40px] lg:text-[46px]">
          {title}
        </h1>
        <PawDivider align="left" className="mt-5" />
        {lead ? (
          <p className="text-muted mt-5 max-w-2xl text-[15px] leading-relaxed sm:text-base">
            {lead}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
