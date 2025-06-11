import AquaCircleSVG from "@/components/svg-defs/AquaCircleSVG";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HiOutlineArrowDown } from "react-icons/hi";

const Faq = () => {
  const faqContent = [
    {
      id: 1,
      question: "What is a link-building SEO SaaS?",
      answer:
        "A link-building SEO SaaS is a software tool designed to help businesses improve their search engine rankings by simplifying the process of building high-quality backlinks.",
    },
    {
      id: 2,
      question: "How does link-building improve SEO?",
      answer:
        "A link-building SEO SaaS is a software tool designed to help businesses improve their search engine rankings by simplifying the process of building high-quality backlinks.",
    },
    {
      id: 3,
      question: "How does your tool simplify link-building?",
      answer:
        "A link-building SEO SaaS is a software tool designed to help businesses improve their search engine rankings by simplifying the process of building high-quality backlinks.",
    },
    {
      id: 4,
      question: "Does this tool integrate with other SEO platforms?",
      answer:
        "A link-building SEO SaaS is a software tool designed to help businesses improve their search engine rankings by simplifying the process of building high-quality backlinks.",
    },
  ];
  return (
    <section className="relative z-10">
      <div className="w-full max-w-3xl px-5 pt-8 mx-auto md:px-6 2xl:px-0 md:pt-24 sm:pt-12">
        <h2 className="mb-4 text-2xl font-semibold text-center sm:text-4xl font-display text-typography-100 sm:mb-7">
          Frequently Asked Question
        </h2>
        <p className="text-base text-center font-display text-typography-50">
          Quickly discover the best domains tailored to your keywords.
        </p>
        <Accordion type="single" collapsible className="mt-6 sm:mt-12">
          {faqContent.map((item, ind) => {
            return (
              <AccordionItem
                value={`item-${item.id}`}
                className="border-b-[1px] last:border-0 border-typography-25"
              >
                <AccordionTrigger
                  iconVisible={false}
                  className="font-medium text-left border-none text-md sm:text-lg group text-typography-100 font-display hover:no-underline"
                >
                  <span>{item.question}</span>{" "}
                  <span className="p-2 sm:p-3 rounded-full transition-colors bg-typography-10 group-data-[state=open]:bg-typography-100">
                    <HiOutlineArrowDown className="text-base transition-transform group-data-[state=open]:rotate-180 group-data-[state=open]:text-white" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base w-full sm:max-w-[75%] text-typography-50 font-display">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="absolute top-0 hidden pointer-events-none xl:block -z-10 -left-10 lg:-top-20 lg:-left-16">
        <AquaCircleSVG className="w-full h-full lg:max-w-[577px] lg:h-[741px]" />
      </div>
    </section>
  );
};

export default Faq;
