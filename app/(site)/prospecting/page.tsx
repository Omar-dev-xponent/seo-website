import React from "react";
import ProspectingHero from "@/app/(site)/prospecting/_components/hero";
import ProspectingFeature from "@/app/(site)/prospecting/_components/feature";
import ProspectTestimonials from "@/app/(site)/prospecting/_components/testimonials";
import TrialCTA from "@/components/trial-cta";
const Prospecting = () => {
  return (
    <>
      <ProspectingHero />
      <ProspectingFeature />
      <ProspectTestimonials />
      <TrialCTA
        title={`Start building better prospect \n lists today`}
        description={`Prospect smarter. Save time. Close more link opportunities.`}
      />
    </>
  );
};

export default Prospecting;
