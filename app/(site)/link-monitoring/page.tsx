import React from "react";
import Hero from "@/app/(site)/link-monitoring/_components/hero";
import BrandSection from "@/components/brand";
import Feature from "@/app/(site)/link-monitoring/_components/features";
import TrialCTA from "@/components/trial-cta";
import Testimonials from "@/app/(site)/link-monitoring/_components/testimonials";

const LinkMonitoring = () => {
  return (
    <>
      <Hero />
      <BrandSection />
      <Feature />
      <Testimonials />
      <TrialCTA
        title={`Ready to Take Control of \n Your Link Building?`}
        description={`Protect your backlinks, streamline your outreach, \n and monitor your links effortlessly.`}
      />
    </>
  );
};

export default LinkMonitoring;
