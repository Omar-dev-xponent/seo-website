import React from "react";

export default function Faq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto max-w-[700px] text-lg text-slate-700">
              Can't find the answer you're looking for? Reach out to our
              customer support team.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-slate-900">
              What are your support hours?
            </h3>
            <p className="text-slate-700">
              Our support team is available Monday through Friday from 8am to
              8pm EST, and Saturday from 9am to 5pm EST.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-slate-900">
              How quickly do you respond to emails?
            </h3>
            <p className="text-slate-700">
              We aim to respond to all inquiries within 24 hours during business
              days. Most customers receive a response within 4-6 hours.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-slate-900">
              Do you offer phone support?
            </h3>
            <p className="text-slate-700">
              Yes, phone support is available for all customers on the
              Professional and Enterprise plans. Starter plan customers can
              purchase phone support as an add-on.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-slate-900">
              Can I schedule a demo?
            </h3>
            <p className="text-slate-700">
              We offer personalized demos for teams interested in our
              Professional and Enterprise plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
