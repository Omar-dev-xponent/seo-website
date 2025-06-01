import React from "react";
import HeroSection from "@/app/(site)/_components/hero";
import FeaturesSection from "@/app/(site)/_components/feature";
import ReviewSection from "@/app/(site)/_components/review";
import BrandSection from "@/app/(site)/_components/brand";
import ValuePropositionSection from "@/app/(site)/_components/value-proposition";
import LimitedOfferCtaSection from "@/app/(site)/_components/limited-offer-cta";
import { ComparisonSection } from "./_componentsPrev/comparison";
import { CalculatorSection } from "./_componentsPrev/calculator";
import TestimonialsSection from "./_componentsPrev/testimonials";
import PricingSection from "./_componentsPrev/pricing";
import ContactCtaSection from "./_componentsPrev/contact-cta";
import FaqSection from "./_componentsPrev/faq";

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
      <ReviewSection />
      <BrandSection />
      <ValuePropositionSection />
      <LimitedOfferCtaSection />
      {/* <ComparisonSection /> */}
      {/* <CalculatorSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
      {/* <ContactCtaSection /> */}
      {/* <FaqSection /> */}
    </>
  );
}
