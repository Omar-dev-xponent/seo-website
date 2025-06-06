import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";

const Feature = () => {
  const features = [
    {
      title: "Seamless link management",
      subtitle:
        "Keep all your link-building efforts organized and under control.",
      bulletList: [
        "Once your link is placed, easily add it to the monitoring system for ongoing tracking",
        "Attach key information to each link, such as the site owner's name, email address, and details of your dealings",
        "If the link belongs to a client, you can assign it to the relevant order and client for better organization",
      ],
      image: "/link-monitoring/feature01.png",
    },
    {
      title: "Automated outreach and follow-ups",
      subtitle:
        "Automate outreach and follow-ups with site owners until your link is live.",
      bulletList: [
        "Instant contact discovery with popular tools like Snov.ai and Contact.ai",
        "Set up automated email campaigns to ensure you stay on top of your link placements",
        "Track the status of your links and receive alerts when the job is done",
      ],
      image: "/link-monitoring/feature02.png",
    },
    {
      title: "Link protection and performance safeguarding",
      subtitle:
        "Protect your investment in quality backlinks and ensure your SEO efforts don’t go to waste.",
      bulletList: [
        "Automatic link monitoring ensures your hard work stays safeguarded",
        "Track any changes in link status and act immediately if anything goes wrong",
        "Minimize risks by keeping a close eye on all your active backlinks",
      ],
      image: "/link-monitoring/feature03.png",
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

export default Feature;
