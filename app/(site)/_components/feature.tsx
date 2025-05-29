import React from "react";
import FeatureCard from "./feature-card";
import DiamondCircleSVG from "@/app/(site)/_components/svg-defs/DiamondCircleSVG";

const features = [
  {
    title: "Smart prospecting and research",
    subtitle:
      "Find and analyze the perfect link building opportunities in minutes, not hours.",
    bulletList: [
      "Find the most relevant outreach targets for your niche",
      "Analyze domain authority and traffic metrics at a glance",
      "Discover contact information with our built-in finder",
      "Filter prospects by domain rating, traffic, and relevance",
    ],
    image: "/home/feature01.png",
  },
  {
    title: "AI-Powered outreach",
    subtitle:
      "Send personalized outreach emails at scale with our AI-powered templates.",
    bulletList: [
      "Generate personalized outreach emails with AI",
      "Schedule follow-ups that get responses",
      "Track open rates, replies, and conversion metrics",
      "A/B test your email templates",
    ],
    image: "/home/feature02.png",
  },
  {
    title: "Automated link monitoring",
    subtitle:
      "Never miss a new backlink or broken link with real-time monitoring.",
    bulletList: [
      "Get alerts when links go live or are removed",
      "Monitor anchor text and placement quality",
      "Track performance impact on your rankings",
      "Weekly link health reports",
    ],
    image: "/home/feature03.png",
  },
];
const FeaturesSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="app-container">
        <h2 className="text-2xl leading-[1.4] sm:text-3xl sm:leading-10 md:text-5xl font-semibold text-center text-typography-100 md:leading-[62px]">
          Get all the tools you need for{" "}
          <span className="text-brand-100">seamless link building</span>{" "}
          management
        </h2>

        <p className="mt-4 text-sm text-center sm:text-lg md:text-xl md:mt-8 text-typography-75">
          Simplify and control your workflow to manage campaigns,{" "}
          <br className="hidden sm:block" /> teams, and clients in one unified
          platform
        </p>
        {/* feature cards--> */}
        {/* <div className="my-8 space-y-6 sm:my-24 md:my-12 sm:space-y-10"> */}
        <div className="py-8 space-y-6 md:py-24 sm:py-12 sm:space-y-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
      <div className="absolute right-0 pointer-events-none scale-x-[-1] sm:scale-x-[1] top-40 sm:-left-10">
        <DiamondCircleSVG className="w-full h-full xl:max-w-[577px] xl:h-[741px]" />
      </div>
      <div className="absolute pointer-events-none bottom-60 scale-x-[-1] sm:scale-x-[1] sm:-bottom-72 right-0 sm:-left-10">
        <DiamondCircleSVG className="w-full h-full xl:max-w-[577px] xl:h-[741px]" />
      </div>
      <div className="absolute bottom-[800px] sm:bottom-60 right-0 scale-x-[-1] pointer-events-none">
        <DiamondCircleSVG className="w-full h-full xl:max-w-[577px] xl:h-[741px]" />
      </div>
    </section>
  );
};

export default FeaturesSection;
