import PurpleCircleSVG from "@/components/svg-defs/PurpleCircleSVG";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
const FilteringAndShortlistingHero = () => {
  return (
    <section className="relative z-10 w-full bg-white">
      <div className="relative flex flex-col items-center justify-center w-full pt-10 sm:pt-16 md:pt-24 app-container">
        <h1 className="sm:text-4xl md:text-6xl text-3xl font-semibold leading-10 sm:leading-[48px] sm:font-bold text-center md:leading-[80px] font-display text-typography-100">
          Streamline your link-building <br className="hidden lg:block" />{" "}
          process with <span className="text-brand-100">smart filtering</span>
        </h1>
        <p className="mt-5 text-base leading-[1.5] md:leading-8 text-center sm:text-lg md:text-xl sm:mt-7 md:mt-10 font-display text-typography-75">
          Find, qualify, and organize link opportunities faster, smarter, and at
          scale.
        </p>
        <Link
          href={"#"}
          className="flex items-center px-4 py-3 mt-6 space-x-2 text-sm font-medium transition-all duration-300 rounded-md cursor-pointer md:mt-12 font-display md:text-xl md:px-6 md:py-4 text-brand-5 hover:bg-background-hover bg-brand-100"
        >
          <span>Try free 14 days</span> <BsArrowRight />
        </Link>
        <span className="mt-3 text-base font-display sm:mt-4 text-typography-50">
          No credit card required
        </span>
      </div>
      <div className="absolute pointer-events-none -z-10 top-10 -left-10 lg:-top-20 lg:-left-16">
        <PurpleCircleSVG className="w-full h-full lg:max-w-[577px] lg:h-[741px]" />
      </div>
      <div className="-z-10 absolute -top-24 lg:-top-52 right-0 scale-x-[-1] pointer-events-none">
        <PurpleCircleSVG className="w-full h-full lg:max-w-[577px] lg:h-[741px]" />
      </div>
    </section>
  );
};

export default FilteringAndShortlistingHero;
