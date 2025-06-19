import Hero from "@/app/(site)/testimonials/_components/hero";
import TrialCTA from "@/components/trial-cta";
import TestimonialCard from "@/components/testimonials";

const Testimonials = () => {
  return (
    <>
      <Hero />
      <section className="pt-8 md:pt-24 sm:pt-12">
        <div className="app-container">
          <h4 className="text-2xl leading-[1.4] sm:text-3xl sm:leading-10 md:text-5xl font-semibold text-center text-typography-100 md:leading-[62px] font-display">
            Trusted by businesses{" "}
            <span className="text-brand-100">worldwide</span>
          </h4>
          <p className="mt-4 text-base text-center sm:mt-6 sm:text-xl font-display text-typography-50">
            Discover how we’ve helped businesses like yours achieve success
          </p>
          <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <TestimonialCard key={index} />
            ))}
          </div>
        </div>
      </section>
      <TrialCTA
        title={`Lock in 30% off for 3 months. \n limited time only!`}
        description={`Start risk-free with free migration assistance and a 30-day \n money-back guarantee`}
      />
    </>
  );
};

export default Testimonials;
