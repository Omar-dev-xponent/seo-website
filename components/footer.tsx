import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import DiamondCircleSVG from "@/components/svg-defs/AquaCircleSVG";
const Footer = () => {
  const socialLinks = [
    { label: "Facebook", icon: FaFacebook, path: "/" },
    { label: "Instagram", icon: RiInstagramFill, path: "/" },
    { label: "Twitter", icon: RiTwitterXFill, path: "/" },
    { label: "Youtube", icon: TbBrandYoutubeFilled, path: "/" },
  ];
  const legalLinks = [{ label: "Privacy and Policy", path: "/privacy-policy" }];
  const productLinks = [
    { label: "Site Database", path: "/site-database" },
    { label: "Client Portal", path: "/client-portal" },
    { label: "Prospecting", path: "/prospecting" },
    { label: "Filtering & Shortlisting", path: "/filtering-and-shortlisting" },
    { label: "Pitch Copy Manager", path: "/pitch-copy-manager" },
    { label: "Campaigns", path: "/campaign" },
    { label: "Reporting", path: "/reporting" },
    { label: "Integrations", path: "/integrations" },
    { label: "Team Management", path: "/team-management" },
    { label: "Link Monitoring", path: "/link-monitoring" },
  ];
  const resourcesLinks = [
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Testimonial", path: "/testimonials" },
    { label: "Pricing", path: "/pricing" },
    { label: "Blog", path: "/blog" },
  ];
  return (
    <footer className="relative z-10 overflow-hidden">
      <div className="app-container relative flex flex-wrap gap-8 justify-between border-t-[1px] border-typography-25 py-6 sm:pb-7 sm:pt-16">
        {/* footer div one */}
        <div className="flex flex-col justify-between order-4 w-full lg:w-auto gap-9 lg:order-1">
          <div>
            <h6 className="text-xl font-semibold sm:text-4xl font-display text-brand-100">
              Outreachful
            </h6>
            <p className="mt-2 text-sm sm:text-base sm:mt-4 text-typography-75 font-display">
              Copyright &copy; Outreachfull {new Date().getFullYear()}. All
              rights reserved
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, ind) => {
                return (
                  <Link
                    href={link.path}
                    className="inline-block p-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-background-hover bg-brand-100"
                    key={ind}
                  >
                    <link.icon className="text-base text-white" />
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center mt-3 space-x-1 sm:mt-4">
              {legalLinks.map((link, ind) => {
                return (
                  <Link
                    href={link.path}
                    className="text-sm duration-300 cursor-pointer sm:text-base text-typography-75 font-display hover:text-typography-100 translition-all"
                    key={ind}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* footer div two */}
        <div className="order-1 lg:order-2">
          <h6 className="mb-6 text-xl font-medium sm:mb-7 text-typography-100 font-display">
            Product
          </h6>
          <ul className="space-y-4">
            {productLinks.map((link, ind) => {
              return (
                <li
                  key={ind}
                  className="text-sm transition-all duration-300 sm:text-base text-typography-75 font-display hover:text-typography-100"
                >
                  <Link href={link.path}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* footer div three */}
        <div className="order-2 lg:order-3">
          <h6 className="mb-6 text-xl font-medium sm:mb-7 text-typography-100 font-display">
            Resource
          </h6>
          <ul className="space-y-4">
            {resourcesLinks.map((link, ind) => {
              return (
                <li
                  key={ind}
                  className="text-sm transition-all duration-300 sm:text-base text-typography-75 font-display hover:text-typography-100"
                >
                  <Link href={link.path}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* footer div four */}
        <div className="order-3 lg:order-4">
          <h6 className="mb-6 text-xl font-medium sm:mb-7 text-typography-100 font-display">
            Payment Method
          </h6>
          <Image
            src={"/payment-method.png"}
            alt="Payment Methods"
            width={177}
            height={58}
          />
        </div>
      </div>
      <div className="-z-10 absolute right-0 -bottom-28 sm:-bottom-56 scale-x-[-1] pointer-events-none">
        <DiamondCircleSVG className="w-full h-full lg:max-w-[577px] lg:h-[741px]" />
      </div>
      <div className="absolute left-0 hidden pointer-events-none -z-10 sm:block -top-32">
        <DiamondCircleSVG className="w-full h-full lg:max-w-[577px] lg:h-[741px]" />
      </div>
    </footer>
  );
};

export default Footer;
