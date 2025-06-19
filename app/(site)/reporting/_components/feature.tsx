import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";
import OrangeCircleSVG from "@/components/svg-defs/OrangeCircleSVG";

const Feature = () => {
  const features = [
    {
      title: "Branded reports",
      subtitle:
        "Automatically add your agency logo, company name, and custom notes to every report no design tools needed.",
      image: "/client-portal/hero.webp",
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
      image: "/prospecting/feature03.webp",
    },
    {
      title: "Easy export options",
      subtitle:
        "One-click export to PDF or CSV perfect for sharing or archiving",
      image: "/home/feature03.webp",
    },
    {
      title: "Send directly to clients",
      subtitle:
        "Email reports to your clients straight from the app, with a personalized message.",
      image: "/site-database/feature03.webp",
    },
  ];
  return (
    <section className="relative z-10">
      <div className="app-container">
        <div className="pb-8 space-y-6 md:pb-24 sm:pb-12 md:space-y-24">
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
          image="/home/client-list.webp"
          bgImage="/overview-accent-bg.png"
        />
        <div className="py-8 space-y-6 md:py-24 sm:py-12 md:space-y-24">
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
            image="/home/client-list.webp"
            bgImage="/overview-light-teal-bg.png"
          />
        </div>
      </div>
      <div className="-z-10 absolute top-[350px] sm:top-[500px] right-0 scale-x-[-1] pointer-events-none">
        <OrangeCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute pointer-events-none xl:block hidden top-[800px] scale-x-[-1] sm:scale-x-[1] sm:top-0 right-0 sm:-left-10">
        <OrangeCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute xl:block hidden xl:top-[2000px] right-0 scale-x-[-1] pointer-events-none">
        <OrangeCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute right-0 pointer-events-none xl:block hidden scale-x-[-1] sm:scale-x-[1] top-[1400px] sm:-left-10">
        <OrangeCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
    </section>
  );
};

export default Feature;
