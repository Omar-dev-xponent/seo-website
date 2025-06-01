import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[900px] mx-auto">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg tracking-tight text-slate-700">
              Everything you need to know about Outreachful and our link
              building platform
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                Can I migrate my existing campaigns and prospect lists from
                other tools?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Outreachful offers several import options. You can bulk
                import prospect lists from CSV/Excel files, and our system will
                automatically enrich them with SEO metrics and contact data. For
                existing campaigns, you can import your templates, prospect
                statuses, and outreach history. Our support team can help with
                complex migrations from popular tools like Pitchbox, BuzzStream,
                or custom spreadsheet systems.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                How does Outreachful's email integration protect my sending
                reputation?
              </AccordionTrigger>
              <AccordionContent>
                When you connect your email accounts (Gmail, Outlook, or SMTP),
                Outreachful uses authenticated sending through official APIs
                rather than sending on your behalf. This means emails appear
                exactly as if you sent them directly from your inbox. We also
                implement smart sending limits, delivery timing optimization,
                and domain warming protocols to maintain your sender reputation.
                If you're sending high volumes, our system will automatically
                space out emails to avoid triggering spam filters.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                How exactly does the link monitoring system detect when links
                are removed?
              </AccordionTrigger>
              <AccordionContent>
                Our monitoring system performs regular checks of all your placed
                backlinks (every 72 hours by default, but customizable). It
                detects various status changes including: complete removal,
                changed from dofollow to nofollow, addition of sponsored/UGC
                attributes, URL changes, and anchor text modifications. The
                system uses both direct HTML checking and header response
                analysis to minimize false positives. When a change is detected,
                you receive an immediate alert with the specific details of what
                changed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                What happens to my data if I decide to cancel my subscription?
              </AccordionTrigger>
              <AccordionContent>
                If you cancel your subscription, you'll have 30 days to export
                all your data including prospect lists, campaign history, and
                placement records. We provide comprehensive export options in
                CSV format that can be used with other tools. After 30 days,
                your data is securely deleted from our systems per our privacy
                policy. We never hold your data hostage - it's yours and you can
                take it with you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                Can team members use their own email accounts for outreach?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. Each team member can connect their individual email
                accounts to Outreachful while maintaining appropriate access
                controls. This allows your outreach specialists to send from
                their own professional email addresses, creating more personal
                connections with prospects. Team leaders can still access
                performance metrics and track all communications while team
                members maintain their individual sender identities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                How does Outreachful handle different client billing and
                reporting cycles?
              </AccordionTrigger>
              <AccordionContent>
                The platform allows you to set custom billing cycles and
                reporting schedules for each client. Whether you bill monthly,
                quarterly, or have unique arrangements with different clients,
                you can configure automated reports to align with these cycles.
                Reports can be scheduled to generate automatically and either be
                sent directly to clients or held for your review before sharing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-7">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                Does Outreachful work for specialized or regulated niches like
                finance, healthcare, or gambling?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Outreachful is effective for specialized niches. You can
                create custom prospect qualification criteria specific to your
                industry requirements. For regulated industries, our compliance
                features help you maintain proper disclosure requirements in
                outreach communications. The platform also lets you tag and
                categorize sites by niche-specific criteria, allowing you to
                build targeted prospect lists for even the most specialized
                industries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                How does the platform handle international link building
                campaigns?
              </AccordionTrigger>
              <AccordionContent>
                Outreachful supports multi-language and international link
                building. You can filter prospects by country, language, and
                region. The platform supports email templates in any language
                and character set. For international teams, the interface is
                available in multiple languages including English, Spanish,
                French, and German. Time zone settings ensure your outreach
                campaigns are delivered at appropriate times regardless of
                geographic location.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                Can I customize the client portal to match my agency's branding?
              </AccordionTrigger>
              <AccordionContent>
                Yes, on the Professional and Agency plans, you can fully
                customize the client portal with your agency's branding. This
                includes your logo, color scheme, custom domain, and even the
                terminology used within the interface. Clients will see your
                branding throughout their experience, with no mention of
                Outreachful. This white-label capability helps you maintain a
                consistent professional image with your clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                What security measures does Outreachful have in place to protect
                sensitive client data?
              </AccordionTrigger>
              <AccordionContent>
                Outreachful employs enterprise-grade security including:
                end-to-end encryption for all data, two-factor authentication,
                role-based access controls, regular security audits, and secure
                API connections for all integrations. We are GDPR compliant and
                maintain strict data segregation between clients. Our system
                logs all access to sensitive information, allowing you to
                monitor any activity related to your client data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                How can I track the ROI of my link building campaigns?
              </AccordionTrigger>
              <AccordionContent>
                Outreachful includes comprehensive ROI tracking features that go
                beyond simple link counts. You can input campaign costs
                (including team time, content creation, and placement fees),
                then track results including: referring traffic from acquired
                links, ranking improvements for target keywords, conversion
                metrics when connected to your analytics, and custom KPIs
                specific to your goals. The system generates ROI reports that
                clearly demonstrate the value of your link building efforts to
                clients or stakeholders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger className="flex w-full items-center justify-between text-left">
                Can I create custom workflows for different types of campaigns
                or clients?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Outreachful allows you to create and save custom campaign
                workflows tailored to different strategies or client needs.
                Whether you're running guest posting, resource link building,
                broken link building, or any other strategy, you can design
                templates with specific stages, approval processes, and
                follow-up sequences. These custom workflows can be applied to
                new campaigns with a single click, ensuring consistency while
                saving setup time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
