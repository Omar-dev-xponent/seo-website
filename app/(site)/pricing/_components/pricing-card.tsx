import Link from "next/link";
import React from "react";
import { RxCheckCircled } from "react-icons/rx";

interface IPlanDetails {
  title: string;
  subtitle: string;
  price: string;
  frequency: string;
  badge: string;
  featureTagLine: string;
  features: string[];
}
const PricingCard = ({ planDetails }: { planDetails: IPlanDetails }) => {
  return (
    <div className="border-[1px] transition-all group overflow-hidden duration-300 hover:border-brand-100 bg-white border-typography-25 rounded-xl">
      <div className="p-4 transition-all duration-300 group-hover:bg-brand-100">
        <span className="text-sm sm:text-base group-hover:text-white text-typography-75 font-display">
          {planDetails.title}
        </span>
        <p className="my-3 space-x-1 text-3xl font-semibold sm:text-4xl sm:my-4 group-hover:text-white text-typography-100 font-display">
          {planDetails.price}{" "}
          <span className="text-sm font-normal group-hover:text-white text-typography-75">
            {planDetails.frequency}
          </span>
        </p>
        <p className="text-sm group-hover:text-white text-typography-50 font-display">
          {planDetails.subtitle}
        </p>
        <Link
          href={"#"}
          className="block py-4 mt-6 mb-4 font-medium text-center text-white group-hover:text-brand-100 group-hover:bg-white rounded-xl bg-brand-100 font-display hover:bg-background-hover sm:mt-7"
        >
          Join for free
        </Link>
      </div>
      <div className="border-t-[1px] border-typography-10 p-4">
        <p className="text-base font-medium font-display text-typography-100">
          Features
        </p>
        <p className="text-sm font-display text-typography-50">
          Everything in our free plan plus....
        </p>
        <ul>
          {planDetails.features.map((features, ind) => {
            return (
              <li
                key={ind}
                className="flex items-center mt-4 space-x-2 text-sm sm:space-x-3 sm:text-base font-display text-typography-75 sm:mt-7"
              >
                <RxCheckCircled className="text-xl sm:text-2xl text-brand-100 " />
                <span>{features}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
