import React from "react";
import CampaignHero from "@/app/(site)/campaign/_components/hero";
import CampaignFeature from "@/app/(site)/campaign/_components/feature";
import CampaignTestimonials from "@/app/(site)/campaign/_components/testimonials";
import TrialCTA from "@/components/trial-cta";
import CampaignFollowup from "@/app/(site)/campaign/_components/followup";

const Campaign = () => {
  return (
    <>
      <CampaignHero />
      <CampaignFeature />
      <CampaignFollowup />
      <CampaignTestimonials />
      <TrialCTA
        title={`Ready to launch a smarter \n outreach campaign?`}
        description={`Take control of your entire SEO outreach from prospects to \n replies in one place`}
      />
    </>
  );
};

export default Campaign;
