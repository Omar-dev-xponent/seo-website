import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";
import BlueCircleSVG from "@/components/svg-defs/BlueCircleSVG";

const CampaignFeature = () => {
  const features = [
    {
      title: "Smart campaign scheduling",
      subtitle: "Set your outreach on autopilot:",
      bulletList: [
        "Choose start/end date",
        "Select weekdays to send",
        "Define time ranges (e.g., 10AM–1PM)",
        "Maximize open rates with timing control.",
      ],
      image: "/campaign/feature01.png",
    },
    {
      title: "Built-in pitch editor",
      subtitle: "No need to leave the campaign screen. Just:",
      bulletList: [
        "Select from your saved pitch templates",
        "Customize or write new copy from scratch",
        "Add personalization tokens like {{Name}}, {{Site}}, {{Topic}} Pair with AI-powered suggestions to sharpen your copy in seconds.",
      ],
      image: "/campaign/feature02.png",
    },
    {
      title: "Smart reply detection",
      subtitle:
        "If someone replies, we stop bugging them. Once a reply is detected, the contact is:",
      bulletList: [
        "Removed from follow-up queue",
        `Marked as "Replied" in reports saves your reputation and avoids awkward double emails.`,
      ],
      image: "/campaign/feature03.png",
    },
    {
      title: "Performance tracking",
      subtitle: "Track what matters:",
      bulletList: [
        "Email opens",
        `Replies`,
        `Link clicks (coming soon) Export reports for internal use or client sharing.`,
      ],
      image: "/campaign/feature04.png",
    },
  ];
  return (
    <section className="relative z-10">
      <div className="app-container">
        <div className="py-8 space-y-6 md:py-24 sm:py-12 sm:space-y-10">
          {features.slice(0, 2).map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              className={index === 1 ? "md:flex-row-reverse" : ""}
            />
          ))}
        </div>
        <OverviewCard
          title="Automated follow-ups"
          description={`Set it and forget it. Add 1–5 follow-up emails per contact with:`}
          image="/home/client-list.png"
          bgImage="/overview-accent-bg.png"
        />
        <div className="py-8 space-y-6 md:py-24 sm:py-12 sm:space-y-10">
          {features.slice(2, 4).map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              className={index === 1 ? "md:flex-row-reverse" : ""}
            />
          ))}
        </div>
      </div>
      <div className="-z-10 absolute top-[450px] sm:top-[500px] right-0 scale-x-[-1] pointer-events-none">
        <BlueCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute pointer-events-none xl:block hidden top-[800px] scale-x-[-1] sm:scale-x-[1] sm:top-0 right-0 sm:-left-10">
        <BlueCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute xl:block hidden xl:top-[1800px] right-0 scale-x-[-1] pointer-events-none">
        <BlueCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute right-0 pointer-events-none xl:block hidden scale-x-[-1] sm:scale-x-[1] top-[1600px] sm:-left-10">
        <BlueCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
    </section>
  );
};

export default CampaignFeature;
