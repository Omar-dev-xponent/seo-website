import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";

const FilteringAndShortlistingFeature = () => {
  const features = [
    {
      title: "Advanced search with SEO metrics",
      subtitle: "Search your sites based on key SEO metrics like:",
      bulletList: [
        "Domain Rating (DR)",
        "Traffic volume",
        "Spam scores",
        "Backlink profiles",
        "Index status",
      ],
      image: "/shortlisting-and-filtering/feature01.png",
    },
    {
      title: "Vetted site inventory",
      subtitle:
        "Filter by sites already in our vetted inventory or your own private site inventory, ensuring you’re only considering quality, reliable domains. This saves you time from vetting new sites on your own.",
      image: "/shortlisting-and-filtering/feature02.png",
    },
    {
      title: "View full site details without leaving the app",
      subtitle: "No more switching tabs or juggling multiple tools. You can:",
      bulletList: [
        "View detailed site profiles — including SEO metrics, contact data, and outreach details — all within our app.",
        "Quickly review the full scope of a site’s relevance to your campaign without losing your workflow.",
      ],
      image: "/shortlisting-and-filtering/feature03.png",
    },
    {
      title: "Simplified campaign preparation",
      subtitle:
        "Once you’ve filtered and shortlisted, you can easily add your chosen sites to:",
      bulletList: [
        "Your current campaign",
        "Your own site inventory",
        "Or export them for further review or outreach",
      ],
      image: "/shortlisting-and-filtering/feature04.png",
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
        title="One-click site management"
        description={`Build your outreach list directly from the database. Just select, \n save, and assign to any campaign or client project instantly.`}
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

export default FilteringAndShortlistingFeature;
