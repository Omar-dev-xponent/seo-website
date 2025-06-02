import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";

const Feature = () => {
  const features = [
    {
      title: "Branded reports",
      subtitle:
        "Automatically add your agency logo, company name, and custom notes to every report no design tools needed.",
      image: "/reporting/feature01.png",
    },
    {
      title: "Track metrics that matter",
      bulletList: [
        "Links acquired",
        "Campaign performance",
        "Link statuses (live/removed)",
        "Response and outreach stats",
        "Link type, DR/DA, and niche",
      ],
      image: "/reporting/feature02.png",
    },
    {
      title: "Easy export options",
      subtitle:
        "One-click export to PDF or CSV perfect for sharing or archiving",
      image: "/reporting/feature03.png",
    },
    {
      title: "Send directly to clients",
      subtitle:
        "Email reports to your clients straight from the app, with a personalized message.",
      image: "/reporting/feature04.png",
    },
  ];
  return (
    <section className="app-container">
      <div className="pb-8 space-y-6 md:pb-24 sm:pb-12 sm:space-y-10">
        {features.slice(0, 2).map((feature, index) => (
          <FeatureCard
            key={index}
            feature={feature}
            className={index === 1 ? "md:flex-row-reverse" : ""}
          />
        ))}
      </div>
      <OverviewCard
        title="Add sites to campaigns in one click"
        description={`Build your outreach list directly from the database. Just select, save,  \n and assign to any campaign or client project instantly.`}
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
      <div className="pb-8 md:pb-24 sm:pb-12">
        <OverviewCard
          title="Smart Summaries"
          description={`Get a clear snapshot of your month’s performance across all  \n campaigns and clients.`}
          image="/home/client-list.png"
          bgImage="/overview-light-teal-bg.png"
        />
      </div>
    </section>
  );
};

export default Feature;
