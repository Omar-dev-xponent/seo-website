import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";

const Feature = () => {
  const features = [
    {
      title: "Email account integrations",
      subtitle: "Connect multiple email accounts to scale your outreach",
      bulletList: [
        "Supports Gmail / GSuite, Outlook, and SMTP",
        "Assign specific email accounts to campaigns",
        "Per-account quota handled automatically",
        "Simple, secure authentication",
      ],
      image: "/campaign/feature01.png",
    },
    {
      title: "Contact finder & email verifier tools",
      subtitle: "Find verified emails fast without ever leaving your dashboard",
      bulletList: [
        "Native integrations with tools like Dropcontact, Hunter, Neverbounce, and more",
        "Auto-enrich contact data during prospecting",
        "Verify emails in bulk to reduce bounces",
        "Improve deliverability and reply rates",
      ],
      image: "/campaign/feature02.png",
    },
    {
      title: "AI copywriting tools",
      subtitle: "Use AI to create better outreach copy faster",
      bulletList: [
        "Built-in support with OpenAI",
        `Generate new cold email copy from scratch`,
        `Improve existing templates with AI suggestions`,
        `Save your favorite AI-generated messages for reuse`,
      ],
      image: "/campaign/feature03.png",
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
        title="SEO & domain metrics APIs"
        description={`No need to copy-paste into other tools. All your \n key metrics are already here`}
        image="/home/client-list.png"
        bgImage="/overview-accent-bg.png"
      />
      <div className="pt-8 space-y-6 md:pt-24 sm:pt-12 sm:space-y-10">
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
