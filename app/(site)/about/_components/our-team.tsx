import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurTeam() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-primary">
              Our Team
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Meet the people behind Outreachful
            </h2>
            <p className="mx-auto max-w-[700px] text-lg text-slate-700">
              Our diverse team of experts is passionate about SEO, link
              building, and creating amazing user experiences.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Alex Chen"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-slate-900">Alex Chen</h3>
              <p className="text-sm text-primary">Co-Founder & CEO</p>
              <p className="mt-2 text-sm text-slate-700">
                Former SEO agency owner with 10+ years of experience in digital
                marketing.
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Sarah Johnson"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-slate-900">
                Sarah Johnson
              </h3>
              <p className="text-sm text-primary">Co-Founder & CTO</p>
              <p className="mt-2 text-sm text-slate-700">
                Software engineer with a passion for creating tools that solve
                real problems.
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Michael Rodriguez"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-slate-900">
                Michael Rodriguez
              </h3>
              <p className="text-sm text-primary">Head of Product</p>
              <p className="mt-2 text-sm text-slate-700">
                Product manager with experience at leading SaaS companies.
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Emily Zhang"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-slate-900">
                Emily Zhang
              </h3>
              <p className="text-sm text-primary">Head of Customer Success</p>
              <p className="mt-2 text-sm text-slate-700">
                Customer success expert dedicated to helping our users achieve
                their goals.
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
