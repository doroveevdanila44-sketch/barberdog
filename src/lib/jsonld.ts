import { salon } from "@/content/salon";
import { services } from "@/content/services";

/**
 * JSON-LD LocalBusiness: адрес, телефон, часы работы и рейтинг.
 * Отдаётся на всех страницах через layout.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PetGroomer"],
    "@id": `${salon.siteUrl}/#business`,
    name: salon.fullName,
    alternateName: salon.name,
    description: salon.description,
    url: salon.siteUrl,
    telephone: salon.phone.raw,
    image: `${salon.siteUrl}/images/hero/hero-wide.jpg`,
    logo: `${salon.siteUrl}/images/logo/logo.png`,
    priceRange: "₽₽",
    currenciesAccepted: "RUB",
    address: {
      "@type": "PostalAddress",
      streetAddress: salon.address.street,
      addressLocality: salon.address.city,
      addressRegion: salon.region,
      postalCode: salon.address.postalCode,
      addressCountry: salon.address.country,
    },
    areaServed: {
      "@type": "City",
      name: salon.city,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: salon.hours.days,
        opens: salon.hours.opens,
        closes: salon.hours.closes,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: salon.rating.value,
      reviewCount: salon.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [salon.rating.url, ...salon.messengers.map((m) => m.href)],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги зоосалона",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        url: `${salon.siteUrl}/uslugi/${service.slug}`,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.cardText,
        },
      })),
    },
  };
}

/** Хлебные крошки для внутренних страниц. */
export function breadcrumbsJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${salon.siteUrl}${item.path}`,
    })),
  };
}
