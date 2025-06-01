import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoCheckCircle } from "react-icons/go";
import Image from "next/image";
const ValuePropositionSection = () => {
  const workflowComparison = [
    {
      title: "The old way",
      summary: "Slow, fragmented and inefficient",
      steps: [
        {
          label: "Prospecting",
          description:
            "Searching Google, copying URLs, checking SEO metrics in separate tools. (1-2 hours)",
          icon: IoCloseCircleOutline,
        },
        {
          label: "Contact discovery",
          description:
            "Hunting for emails, using verification tools, updating sheets. (1-1.5 hours)",
          icon: IoCloseCircleOutline,
        },
        {
          label: "Outreach",
          description:
            "Importing contacts, personalizing emails , tracking responses in sheets. (1-2 hours)",
          icon: IoCloseCircleOutline,
        },
        {
          label: "Monitoring & reporting",
          description:
            "Checking placements, building reports from scattered data. (30-60 mins)",
          icon: IoCloseCircleOutline,
        },
      ],
      timeBreakdownFooter: {
        label: "Total time spent per campaign",
        duration: " 4+ hours",
        icon: "/icons/gi-sands-time.svg",
      },
    },
    {
      title: "The outreachful way",
      summary: "Faster, smarter, all-in-one",
      steps: [
        {
          label: "Prospecting",
          description:
            "Instantly find high-quality sites in our built-in database, with SEO metrics preloaded. (5-10 mins)",
          icon: GoCheckCircle,
        },
        {
          label: "Contact discovery",
          description:
            " Auto-find & verify emails, add contacts to campaigns in one click. (2-5 mins)",
          icon: GoCheckCircle,
        },
        {
          label: "Outreach",
          description:
            "Use AI-generated templates, automate sequences, track everything in one dashboard. (10-15 mins",
          icon: GoCheckCircle,
        },
        {
          label: "Monitoring & reporting",
          description:
            "Automated tracking, instant client dashboards, one-click reports. (5 mins)",
          icon: GoCheckCircle,
        },
      ],
      timeBreakdownFooter: {
        label: "Total time per campaign",
        duration: "30 minutes",
        icon: "/icons/rocket.svg",
      },
    },
  ];

  return (
    <section className="bg-accent-1">
      <div className="py-5 sm:py-12 app-container">
        <h4 className="mb-3 text-xl font-semibold text-center sm:mb-10 sm:text-4xl font-display text-typography-100">
          Effortlessly build high-quality <br className="hidden sm:block" />{" "}
          backlinks <span className="text-brand-100">70% faster</span>
        </h4>
        <p className="text-sm text-center sm:text-lg text-typography-75 font-display">
          Get built-in SEO metrics, instant contact discovery, simplified
          outreach, <br className="hidden sm:block" /> and real-time backlink
          monitoring in one platform.
        </p>
        <div className="flex flex-col mt-6 space-y-4 sm:mt-12 md:space-x-6 md:space-y-0 md:flex-row">
          {workflowComparison.map((workflow, workflowIndex) => {
            return (
              <div
                className="w-full md:w-1/2 py-4 sm:py-6 bg-white rounded-xl border-[1px] border-typography-10 shadow-sm"
                key={workflowIndex}
              >
                <h4 className="mb-3 text-lg font-semibold text-center sm:text-2xl font-display text-typography-100">
                  {workflow.title}
                </h4>
                <p className="text-sm text-center sm:text-base text-typography-50 font-display">
                  {workflow.summary}
                </p>
                <ul className="mt-6">
                  {workflow.steps.map((step, stpesIndex) => {
                    return (
                      <li
                        key={stpesIndex}
                        className="px-3 sm:px-5 flex space-x-2 py-4 sm:py-6 border-t-[1px] border-typography-10"
                      >
                        <step.icon
                          className={`inline-block mt-1 flex-shrink-0 text-lg ${workflowIndex === 0 ? "text-[#F14369]" : "text-brand-100"}`}
                        />
                        <p>
                          <span className="text-sm font-medium sm:text-base text-typography-100 font-display">
                            {step.label}:
                          </span>{" "}
                          <span className="text-sm sm:text-base font-display text-typography-75">
                            {step.description}
                          </span>
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex items-center px-5 space-x-2 pt-7 border-t-[1px] border-typography-10">
                  <Image
                    src={workflow.timeBreakdownFooter.icon}
                    alt="icon"
                    width={22}
                    height={22}
                  />
                  <p className="text-sm font-semibold sm:text-base font-display text-typography-75">
                    {workflow.timeBreakdownFooter.label}:{" "}
                    {workflow.timeBreakdownFooter.duration}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
