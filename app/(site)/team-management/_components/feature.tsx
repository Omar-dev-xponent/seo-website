import React from "react";
import FeatureCard from "@/components/feature-card";
import OverviewCard from "@/components/overview-card";

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
    </section>
  );
};

export default Feature;
