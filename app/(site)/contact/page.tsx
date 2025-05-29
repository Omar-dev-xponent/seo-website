import ContactFormSection from "./_components/contact-form";
import Faq from "./_components/faq";
import ContactHero from "./_components/hero";
import Map from "./_components/map";

export const metadata = {
  title: "Contact Outreachful - Get Help with Your Link-Building Strategy",
  description:
    "Reach our team for platform questions, partnership opportunities, or customized link-building solutions. We're here to help grow your backlink profile.",
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactFormSection />
      <Map />
      <Faq />
    </div>
  );
}
