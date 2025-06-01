import React from "react";
import SiteDbHeroSection from "@/app/(site)/site-database/_components/hero";
import BrandSection from "@/components/brand";
import SiteDbFeature from "@/app/(site)/site-database/_components/feature";
import TrialCTA from "@/components/trial-cta";
const SiteDatabase = () => {
  return (
    <>
      <SiteDbHeroSection />
      <BrandSection />
      <SiteDbFeature />
      <TrialCTA
        title={`Build better backlinks. Faster.`}
        description={`Start exploring our site database and launch smarter \n campaigns in minutes.`}
      />
    </>
  );
};

export default SiteDatabase;
