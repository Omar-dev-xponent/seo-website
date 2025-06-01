import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
const ClientPortalHero = () => {
  return (
    <section className="bg-[url(/client-portal/client-portal-hero-bg.png)] py-20 bg-cover bg-no-repeat bg-center w-full">
      <div className="app-container">
        <div>
          <h1 className="text-6xl font-semibold font-display text-typography-100">
            Client{" "}
            <span className="text-brand-100">
              orders, chat <br /> & reports
            </span>{" "}
            unified
          </h1>
          <p className="mt-8 text-xl font-display text-typography-75">
            See how teams and clients are transforming their <br /> outreach
            with our platform.
          </p>
          <button>
            <Link
              href={"#"}
              className="flex items-center px-4 py-3 mt-6 space-x-2 text-sm font-medium transition-all duration-300 rounded-md cursor-pointer md:mt-12 font-display md:text-xl md:px-6 md:py-4 text-brand-5 hover:bg-background-hover bg-brand-100"
            >
              <span>Try free 14 days</span> <BsArrowRight />
            </Link>
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ClientPortalHero;
