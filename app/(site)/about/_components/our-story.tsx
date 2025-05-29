import Image from "next/image";
import React from "react";

export default function OurStory() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-primary">
              Our Story
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              From frustration to innovation
            </h2>
            <p className="text-lg text-slate-700">
              Outreachful was born out of frustration. As SEO professionals
              ourselves, we were tired of juggling multiple tools, spreadsheets,
              and platforms to manage our link building campaigns.
            </p>
            <p className="text-lg text-slate-700">
              In 2019, our founders Alex Chen and Sarah Johnson decided there
              had to be a better way. They set out to build the all-in-one link
              building platform they wished existed—combining prospecting,
              outreach, and monitoring in one seamless tool.
            </p>
            <p className="text-lg text-slate-700">
              What started as a simple tool for their own agency quickly gained
              attention from other SEO professionals. Today, Outreachful helps
              hundreds of agencies and in-house teams outreachful their link
              building process and achieve better results with less effort.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Outreachful founders"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
