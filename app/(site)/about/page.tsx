import React from "react";
import AboutHero from "./_components/hero";
import OurStory from "./_components/our-story";
import OurMission from "./_components/our-mission";
import OurTeam from "./_components/our-team";
import Timeline from "./_components/timeline";
import CTA from "./_components/cta";

export const metadata = {
  title: "About Outreachful - Our Mission to Revolutionize Link-Building",
  description:
    "Learn about Outreachful's vision to empower SEO professionals with cutting-edge link-building tools, data-driven outreach, and relationship-focused strategies.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurTeam />
      <Timeline />
      <CTA />
    </div>
  );
}
