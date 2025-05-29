import React from "react";

export default function ContactHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-slate-700 md:text-xl">
              Have questions about Outreachful? We're here to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
