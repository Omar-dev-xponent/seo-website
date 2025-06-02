import Image from "next/image";
import React from "react";

const BrandSection = () => {
  const brands = [
    { name: "Indeed", logo: "/brand/indeed.png" },
    { name: "Microsoft", logo: "/brand/microsoft.png" },
    { name: "LinkedIn", logo: "/brand/linkedin.png" },
    { name: "Hunter", logo: "/brand/hunter.png" },
    { name: "Facebook", logo: "/brand/facebook.png" },
    { name: "Figma", logo: "/brand/figma.png" },
  ];
  return (
    <section className="py-10 sm:py-24 app-container">
      <h6 className="text-xl font-semibold text-center sm:text-2xl font-display text-typography-50">
        Trusted by leading companies
      </h6>
      <div className="flex flex-wrap items-center justify-center mt-5 gap-y-5 gap-x-6 sm:gap-x-12 sm:mt-10">
        {brands.map((brand, ind) => {
          return (
            <div key={ind} className="h-4 max-w-20 sm:max-w-36 sm:h-7">
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
    </section>
  );
};

export default BrandSection;
