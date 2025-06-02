import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";

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
      image: "/client-portal/feature01.png",
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
      image: "/client-portal/feature02.png",
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
      image: "/client-portal/feature02.png",
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
        title="Live link monitoring & reporting"
        description={`Automated reports with link status and domain metrics—clear, \n visual updates your clients will love.`}
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

export default ClientPortalFeature;
