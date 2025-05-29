import React from "react";
import Image from "next/image";

interface OverviewCardProps {
  image: string;
  title: string;
  description: string;
  bgImage?: string;
}
const OverviewCard = ({
  image,
  title,
  description,
  bgImage,
}: OverviewCardProps) => {
  return (
    <div
      className="object-cover bg-center bg-no-repeat bg-cover px-7 pt-7 sm:pt-12 rounded-xl"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h4 className="mb-3 text-xl font-semibold text-center sm:mb-4 sm:text-4xl text-typography-100 font-display">
        {title}
      </h4>
      <p className="text-sm text-center sm:whitespace-pre-line sm:text-base font-display text-typography-75">
        {description}
      </p>
      <div className="flex items-center justify-center mt-5 sm:mt-12">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={image}
          alt="Overview Image"
          className="object-cover w-full h-auto max-w-4xl"
        />
      </div>
    </div>
  );
};

export default OverviewCard;
