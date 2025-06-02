import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="relative flex flex-col items-center justify-center w-full pt-10 sm:pt-16 md:pt-24 app-container">
        <h1 className="sm:text-4xl md:text-6xl text-3xl font-semibold leading-10 sm:leading-[48px] sm:font-bold text-center md:leading-[80px] font-display text-typography-100">
          <span className="text-brand-100">Impress clients</span> with clean,{" "}
          <br />
          branded, <span className="text-brand-100">easy to read</span> reports
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
    </section>
  );
};

export default Hero;
