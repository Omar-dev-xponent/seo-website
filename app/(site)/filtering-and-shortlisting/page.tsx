import React from "react";
import FilteringAndShortlistingHero from "@/app/(site)/filtering-and-shortlisting/_components/hero";
import BrandSection from "@/components/brand";
import FilteringAndShortlistingFeature from "@/app/(site)/filtering-and-shortlisting/_components/feature";
import Testimonials from "@/app/(site)/filtering-and-shortlisting/_components/testimonials";
import TrialCTA from "@/components/trial-cta";

const FilteringAndShortlisting = () => {
  return (
    <>
      <FilteringAndShortlistingHero />
      <BrandSection />
      <FilteringAndShortlistingFeature />
      <Testimonials />
      <TrialCTA
        title={`Build better backlinks. Faster`}
        description={`Start exploring our site database and launch smarter \n campaigns in minutes.`}
      />
    </>
  );
};

export default FilteringAndShortlisting;
