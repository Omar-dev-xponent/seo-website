import Image from "next/image";
import React from "react";

const CampaignFollowup = () => {
  const services = [
    { label: "Gmail", icon: "/icons/gmail.svg" },
    { label: "Outlook", icon: "/icons/outlook.png" },
    { label: "Google Sheet", icon: "/icons/sheet.svg" },
    { label: "Zapier", icon: "/icons/zapier.svg" },
    { label: "Calendly", icon: "/icons/calendly.svg" },
  ];
  return (
    <section className="px-4 xl:px-0">
      <div className="app-container bg-[url(/campaign/follow-up-bg.png)] py-7 sm:py-12 bg-cover bg-no-repeat bg-center rounded-xl">
        <h4 className="mb-4 text-xl font-semibold text-center sm:text-4xl sm:mb-7 font-display text-typography-100">
          Multiple email <br className="hidden sm:block" /> account support
        </h4>
        <p className="text-sm text-center sm:text-base font-display text-typography-75">
          Set it and forget it. Add 1–5 follow-up emails{" "}
          <br className="hidden sm:block" /> per contact with:{" "}
        </p>
        <div className="mt-4 sm:mt-12">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-9">
            {services.map((services, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#E4EEEE] w-14 h-14 flex items-center justify-center rounded-md"
                >
                  <Image
                    src={services.icon}
                    alt={services.label}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover w-auto h-auto"
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

export default CampaignFollowup;
