import Image from "next/image";
import React from "react";
import { FiCheck } from "react-icons/fi";
interface Feature {
  title: string;
  subtitle: string;
  bulletList: string[];
  image: string;
}
const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
      <div className="lg:pr-40">
        <h4 className="text-lg font-semibold sm:text-4xl text-typography-100">
          {feature.title}
        </h4>
        <p className="mt-3 text-sm sm:text-lg text-typography-75 sm:mt-7">
          {feature.subtitle}
        </p>
        <ul className="mt-6 space-y-3 sm:mt-10">
          {feature.bulletList.map((item) => (
            <li className="flex space-x-2">
              <span className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 rounded-full bg-brand-100">
                <FiCheck className="text-white" />
              </span>
              <span className="text-sm sm:text-base text-typography-75">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-accent-1 sm:p-9 rounded-xl">
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
