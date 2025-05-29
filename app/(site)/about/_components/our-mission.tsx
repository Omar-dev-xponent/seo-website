import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function OurMission() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-primary">
              Our Mission
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Simplifying link building for everyone
            </h2>
            <p className="text-lg text-slate-700">
              Our mission is to make professional link building accessible,
              efficient, and effective for everyone. We believe that by
              simplifying the process, we can help businesses of all sizes
              improve their online visibility and achieve their growth goals.
            </p>
          </div>
          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <Card className="bg-white">
              <CardContent className="p-6 space-y-2">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-slate-900">
                  Innovation
                </h3>
                <p className="text-slate-700">
                  We're constantly pushing the boundaries of what's possible in
                  link building technology, bringing new ideas and solutions to
                  the market.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 space-y-2">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-slate-900">
                  Integrity
                </h3>
                <p className="text-slate-700">
                  We believe in ethical link building practices and provide
                  tools that help our users build high-quality, valuable links
                  that benefit both parties.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 space-y-2">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-slate-900">
                  Community
                </h3>
                <p className="text-slate-700">
                  We're building more than just a tool—we're creating a
                  community of link building professionals who share knowledge
                  and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
