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
      question:
        "Can I migrate my existing campaigns and prospect lists from other tools?",
      answer: `
Yes! Outreachful offers several import options. You can bulk import prospect lists from CSV/Excel files, and our system will automatically enrich them with SEO metrics and contact data. For existing campaigns, you can import your templates, prospect statuses, and outreach history. Our support team can help with complex migrations from popular tools like Pitchbox, BuzzStream, or custom spreadsheet systems.`,
    },
    {
      id: 2,
      question:
        "How does Outreachful's email integration protect my sending reputation?",
      answer: `When you connect your email accounts (Gmail, Outlook, or SMTP), Outreachful uses authenticated sending through official APIs rather than sending on your behalf. This means emails appear exactly as if you sent them directly from your inbox. We also implement smart sending limits, delivery timing optimization, and domain warming protocols to maintain your sender reputation. If you're sending high volumes, our system will automatically space out emails to avoid triggering spam filters.`,
    },
    {
      id: 3,
      question:
        "How exactly does the link monitoring system detect when links are removed?",
      answer: `Our monitoring system performs regular checks of all your placed backlinks (every 72 hours by default, but customizable). It detects various status changes including: complete removal, changed from dofollow to nofollow, addition of sponsored/UGC attributes, URL changes, and anchor text modifications. The system uses both direct HTML checking and header response analysis to minimize false positives. When a change is detected, you receive an immediate alert with the specific details of what changed.`,
    },
    {
      id: 4,
      question:
        "What happens to my data if I decide to cancel my subscription?",
      answer: `If you cancel your subscription, you'll have 30 days to export all your data including prospect lists, campaign history, and placement records. We provide comprehensive export options in CSV format that can be used with other tools. After 30 days, your data is securely deleted from our systems per our privacy policy. We never hold your data hostage - it's yours and you can take it with you.`,
    },
    {
      id: 5,
      question: "Can team members use their own email accounts for outreach?",
      answer: `Absolutely. Each team member can connect their individual email accounts to Outreachful while maintaining appropriate access controls. This allows your outreach specialists to send from their own professional email addresses, creating more personal connections with prospects. Team leaders can still access performance metrics and track all communications while team members maintain their individual sender identities.`,
    },
    {
      id: 6,
      question:
        "How does Outreachful handle different client billing and reporting cycles?",
      answer: `The platform allows you to set custom billing cycles and reporting schedules for each client. Whether you bill monthly, quarterly, or have unique arrangements with different clients, you can configure automated reports to align with these cycles. Reports can be scheduled to generate automatically and either be sent directly to clients or held for your review before sharing.`,
    },
    {
      id: 7,
      question:
        "Does Outreachful work for specialized or regulated niches like finance, healthcare, or gambling?",
      answer: `Yes, Outreachful is effective for specialized niches. You can create custom prospect qualification criteria specific to your industry requirements. For regulated industries, our compliance features help you maintain proper disclosure requirements in outreach communications. The platform also lets you tag and categorize sites by niche-specific criteria, allowing you to build targeted prospect lists for even the most specialized industries.`,
    },
    {
      id: 8,
      question:
        "How does the platform handle international link building campaigns?",
      answer: `Outreachful supports multi-language and international link building. You can filter prospects by country, language, and region. The platform supports email templates in any language and character set. For international teams, the interface is available in multiple languages including English, Spanish, French, and German. Time zone settings ensure your outreach campaigns are delivered at appropriate times regardless of geographic location.`,
    },
    {
      id: 9,
      question:
        "Can I customize the client portal to match my agency's branding?",
      answer: `Yes, on the Professional and Agency plans, you can fully customize the client portal with your agency's branding. This includes your logo, color scheme, custom domain, and even the terminology used within the interface. Clients will see your branding throughout their experience, with no mention of Outreachful. This white-label capability helps you maintain a consistent professional image with your clients.`,
    },
    {
      id: 10,
      question:
        "What security measures does Outreachful have in place to protect sensitive client data?",
      answer: `Outreachful employs enterprise-grade security including: end-to-end encryption for all data, two-factor authentication, role-based access controls, regular security audits, and secure API connections for all integrations. We are GDPR compliant and maintain strict data segregation between clients. Our system logs all access to sensitive information, allowing you to monitor any activity related to your client data.`,
    },
    {
      id: 11,
      question: "How can I track the ROI of my link building campaigns?",
      answer: `Outreachful includes comprehensive ROI tracking features that go beyond simple link counts. You can input campaign costs (including team time, content creation, and placement fees), then track results including: referring traffic from acquired links, ranking improvements for target keywords, conversion metrics when connected to your analytics, and custom KPIs specific to your goals. The system generates ROI reports that clearly demonstrate the value of your link building efforts to clients or stakeholders.`,
    },
    {
      id: 12,
      question:
        "Can I create custom workflows for different types of campaigns or clients?",
      answer: `Yes, Outreachful allows you to create and save custom campaign workflows tailored to different strategies or client needs. Whether you're running guest posting, resource link building, broken link building, or any other strategy, you can design templates with specific stages, approval processes, and follow-up sequences. These custom workflows can be applied to new campaigns with a single click, ensuring consistency while saving setup time.`,
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
                <AccordionContent className="text-sm sm:text-base w-full sm:max-w-[95%] text-justify text-typography-50 font-display">
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
