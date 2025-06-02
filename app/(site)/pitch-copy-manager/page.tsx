import React from "react";
import Hero from "@/app/(site)/pitch-copy-manager/_components/hero";
import Feature from "@/app/(site)/pitch-copy-manager/_components/feature";
import BrandSection from "@/components/brand";
import Testimonials from "@/app/(site)/pitch-copy-manager/_components/Testimonials";
import TrialCTA from "@/components/trial-cta";

const PitchCopyManager = () => {
  return (
    <>
      <Hero />
      <BrandSection />
      <Feature />
      <Testimonials />
      <TrialCTA
        title={`Ready to send smarter outreach?`}
        description={`Start your free trial today and streamline your link building \n with intelligent pitch copy tools.`}
      />
    </>
  );
};

export default PitchCopyManager;
