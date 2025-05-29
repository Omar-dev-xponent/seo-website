import React from "react";
import PrivacyHero from "./_components/hero";
import Content from "./_components/content";

export const metadata = {
  title: "Privacy Policy: Data Protection & Security Commitment - Outreachful",
  description:
    "How we collect, use, and protect your information. Outreachful complies with GDPR and other privacy regulations to safeguard your data.",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <PrivacyHero />
      <Content />
    </div>
  );
}
