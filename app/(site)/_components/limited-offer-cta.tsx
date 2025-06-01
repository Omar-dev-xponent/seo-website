import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
const LimitedOfferCtaSection = () => {
  return (
    <section className="px-4 pt-10 pb-6 bg-white sm:pt-24 sm:pb-16 xl:px-0 ">
      <div
        className="relative flex flex-col items-center justify-center object-cover py-6 overflow-hidden bg-center bg-cover sm:py-12 rounded-2xl bg-green-50 app-container bg-[url(/limited-offer-cta-bg-sm.svg)]  sm:bg-[url(/limited-offer-cta-bg.svg)]"
        // style={{ backgroundImage: "url('/limited-offer-cta-bg.svg')" }}
      >
        <h4 className="text-lg font-semibold text-center text-white sm:text-4xl font-display">
          Lock in 30% off for 3 months. <br className="hidden sm:block" />{" "}
          Limited time only!
        </h4>
        <p className="mt-4 text-sm text-center sm:text-base font-display sm:mt-7 text-typography-10">
          Start risk-free with free migration assistance and a 30-day{" "}
          <br className="hidden sm:block" /> money-back guarantee
        </p>
        <Link
          href={"#"}
          className="flex items-center px-4 py-3 mt-5 space-x-2 text-sm font-medium transition-all duration-300 rounded-md cursor-pointer sm:mt-8 md:mt-12 font-display md:text-xl md:px-6 md:py-4 text-brand-5 hover:bg-background-hover bg-brand-100"
        >
          <span>Try free 14 days</span> <BsArrowRight />
        </Link>
        <div className="w-full h-5 max-w-16 sm:max-w-28 sm:h-9 absolute bottom-8 sm:bottom-12 transform translate-x-[190%]">
          <Image
            src="/icons/curve-arrow.svg"
            alt="curve"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LimitedOfferCtaSection;
