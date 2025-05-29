import { ComparisonSection } from "../_components/comparison";
import PricingSection from "../_components/pricing";
import PricingFaq from "./_components/faq";
import PricingHero from "./_components/hero";
import PricingTestimonials from "./_components/testimonials";

export const metadata = {
  title: " Affordable Pricing Plans for SEO Teams of All Sizes - Outreachful",
  description:
    "Flexible pricing for powerful link-building. Compare plans to find the perfect fit for your agency, in-house team, or freelance SEO business.",
};

export default function PricingPage() {
  return (
    <div>
      <PricingHero />
      <PricingSection />
      <ComparisonSection />
      <PricingTestimonials />
      <PricingFaq />
    </div>
  );
}
