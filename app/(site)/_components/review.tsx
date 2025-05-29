import Image from "next/image";
import React from "react";
const ReviewSection = () => {
  return (
    <section className="app-container">
      <div
        className="relative flex flex-col-reverse items-center object-cover p-12 space-x-10 bg-center bg-cover rounded-xl md:flex-row "
        style={{ backgroundImage: "url('/customer-review-bg.png')" }}
      >
        <div className="flex-shrink-0 w-12 h-12 md:w-48 md:h-48 ">
          <Image
            src={"/customer01.png"}
            alt="cutomer"
            width={0}
            height={0}
            className="object-cover w-full h-full rounded-full md:rounded-lg"
          />
        </div>
        <div className="z-20">
          <p className="max-w-2xl text-xl italic font-medium text-typography-75 font-display">
            We've tried several link-building tools, but none are as
            user-friendly and effective as this one. The integration with our
            existing workflow was seamless, and the results have been
            outstanding!"
          </p>
          <p className="hidden mt-6 text-base font-medium md:block text-typography-50">
            Mitchel Starc, CEO
          </p>
        </div>
        <Image
          src={"/icons/left-qoute.svg"}
          alt="qoute"
          width={250}
          height={250}
          className="absolute top-0 z-10 hidden pointer-events-none right-40 lg:block"
        />
      </div>
    </section>
  );
};

export default ReviewSection;
