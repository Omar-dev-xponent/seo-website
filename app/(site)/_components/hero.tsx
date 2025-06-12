"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import AquaCircleSVG from "@/components/svg-defs/AquaCircleSVG";

const HeroSection = () => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  return (
    <section className="relative z-10 w-full bg-white">
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
          className="flex items-center px-4 py-3 mt-6 space-x-2 text-sm font-medium transition-all duration-300 rounded-md cursor-pointer md:mt-12 font-display md:text-xl md:px-6 md:py-4 text-brand-5 hover:bg-background-hover bg-brand-100"
        >
          <span>Try free 14 days</span> <BsArrowRight />
        </Link>
        <span className="mt-3 text-base font-display sm:mt-4 text-typography-50">
          No credit card required
        </span>
        <div className="max-w-5xl cursor-pointer relative max-h-[600px] mt-6 sm:mt-8 md:mt-12 border-[1px] border-brand-100 rounded-xl overflow-hidden">
          <Image
            src={"/home/hero.png"}
            alt="hero"
            width={0}
            height={0}
            sizes="100vw"
            className={`w-full h-auto ${playVideo ? "invisible" : "visible"}`}
          />
          <button
            onClick={() => setPlayVideo(true)}
            className={`absolute flex items-center justify-center w-10 h-10 p-0 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer md:p-5 md:w-16 md:h-16 hover:bg-background-hover bg-brand-100 top-1/2 left-1/2 ${playVideo ? "invisible" : "visible"}`}
          >
            <div className="w-3.5 h-3.5 mb-0.5 md:w-6 md:h-6">
              <Image
                src={"/icons/play.svg"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                alt="play button"
              />
            </div>
          </button>

          <iframe
            width="100%"
            height="100%"
            className={`rounded-xl absolute inset-0 ${playVideo ? "block" : "hidden"}`}
            src="https://www.youtube.com/embed/-RLgdfDdCMo?si=XBOS3ZpbMIHmaxw9&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>

      <div className="absolute pointer-events-none -z-10 top-10 -left-10 lg:-top-20 lg:-left-16 w-full h-full max-w-[232px] max-h-[320px] xl:max-w-[577px] xl:max-h-[741px]">
        <AquaCircleSVG />
      </div>
      <div className="-z-10 absolute -top-20 xl:-top-52 right-0 scale-x-[-1] pointer-events-none w-full h-full max-w-[232px] max-h-[320px] xl:max-w-[577px] xl:max-h-[741px]">
        <AquaCircleSVG />
      </div>
    </section>
  );
};

export default HeroSection;
