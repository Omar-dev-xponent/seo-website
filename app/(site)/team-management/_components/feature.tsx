import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";
import GreenCircleSVG from "@/components/svg-defs/GreenCircleSVG";

const Feature = () => {
  const features = [
    {
      title: "Add multiple team members",
      subtitle:
        "Based on your plan, invite and manage your team right inside the app — no need to share passwords or juggle logins.",
      image: "/team-management/feature01.png",
    },
    {
      title: "Role-based access",
      subtitle:
        "Keep things secure with permission levels. Assign who can view, edit, create campaigns, or just monitor progress.",
      image: "/team-management/feature02.png",
    },
    {
      title: "Collaborate without clutter",
      subtitle:
        "Everyone sees their own assigned tasks and can update progress in real-time.",
      image: "/team-management/feature03.png",
    },
    {
      title: "Track team activity",
      subtitle:
        "Know who’s doing what track outreach, responses, campaign additions, and follow-ups per team member.",
      image: "/team-management/feature04.png",
    },
  ];
  return (
    <section className="relative z-10 w-full">
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
          title="Automated follow-ups"
          description={`Set it and forget it. Add 1–5 follow-up emails per contact with:`}
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
      <div className="-z-10 absolute top-[300px] sm:top-[500px] right-0 scale-x-[-1] pointer-events-none">
        <GreenCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute pointer-events-none xl:block hidden top-[800px] scale-x-[-1] sm:scale-x-[1] sm:top-0 right-0 sm:-left-10">
        <GreenCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute xl:block hidden xl:top-[2000px] right-0 scale-x-[-1] pointer-events-none">
        <GreenCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
      <div className="-z-10 absolute right-0 pointer-events-none xl:block hidden scale-x-[-1] sm:scale-x-[1] top-[1600px] sm:-left-10">
        <GreenCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
    </section>
  );
};

export default Feature;
