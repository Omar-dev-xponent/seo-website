import React from "react";
import TestimonialCard from "@/components/testimonials";
const CampaignTestimonials = () => {
  return (
    <section className="pt-8 md:pt-24 sm:pt-12">
      <div className="app-container">
        <h4 className="text-2xl leading-[1.4] sm:text-3xl sm:leading-10 md:text-5xl font-semibold text-center text-typography-100 md:leading-[62px] font-display">
          What <span className="text-brand-100">SEO pros</span> are saying
        </h4>
        <p className="mt-4 text-base text-center sm:mt-6 sm:text-xl font-display text-typography-50">
          Discover how we’ve helped businesses like yours achieve success
        </p>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default CampaignTestimonials;
