import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import DiamondCircleSVG from "@/app/(site)/_components/svg-defs/DiamondCircleSVG";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="relative flex flex-col items-center justify-center w-full py-10 sm:py-16 md:py-24 app-container">
        <h1 className="sm:text-4xl md:text-6xl text-3xl font-semibold leading-10 sm:leading-[48px] sm:font-bold text-center md:leading-[80px] font-display text-typography-100">
          Finally, the{" "}
          <span className="text-brand-100">
            all-in-one <br className="block sm:hidden" />{" "}
          </span>
           link-building <br className="hidden xl:block" /> platform built for
          SEOs
        </h1>
        <p className="mt-5 text-base leading-[1.5] md:leading-8 text-center sm:text-lg md:text-xl sm:mt-7 md:mt-10 font-display text-typography-75">
          Get built-in SEO metrics, instant contact discovery, simplified
          outreach, and <br className="hidden md:block" /> real-time backlink
          monitoring in one platform
        </p>
        <Link
          href={"#"}
          className="flex items-center px-4 py-3 mt-6 space-x-2 text-sm font-medium transition-all duration-300 rounded-md cursor-pointer md:mt-12 md:text-xl md:px-6 md:py-4 text-brand-5 hover:bg-background-hover bg-brand-100"
        >
          <span>Try free 14 days</span> <BsArrowRight />
        </Link>
        <span className="mt-3 text-base sm:mt-4 text-typography-50">
          No credit card required
        </span>
        <div className="max-w-5xl max-h-[600px] mt-6 sm:mt-8 md:mt-12 border-[1px] border-brand-100 rounded-xl overflow-hidden">
          <Image
            src={"/home/hero.png"}
            alt="hero"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute pointer-events-none top-10 -left-10 lg:-top-20 lg:-left-16">
        <DiamondCircleSVG className="w-full h-full lg:max-w-[577px] lg:h-[741px]" />
      </div>
      <div className="absolute -top-24 lg:-top-52 right-0 scale-x-[-1] pointer-events-none">
        <DiamondCircleSVG className="w-full h-full lg:max-w-[577px] lg:h-[741px]" />
      </div>
    </section>
  );
};

export default HeroSection;
