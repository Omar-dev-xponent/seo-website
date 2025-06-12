import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import VideoPlayer from "@/components/video-player";

const ClientPortalHero = () => {
  const brands = [
    { name: "Indeed", logo: "/brand/indeed.png" },
    { name: "Microsoft", logo: "/brand/microsoft.png" },
    { name: "LinkedIn", logo: "/brand/linkedin.png" },
    { name: "Hunter", logo: "/brand/hunter.png" },
    { name: "Facebook", logo: "/brand/facebook.png" },
    { name: "Figma", logo: "/brand/figma.png" },
  ];
  return (
    <section className="bg-[url(/client-portal/client-portal-hero-bg.png)] sm:py-10 py-8 md:py-20 bg-cover bg-no-repeat bg-center w-full">
      <div className="app-container">
        <div className="flex flex-col items-center justify-between w-full md:flex-row gap-7 md:gap-10 ">
          {/* hero content */}
          <div className="flex flex-col items-center justify-center w-full md:justify-start md:items-start md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-left text-center lg:text-6xl font-semibold lg:leading-[1.3] font-display text-typography-100">
              Client{" "}
              <span className="text-brand-100">
                orders, chat <br className="hidden xl:block" /> & reports
              </span>{" "}
              unified
            </h1>
            <p className="mt-5 text-base text-center md:text-left sm:text-lg md:text-xl sm:mt-7 font-display text-typography-75">
              See how teams and clients are transforming their{" "}
              <br className="hidden lg:block" /> outreach with our platform.
            </p>
            <button>
              <Link
                href={"#"}
                className="flex items-center px-4 py-3 mt-6 space-x-2 text-sm font-medium transition-all duration-300 rounded-md cursor-pointer md:mt-10 font-display md:text-xl md:px-6 md:py-4 text-brand-5 hover:bg-background-hover bg-brand-100"
              >
                <span>Try free 14 days</span> <BsArrowRight />
              </Link>
            </button>
            <p className="mt-4 text-base font-display text-typography-50">
              No credit card required
            </p>
          </div>
          {/* hero image  */}
          <div className="flex items-center justify-center w-full md:justify-end md:w-1/2">
            <VideoPlayer
              thumbnailSrc="/client-portal/hero.png"
              videoSrc="https://www.youtube.com/embed/-RLgdfDdCMo?si=XBOS3ZpbMIHmaxw9&autoplay=1"
              className="w-full max-w-[467px] max-h-[350px]"
            />
          </div>
        </div>
        {/* brands-- */}
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-6 items-center mt-7 sm:mt-10  md:mt-[90px]">
          <p className="flex-shrink-0 text-base font-medium font-display text-typography-75 md:text-typography-100">
            Trusted by <br className="hidden md:block" /> leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {brands.map((brand, ind) => {
              return (
                <div key={ind} className="h-4 max-w-20 sm:max-w-24 sm:h-5">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalHero;
