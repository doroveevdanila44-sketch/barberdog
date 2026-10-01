import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TouchHover } from "@/components/ui/TouchHover";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/jsonld";
import { salon } from "@/content/salon";
import { homeSeo } from "@/content/pages";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(salon.siteUrl),
  title: {
    default: homeSeo.title,
    template: `%s — ${salon.name}`,
  },
  description: homeSeo.description,
  applicationName: salon.fullName,
  keywords: [
    "груминг",
    "зоосалон",
    "стрижка собак",
    "стрижка кошек",
    "экспресс-линька",
    "Петропавловск-Камчатский",
    "Камчатка",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: salon.fullName,
    title: homeSeo.title,
    description: homeSeo.description,
    url: salon.siteUrl,
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1600,
        height: 854,
        alt: salon.tagline,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#d8232f",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        {/* Без JS анимация появления не отработает — показываем всё сразу */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-white antialiased">
        <a
          href="#content"
          className="focus:rounded-pill focus:bg-brand sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:text-white"
        >
          Перейти к содержимому
        </a>
        <TouchHover />
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
