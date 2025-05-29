import React from "react";
import TermsConditionHero from "./_components/hero";
import Content from "./_components/content";

export const metadata = {
  title: "Terms of Service: Platform Usage Guidelines - Outreachful",
  description:
    "Legal terms governing your use of Outreachful's link-building platform and services. Updated to ensure transparency and fair use.",
};

export default function TermsConditionsPage() {
  return (
    <div>
      <TermsConditionHero />
      <Content />
    </div>
  );
}
