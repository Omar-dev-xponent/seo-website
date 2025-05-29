import React from "react";
import HeroSection from "@/app/(site)/_components/hero";
import FeaturesSection from "@/app/(site)/_components/feature";
import ClientManagement from "@/app/(site)/_components/client-management";
import { ComparisonSection } from "./_components/comparison";
import { CalculatorSection } from "./_components/calculator";
import TestimonialsSection from "./_components/testimonials";
import PricingSection from "./_components/pricing";
import ContactCtaSection from "./_components/contact-cta";
import FaqSection from "./_components/faq";

export const metadata = {
  title:
    "The Ultimate Link-Building Platform for SEO Professionals - Outreachful",
  description:
    "Outreachful helps SEOs win link-building with smart outreach, personalized campaigns, and high-conversion strategies. Get quality backlinks faster.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ClientManagement />
      {/* <ComparisonSection /> */}
      {/* <CalculatorSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
      {/* <ContactCtaSection /> */}
      {/* <FaqSection /> */}
    </>
  );
}
