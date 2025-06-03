import React from "react";
import Hero from "@/app/(site)/pricing/_components/hero";
import TrialCTA from "@/components/trial-cta";

const Pricing = () => {
  return (
    <>
      <Hero />
      <TrialCTA
        title={`Lock in 30% off for 3 months. \n limited time only!`}
        description={`Start risk-free with free migration assistance and a 30-day \n money-back guarantee`}
      />
    </>
  );
};

export default Pricing;
