import Image from "next/image";
import React from "react";
const TestimonialCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl border-[1px] border-typography-10">
      <Image src={"/icons/qoute.svg"} alt="quote" width={36} height={36} />
      <p className="my-6 text-base font-display text-typography-75">
        This site database alone is worth the subscription. I can filter by
        niche, pitch quality sites, and build my campaigns faster than ever
        before.
      </p>
      <div className="flex  space-x-3 border-t-[1px] border-typography-10 pt-4">
        <div>
          <Image
            src={"/avatar.png"}
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full oject-cover"
          />
        </div>
        <div>
          <p className="text-base font-medium font-display">Rasel Ahmed</p>
          <p className="text-sm font-display text-typography-50">
            SEO Specialist
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
