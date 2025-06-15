import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";
import BlueCircleSVG from "@/components/svg-defs/BlueCircleSVG";

const ClientPortalFeature = () => {
  const features = [
    {
      title: "End-to-end link order management",
      subtitle:
        "Manage client campaigns, approvals, and outreach—all from one scalable, central hub.",
      bulletList: [
        "Add and manage unlimited clients",
        "Create and track link building orders per client",
        "Submit domains for approval before outreach",
        "Track approval status and feedback in real-time",
      ],
      image: "/client-portal/hero.webp",
    },
    {
      title: "Built-in messaging & instant notifications",
      subtitle:
        "Skip email clutter—chat with clients directly using real-time, built-in messaging.",
      bulletList: [
        "In-app messaging with clients",
        "Instant notifications on approvals, updates & live links",
        "Optional email alerts or Slack-style integration",
      ],
      image: "/client-portal/hero.webp",
    },
    {
      title: "Built for agencies & freelancers",
      subtitle:
        "Whether you're a solo link builder or a growing agency, our Client Portal gives you the systems and structure to scale — without the chaos.",
      bulletList: [
        "Assign team members to specific clients",
        "AManage multiple orders & timelines easily",
        "Maintain visibility across all client work",
      ],
      image: "/client-portal/hero.webp",
    },
  ];
  return (
    <section className="relative z-10 ">
      <div className="app-container">
        <div className="py-8 space-y-6 md:py-24 sm:py-12 md:space-y-24">
          {features.slice(0, 2).map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              className={index === 1 ? "md:flex-row-reverse" : ""}
            />
          ))}
        </div>
        <OverviewCard
          title="Live link monitoring & reporting"
          description={`Automated reports with link status and domain metrics—clear, \n visual updates your clients will love.`}
          image="/home/client-list.webp"
          bgImage="/overview-accent-bg.png"
        />
        <div className="py-8 space-y-6 md:py-24 sm:py-12 md:space-y-24">
          {features.slice(2, 3).map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              className={index === 1 ? "md:flex-row-reverse" : ""}
            />
          ))}
        </div>
      </div>
      <div className="-z-10 absolute top-[500px] sm:top-[400px] right-0 scale-x-[-1] pointer-events-none">
        <BlueCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="absolute -z-10 right-0 xl:block hidden pointer-events-none scale-x-[1] top-20 sm:-left-10">
        <BlueCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute right-0 pointer-events-none xl:block hidden scale-x-[1] top-[1500px] sm:-left-10">
        <BlueCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
    </section>
  );
};

export default ClientPortalFeature;
