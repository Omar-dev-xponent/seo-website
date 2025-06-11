import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";
import AquaCircleSVG from "@/components/svg-defs/AquaCircleSVG";

const features = [
  {
    title: "Smart prospecting and research",
    subtitle:
      "Find and analyze the perfect link building opportunities in minutes, not hours.",
    bulletList: [
      "Find the most relevant outreach targets for your niche",
      "Analyze domain authority and traffic metrics at a glance",
      "Discover contact information with our built-in finder",
      "Filter prospects by domain rating, traffic, and relevance",
    ],
    image: "/home/feature01.png",
  },
  {
    title: "AI-Powered outreach",
    subtitle:
      "Send personalized outreach emails at scale with our AI-powered templates.",
    bulletList: [
      "Generate personalized outreach emails with AI",
      "Schedule follow-ups that get responses",
      "Track open rates, replies, and conversion metrics",
      "A/B test your email templates",
    ],
    image: "/home/feature02.png",
  },
  {
    title: "Automated link monitoring",
    subtitle:
      "Never miss a new backlink or broken link with real-time monitoring.",
    bulletList: [
      "Get alerts when links go live or are removed",
      "Monitor anchor text and placement quality",
      "Track performance impact on your rankings",
      "Weekly link health reports",
    ],
    image: "/home/feature03.png",
  },
  {
    title: "Private site list management",
    subtitle:
      "Build and maintain your private database of high-quality link opportunities.",
    bulletList: [
      "Keep your high-value link opportunities private",
      "Organize sites by quality, niche, and relationship status",
      "Track outreach history and success rates by site",
      "Custom site tagging and categorization",
    ],
    image: "/home/feature04.png",
  },
  {
    title: "Powerful integrations",
    subtitle:
      "Connect seamlessly with your favorite tools to streamline your workflow and maximize efficiency",
    bulletList: [
      "Instant contact discovery with popular tools like Snov.ai and Contact.ai",
      "Automated email verification through trusted providers",
      "Send outreach emails via GSuite, Outlook, or custom SMTP",
      "mport and export data between your favorite tools",
    ],
    image: "/home/feature05.png",
  },
];
const FeaturesSection = () => {
  return (
    <section className="relative z-10 w-full bg-white">
      <div className="app-container">
        <h2 className="text-2xl leading-[1.4] sm:text-3xl sm:leading-10 md:text-5xl font-semibold text-center text-typography-100 md:leading-[62px] font-display">
          Get all the tools you need for{" "}
          <span className="text-brand-100">
            seamless <br className="hidden lg:block" /> link building
          </span>{" "}
          management
        </h2>
        <p className="mt-4 text-sm text-center sm:text-lg font-display md:text-xl md:mt-8 text-typography-75">
          Simplify and control your workflow to manage campaigns,{" "}
          <br className="hidden sm:block" /> teams, and clients in one unified
          platform
        </p>
        {/* feature cards--> */}
        <div className="py-8 space-y-6 md:py-24 sm:py-12 sm:space-y-10">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        <OverviewCard
          title="Client management"
          description={`Manage multiple clients and campaigns with ease \n using our intuitive dashboard.`}
          image="/home/client-list.png"
          bgImage="/overview-accent-bg.png"
        />
        <div className="py-8 space-y-6 md:py-24 sm:py-12 md:space-y-20">
          {features.slice(3, 5).map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              className={index === 1 ? "md:flex-row-reverse" : ""}
            />
          ))}
        </div>
      </div>

      <div className="absolute -z-10 right-0 lg:block hidden pointer-events-none scale-x-[-1] sm:scale-x-[1] top-40 sm:-left-10">
        <AquaCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute pointer-events-none top-[800px] scale-x-[-1] sm:scale-x-[1] sm:top-[1200px] right-0 sm:-left-10">
        <AquaCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute top-[1400px] sm:top-[650px] right-0 scale-x-[-1] pointer-events-none">
        <AquaCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute lg:top-[1600px] lg:block hidden right-0 scale-x-[-1] pointer-events-none">
        <AquaCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute top-[200px] sm:top-[2600px] right-0 scale-x-[-1] pointer-events-none">
        <AquaCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute right-0 pointer-events-none lg:block hidden scale-x-[-1] sm:scale-x-[1] top-[2000px] sm:-left-10">
        <AquaCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
    </section>
  );
};

export default FeaturesSection;
