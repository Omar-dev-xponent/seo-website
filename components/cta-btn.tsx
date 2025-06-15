import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

interface CTABtnProps {
  title: string;
  href?: string;
  className?: string;
}
const CTABtn = ({ title, className, href }: CTABtnProps) => {
  return (
    <Link
      href={href ? href : "/pricing"}
      className={twMerge(
        `flex items-center px-4 py-3 mt-6 space-x-2 text-sm font-medium transition-all duration-300 rounded-md cursor-pointer md:mt-12 font-display md:text-xl md:px-6 md:py-4 text-brand-5 hover:bg-background-hover bg-brand-100`,
        className
      )}
    >
      <span>{title}</span> <BsArrowRight />
    </Link>
  );
};

export default CTABtn;
