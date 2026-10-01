import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import {
  IconClock,
  IconPhone,
  IconPin,
  IconMax,
  IconWhatsApp,
} from "@/components/icons";
import { mainNav } from "@/content/nav";
import { salon } from "@/content/salon";

const messengerIcons = {
  whatsapp: IconWhatsApp,
  max: IconMax,
} as const;

function InfoItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="rounded-pill text-blue mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-white shadow-[0_4px_12px_-8px_rgba(17,19,23,0.4)]">
        {icon}
      </span>
      <div className="text-ink text-[15px] leading-snug">{children}</div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream">
      <Container>
        <div className="grid gap-9 py-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)_minmax(0,0.85fr)_auto] lg:items-start lg:gap-8 lg:py-14">
          <div>
            <Logo markClassName="h-14 w-auto" />
            <p className="text-muted mt-4 max-w-[260px] text-sm leading-relaxed">
              {salon.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <InfoItem icon={<IconPin className="h-[18px] w-[18px]" />}>
              <span className="block">{salon.address.street},</span>
              <span className="text-muted block">{salon.address.city}</span>
            </InfoItem>
            <InfoItem icon={<IconClock className="h-[18px] w-[18px]" />}>
              <span className="block">{salon.hours.short}</span>
              <span className="text-muted block">
                {salon.hours.time}, {salon.hours.note}
              </span>
            </InfoItem>
          </div>

          <div className="flex flex-col gap-4">
            <InfoItem icon={<IconPhone className="h-[18px] w-[18px]" />}>
              <a
                href={salon.phone.href}
                data-touch-hover=""
                className="btn-motion font-display text-ink inline-block font-semibold"
              >
                {salon.phone.display}
              </a>
              <span className="text-muted block">Звоните и записывайтесь</span>
            </InfoItem>

            <nav aria-label="Разделы сайта">
              <ul className="text-muted flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {mainNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-3 lg:justify-end">
            {salon.messengers.map((messenger) => {
              const MessengerIcon = messengerIcons[messenger.id];
              return (
                <a
                  key={messenger.id}
                  href={messenger.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-touch-hover=""
                  aria-label={`${messenger.label}: ${salon.phone.display}`}
                  className="btn-motion rounded-pill text-blue flex h-11 w-11 items-center justify-center bg-white shadow-[0_6px_16px_-10px_rgba(17,19,23,0.5)]"
                >
                  <MessengerIcon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-line text-muted border-t py-6 text-center text-sm">
          © {salon.fullName}, {year}
        </div>
      </Container>
    </footer>
  );
}
