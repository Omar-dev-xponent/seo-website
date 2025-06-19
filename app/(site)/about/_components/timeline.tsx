import React from "react";

export default function Timeline() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 text-sm bg-teal-100 rounded-lg text-primary">
              Our Journey
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              How we got here
            </h2>
            <p className="mx-auto max-w-[700px] text-lg text-slate-700">
              From a simple idea to a comprehensive link building platform
            </p>
          </div>
        </div>
        <div className="relative pl-8 mt-12 ml-4 border-l-2 border-primary/30 md:ml-12 md:pl-12">
          {/* Timeline Item 1 */}
          <div className="relative mb-12">
            <div className="absolute -left-[48px] md:-left-[65px] top-0 h-8 w-8 rounded-full bg-teal-100 border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium text-primary">Today</span>
              <h3 className="text-xl font-medium text-slate-900">
                Global Expansion
              </h3>
              <p className="text-slate-700">
                Now serving over 5,000 customers in 30+ countries, we continue
                to innovate and improve the platform based on user feedback.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative mb-12">
            <div className="absolute -left-[48px] md:-left-[65px] top-0 h-8 w-8 rounded-full bg-teal-100 border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium text-primary">2019</span>
              <h3 className="text-xl font-medium text-slate-900">
                The Beginning
              </h3>
              <p className="text-slate-700">
                Alex and Sarah founded Outreachful after experiencing the
                frustrations of managing link building campaigns across multiple
                tools and spreadsheets.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative mb-12">
            <div className="absolute -left-[48px] md:-left-[65px] top-0 h-8 w-8 rounded-full bg-teal-100 border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium text-primary">2020</span>
              <h3 className="text-xl font-medium text-slate-900">
                First Version Launch
              </h3>
              <p className="text-slate-700">
                We launched the first version of Outreachful with basic
                prospecting and outreach features, quickly gaining our first 100
                customers.
              </p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative mb-12">
            <div className="absolute -left-[48px] md:-left-[65px] top-0 h-8 w-8 rounded-full bg-teal-100 border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium text-primary">2021</span>
              <h3 className="text-xl font-medium text-slate-900">
                Series A Funding
              </h3>
              <p className="text-slate-700">
                Secured $5M in Series A funding to expand our team and
                accelerate product development, adding advanced monitoring and
                analytics features.
              </p>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="relative">
            <div className="absolute -left-[48px] md:-left-[65px] top-0 h-8 w-8 rounded-full bg-teal-100 border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium text-primary">2022</span>
              <h3 className="text-xl font-medium text-slate-900">
                AI Integration
              </h3>
              <p className="text-slate-700">
                Introduced AI-powered outreach templates and prospect analysis,
                revolutionizing how our users approach link building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
