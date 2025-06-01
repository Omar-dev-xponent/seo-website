import Image from "next/image";
import React from "react";
import { FiCheck } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
interface Feature {
  title: string;
  subtitle: string;
  bulletList: string[];
  image: string;
}
interface FeatureCardProps {
  feature: Feature;
  className?: string;
}
const FeatureCard = ({ feature, className }: FeatureCardProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0",
        className
      )}
    >
      <div
        className={`md:w-1/2 ${className?.includes("md:flex-row-reverse") ? "" : "md:pr-10 lg:pr-36"}`}
      >
        <h4 className="text-lg font-semibold font-display sm:text-4xl text-typography-100">
          {feature.title}
        </h4>
        <p className="mt-3 text-sm font-display sm:text-lg text-typography-75 sm:mt-7">
          {feature.subtitle}
        </p>
        {feature.bulletList.length > 0 && (
          <ul className="mt-6 space-y-3 sm:mt-10">
            {feature.bulletList.map((item) => (
              <li className="flex space-x-2">
                <span className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 rounded-full font-display bg-brand-100">
                  <FiCheck className="text-white" />
                </span>
                <span className="text-sm sm:text-base text-typography-75">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        className={`p-6 md:w-1/2 max-h-[400px] max-w-[514px] bg-accent-1 sm:p-9 rounded-xl ${className?.includes("md:flex-row-reverse") ? "md:mr-10 lg:mr-36" : ""}`}
      >
        <Image
          src={feature.image}
          alt="feature"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
