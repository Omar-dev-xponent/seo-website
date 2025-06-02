import React from "react";
import Hero from "@/app/(site)/reporting/_components/hero";
import BrandSection from "@/components/brand";
import Feature from "@/app/(site)/reporting/_components/feature";
import Testimonials from "@/app/(site)/reporting/_components/testimonials";
import TrialCTA from "@/components/trial-cta";

const Reporting = () => {
  return (
    <>
      <Hero />
      <BrandSection />
      <Feature />
      <Testimonials />
      <TrialCTA
        title={`Show clients your work \n in the best light`}
        description={`Start generating branded reports with zero effort.`}
      />
    </>
  );
};

export default Reporting;
