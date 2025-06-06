import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingCard from "@/app/(site)/pricing/_components/pricing-card";
const Hero = () => {
  const planDetails = [
    {
      title: "Free plan",
      subtitle: "Perfect feet hobby project",
      price: "$0",
      badge: "",
      frequency: "",
      featureTagLine: "Everything in our free plan plus....",
      features: [
        "Access to basic features",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
      ],
    },
    {
      title: "Pro plan",
      subtitle: "Perfect feet hobby project",
      price: "$0",
      frequency: "monthly",
      badge: "",
      featureTagLine: "Everything in our free plan plus....",
      features: [
        "Access to basic features",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
      ],
    },
    {
      title: "Business Plan",
      subtitle: "Perfect feet hobby project",
      price: "$0",
      frequency: "yearly",
      badge: "",
      featureTagLine: "Everything in our free plan plus....",
      features: [
        "Access to basic features",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
      ],
    },
    {
      title: "Agency Plan",
      subtitle: "Perfect feet hobby project",
      price: "$0",
      frequency: "yearly",
      badge: "",
      featureTagLine: "Everything in our free plan plus....",
      features: [
        "Access to basic features",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
        "Unlimited link monitoring",
      ],
    },
  ];
  return (
    <section className="relative w-full bg-white">
      <div className="relative flex flex-col items-center justify-center w-full pt-10 sm:pt-16 md:pt-24 app-container">
        <h1 className="sm:text-4xl md:text-6xl text-3xl font-semibold leading-10 sm:leading-[48px] sm:font-bold text-center md:leading-[80px] font-display text-typography-100">
          Clear, <span className="text-brand-100">simple pricing </span> built
          for <br className="hidden lg:block" />
          serious link builderss
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
            className="grid w-full grid-cols-1 mt-0 lg:grid-cols-4 sm:grid-cols-2 gap-7"
          >
            {planDetails.map((plan, ind) => {
              return <PricingCard key={ind} planDetails={plan} />;
            })}
          </TabsContent>
          <TabsContent
            value="annual"
            className="grid w-full grid-cols-1 mt-0 lg:grid-cols-4 sm:grid-cols-2 gap-7"
          >
            {planDetails.map((plan, ind) => {
              return <PricingCard key={ind} planDetails={plan} />;
            })}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Hero;
