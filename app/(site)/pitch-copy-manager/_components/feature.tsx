import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";
import RedCircleSVG from "@/components/svg-defs/RedCircleSVG";

const Feature = () => {
  const features = [
    {
      title: "Pre-written templates that work",
      subtitle:
        "Get instant access to a library of proven guest post, niche edit, and link exchange pitches written by experienced link builders. Use them as-is or tweak for your own tone.",
      image: "/shortlisting-and-filtering/feature01.png",
    },
    {
      title: "AI-assisted pitch writing",
      subtitle:
        "Need a fresh angle? Use our AI assistant to write personalized email copy for your campaign. Just choose the campaign type, tone, and target we’ll handle the rest.",
      image: "/shortlisting-and-filtering/feature02.png",
    },
    {
      title: "Personalization at scale",
      subtitle:
        "Insert variables like {{FirstName}}, {{SiteName}}, {{Topic}}, and more. Personalize each email while sending at scale — no manual edits needed.",
      image: "/shortlisting-and-filtering/feature03.png",
    },
    {
      title: "A/B test your copy",
      subtitle:
        "Easily test multiple pitch versions in the same campaign. See which one gets more opens, clicks, and replies — then double down on what works.",
      image: "/shortlisting-and-filtering/feature04.png",
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
          title="Save and reuse across campaigns"
          description={`Build your own pitch library. Save high-performing emails and reuse them across \n campaigns with one click. Organize by campaign type or niche.`}
          image="/home/client-list.png"
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
            title="Seamless campaign integration"
            description={`Insert any pitch directly while setting up your campaign. No switching tabs. \n No breaking flow. It’s built right into your outreach setup.`}
            image="/home/client-list.png"
            bgImage="/overview-light-teal-bg.png"
          />
        </div>
      </div>
      <div className="-z-10 absolute top-[350px] sm:top-[500px] right-0 scale-x-[-1] pointer-events-none">
        <RedCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute pointer-events-none xl:block hidden top-[800px] scale-x-[-1] sm:scale-x-[1] sm:top-0 right-0 sm:-left-10">
        <RedCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute xl:block hidden xl:top-[2000px] right-0 scale-x-[-1] pointer-events-none">
        <RedCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute right-0 pointer-events-none xl:block hidden scale-x-[-1] sm:scale-x-[1] top-[1400px] sm:-left-10">
        <RedCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
    </section>
  );
};

export default Feature;
