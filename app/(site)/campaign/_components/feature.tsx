import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";

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
    <section className="app-container">
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
        {features.slice(2, 3).map((feature, index) => (
          <FeatureCard
            key={index}
            feature={feature}
            className={index === 1 ? "md:flex-row-reverse" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default CampaignFeature;
