import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Advantages } from "@/components/sections/Advantages";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { CareSection } from "@/components/sections/CareSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { homeSeo } from "@/content/pages";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <ServicesSection />
      <BeforeAfterSection />
      <CareSection />
      <ReviewsSection />
      <CtaBanner />
    </>
  );
}
