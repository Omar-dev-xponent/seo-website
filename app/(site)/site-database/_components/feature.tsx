import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";

const SiteDbFeature = () => {
  const features = [
    {
      title: "Powerful search & filters",
      subtitle:
        "Search by niche, language, DA/DR, traffic, link type (guest post, niche edit, etc.), country, pricing, and more. Find sites that match your exact outreach goals — fast",
      image: "/site-database/feature01.png",
    },
    {
      title: "Smart categorization",
      subtitle:
        "Explore curated categories: tech, health, finance, lifestyle, SaaS, and more — with sorting based on trust metrics and editorial standards.",
      image: "/site-database/feature02.png",
    },
    {
      title: "Publisher-ready insights",
      subtitle: "View detailed data on each site:",
      bulletList: [
        "Admin contact info",
        "Domain authority (DA), DR, Traffic",
        "Link type accepted",
        "Pricing (if applicable)",
        "Spam score & history",
      ],
      image: "/site-database/feature03.png",
    },
    {
      title: "Constantly updated & growing",
      subtitle:
        "Our team enriches the database weekly — adding new sites, updating metrics, and removing low-value domains. You’ll always be working with fresh, relevant data.",
      image: "/site-database/feature04.png",
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
    </section>
  );
};

export default SiteDbFeature;
