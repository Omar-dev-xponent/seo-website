import Hero from "@/app/(site)/team-management/_components/hero";
import Feature from "@/app/(site)/team-management/_components/feature";
import Testimonials from "@/app/(site)/team-management/_components/testimonials";
import TrialCTA from "@/components/trial-cta";
const TeamManagement = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Testimonials />
      <TrialCTA
        title={`Run outreach like a true \n team operation`}
        description={`Empower your SEO team with the tools they need to deliver results.`}
      />
    </>
  );
};

export default TeamManagement;
