import React from "react";
import HeroSection from "@/app/(site)/_components/hero";
import FeaturesSection from "@/app/(site)/_components/feature";
import ReviewSection from "@/app/(site)/_components/review";
import BrandSection from "@/components/brand";
import ValuePropositionSection from "@/app/(site)/_components/value-proposition";
import TrialCTA from "@/components/trial-cta";

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
      <TrialCTA
        title={`Lock in 30% off for 3 months. \n Limited time only!`}
        description={`Start risk-free with free migration assistance and a 30-day \n money-back guarantee`}
      />
    </>
  );
}
