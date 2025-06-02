import React from "react";
import Hero from "@/app/(site)/integrations/_components/hero";
import Feature from "@/app/(site)/integrations/_components/feature";
import TrialCTA from "@/components/trial-cta";

const Integrations = () => {
  return (
    <>
      <Hero />
      <Feature />
      <TrialCTA
        title={`Ready to Build Smarter \n Campaigns?`}
        description={`Experience the power of native integrations`}
      />
    </>
  );
};

export default Integrations;
