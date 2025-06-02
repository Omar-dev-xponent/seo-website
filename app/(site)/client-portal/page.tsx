import React from "react";
import ClientPortalHero from "@/app/(site)/client-portal/_components/hero";
import ClientPortalFeature from "@/app/(site)/client-portal/_components/feature";
import ClientPortalTestimonials from "@/app/(site)/client-portal/_components/testimonials";
import TrialCTA from "@/components/trial-cta";
const ClientPortal = () => {
  return (
    <>
      <ClientPortalHero />
      <ClientPortalFeature />
      <ClientPortalTestimonials />
      <TrialCTA
        title={`Want to impress your clients \n with a better experience?`}
        description={`Start exploring our site database and launch smarter \n campaigns in minutes.`}
      />
    </>
  );
};

export default ClientPortal;
