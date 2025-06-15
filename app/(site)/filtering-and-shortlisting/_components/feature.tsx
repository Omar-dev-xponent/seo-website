import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";
import PurpleCircleSVG from "@/components/svg-defs/PurpleCircleSVG";

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
      image: "/home/feature03.webp",
    },
    {
      title: "Vetted site inventory",
      subtitle:
        "Filter by sites already in our vetted inventory or your own private site inventory, ensuring you’re only considering quality, reliable domains. This saves you time from vetting new sites on your own.",
      image: "/site-database/feature02.webp",
    },
    {
      title: "View full site details without leaving the app",
      subtitle: "No more switching tabs or juggling multiple tools. You can:",
      bulletList: [
        "View detailed site profiles — including SEO metrics, contact data, and outreach details — all within our app.",
        "Quickly review the full scope of a site’s relevance to your campaign without losing your workflow.",
      ],
      image: "/home/feature03.webp",
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
      image: "/site-database/feature03.webp",
    },
  ];
  return (
    <section className="relative z-10 bg-white">
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
          title="One-click site management"
          description={`Build your outreach list directly from the database. Just select, \n save, and assign to any campaign or client project instantly.`}
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
      </div>
      <div className="-z-10 absolute top-[450px] sm:top-[500px] right-0 scale-x-[-1] pointer-events-none">
        <PurpleCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute pointer-events-none xl:block hidden top-[800px] scale-x-[-1] sm:scale-x-[1] sm:top-0 right-0 sm:-left-10">
        <PurpleCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute xl:block hidden xl:top-[2000px] right-0 scale-x-[-1] pointer-events-none">
        <PurpleCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute right-0 pointer-events-none xl:block hidden scale-x-[-1] sm:scale-x-[1] top-[1400px] sm:-left-10">
        <PurpleCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
    </section>
  );
};

export default FilteringAndShortlistingFeature;
