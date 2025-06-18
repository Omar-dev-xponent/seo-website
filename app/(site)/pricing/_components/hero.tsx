import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingCard from "@/app/(site)/pricing/_components/pricing-card";
import AquaCircleSVG from "@/components/svg-defs/AquaCircleSVG";
const Hero = () => {
  const monthlyPlanDetails = [
    {
      title: "Starter",
      subtitle: "Perfect for small teams and startups",
      price: "$29",
      badge: "",
      frequency: "/month",
      featureTagLine: "",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "5 automation workflows",
        "Email support",
      ],
    },
    {
      title: "Professional",
      subtitle: "Ideal for growing businesses",
      price: "$79",
      frequency: "/month",
      badge: "Popular",
      featureTagLine: "",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "Unlimited automation workflows",
        "Priority support",
        "API access",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "For large organizations",
      price: "$199",
      frequency: "/month",
      badge: "",
      featureTagLine: "",
      features: [
        "Unlimited team members",
        "Custom analytics",
        "Advanced security features",
        "Dedicated account manage",
        "Custom integrations",
      ],
    },
  ];
  const yearlyPlanDetails = [
    {
      title: "Starter",
      subtitle: "Perfect for small teams and startups",
      price: "$348",
      badge: "",
      frequency: "/year",
      featureTagLine: "",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "5 automation workflows",
        "Email support",
      ],
    },
    {
      title: "Professional",
      subtitle: "Ideal for growing businesses",
      price: "$936",
      frequency: "/year",
      badge: "Popular",
      featureTagLine: "",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "Unlimited automation workflows",
        "Priority support",
        "API access",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "For large organizations",
      price: "$2,388",
      frequency: "/year",
      badge: "",
      featureTagLine: "",
      features: [
        "Unlimited team members",
        "Custom analytics",
        "Advanced security features",
        "Dedicated account manage",
        "Custom integrations",
      ],
    },
  ];
  return (
    <section className="relative z-10 w-full bg-white">
      <div className="relative flex flex-col items-center justify-center w-full pt-10 sm:pt-16 md:pt-24 app-container">
        <h1 className="sm:text-4xl md:text-6xl text-3xl font-semibold leading-10 sm:leading-[48px] sm:font-bold text-center md:leading-[80px] font-display text-typography-100">
          Clear, <span className="text-brand-100">simple pricing </span> built
          for <br className="hidden lg:block" />
          serious link builders
        </h1>
        <p className="mt-5 text-base leading-[1.5] md:leading-8 text-center sm:text-lg md:text-xl sm:mt-7 md:mt-10 font-display text-typography-75">
          Pick a plan that fits your workflow—no hidden fees, no surprises
        </p>

        <Tabs
          defaultValue="monthly"
          className="flex flex-col items-center justify-center w-full mt-6 sm:mt-12"
        >
          <TabsList className="h-full p-0 mb-10 sm:mb-20 bg-typography-10">
            <TabsTrigger
              value="monthly"
              className="data-[state=active]:bg-white font-display sm:text-base font-medium data-[state=active]:text-typography-100 bg-typography-10 border-[1px] px-5 sm:px-7 py-3 text-sm sm:py-4 data-[state=active]:border-[1px] data-[state=active]:border-typography-25 rounded-lg"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="annual"
              className="data-[state=active]:bg-white font-display sm:text-base font-medium data-[state=active]:text-typography-100 bg-typography-10 border-[1px] px-5 sm:px-7 py-3 text-sm sm:py-4 data-[state=active]:border-[1px] data-[state=active]:border-typography-25 rounded-lg"
            >
              Annual
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid w-full grid-cols-1 mx-auto mt-0 lg:grid-cols-3 sm:grid-cols-2 gap-7"
          >
            {monthlyPlanDetails.map((plan, ind) => {
              return <PricingCard key={ind} planDetails={plan} />;
            })}
          </TabsContent>
          <TabsContent
            value="annual"
            className="grid w-full grid-cols-1 mt-0 lg:grid-cols-3 sm:grid-cols-2 gap-7"
          >
            {yearlyPlanDetails.map((plan, ind) => {
              return <PricingCard key={ind} planDetails={plan} />;
            })}
          </TabsContent>
        </Tabs>
      </div>
      <div className="absolute pointer-events-none -z-10 top-10 -left-10 lg:-top-20 lg:-left-16">
        <AquaCircleSVG className="w-full h-full lg:max-w-[577px] lg:h-[741px]" />
      </div>
      <div className="-z-10 absolute -top-24 lg:-top-52 right-0 scale-x-[-1] pointer-events-none">
        <AquaCircleSVG className="w-full h-full lg:max-w-[577px] lg:h-[741px]" />
      </div>
      <div className="-z-10 absolute -bottom-80 xl:block hidden  right-0 scale-x-[-1] pointer-events-none">
        <AquaCircleSVG className="w-full h-full lg:max-w-[577px] lg:h-[741px]" />
      </div>
    </section>
  );
};

export default Hero;
