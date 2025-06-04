import Image from "next/image";
import React from "react";
import { LuClock } from "react-icons/lu";
const LatestBlogCard = () => {
  return (
    <div className="app-container">
      <h3 className="mb-4 text-2xl font-semibold text-center sm:mb-6 sm:text-4xl font-display text-typography-100">
        Our Super Blog
      </h3>
      <p className="text-base text-center font-display text-typography-50">
        Quickly discover the best domains tailored to your keywords.
      </p>
      <div className="w-full h-full overflow-hidden mt-7 sm:mt-12 rounded-2xl">
        <Image
          src={"/blog/blog01.png"}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <p className="flex items-center my-5 space-x-1 text-sm sm:my-7 text-typography-50 font-display sm">
        <LuClock className="text-base" /> <span>5 mins read</span>
      </p>
      <p className="text-xl font-medium sm:text-2xl text-typography-100 font-display">
        Lorem Ipsum Lorem Ipsum
      </p>
      <p className="my-4 text-sm sm:text-base sm:my-6 font-display text-typography-50">
        A link-building SEO SaaS is a software tool designed to help businesses
        improve their search engine rankings.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {["Link Building", "Backlink", "Google ads"].map((item, ind) => {
          return (
            <p className="px-3 py-1 text-sm font-display rounded-2xl bg-brand-10 text-brand-100 border-[1px] border-brand-100">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default LatestBlogCard;
