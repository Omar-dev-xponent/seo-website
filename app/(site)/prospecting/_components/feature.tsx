import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";
import AquaCircleSVG from "@/components/svg-defs/AquaCircleSVG";

const ProspectingFeature = () => {
  const features = [
    {
      title: "Keyword or Inventory-Based search",
      subtitle:
        "Start your prospecting by entering niche-specific keywords or exploring our extensive inventory. Behind the scenes, our system pulls in vetted websites and displays SEO-rich data for each.",
      image: "/prospecting/feature01.png",
    },
    {
      title: "Built-in SEO metrics",
      subtitle: "Each result includes essential SEO insights:",
      bulletList: [
        "Domain Rating (DR",
        "Traffic estimates",
        "Backlink profiles",
        "Spam signals",
      ],
      image: "/prospecting/feature02.png",
    },
    {
      title: "Smart filtering & bulk actions",
      subtitle: "Our intuitive dashboard makes it easy to:",
      bulletList: [
        "Filter sites by niche, DR, traffic, location, and more",
        "Remove or bulk delete poor fits",
        "Quickly shortlist high-potential sites",
      ],
      image: "/prospecting/feature03.png",
    },
    {
      title: "Save, Organize, & Reuse Prospect Lists",
      subtitle: "Once you’ve reviewed your list:",
      bulletList: [
        "Save it for future use",
        "Add it to your campaigns",
        "Or store it in your private site inventory for later reuse",
      ],
      image: "/prospecting/feature04.png",
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
          title="Contact information at your fingertips"
          description={`Instant contact details from our database—with optional enrichment via  \n Hunter, Dropcontact, Apollo, and more`}
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
        <AquaCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute pointer-events-none xl:block hidden top-[800px] scale-x-[-1] sm:scale-x-[1] sm:top-0 right-0 sm:-left-10">
        <AquaCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute xl:block hidden xl:top-[2000px] right-0 scale-x-[-1] pointer-events-none">
        <AquaCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute right-0 pointer-events-none xl:block hidden scale-x-[-1] sm:scale-x-[1] top-[1600px] sm:-left-10">
        <AquaCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
    </section>
  );
};

export default ProspectingFeature;
