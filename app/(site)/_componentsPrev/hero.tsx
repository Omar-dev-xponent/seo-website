// @ts-nocheck
import config from "@/config";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import VideoSection from "../_components/video";

export default function HeroSection() {
  return (
    <section className="w-full py-12 bg-white md:py-24 lg:py-32">
      <div className="px-4 pt-20 pb-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:pt-32">
        <h1 className="max-w-4xl mx-auto text-5xl font-medium tracking-tight font-display text-slate-900 sm:text-7xl">
          Finally,{" "}
          <span className="relative whitespace-nowrap text-primary">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-teal-100"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">the all-in-one</span>
          </span>{" "}
          link-building platform—built for SEOs.
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg tracking-tight text-slate-700">
          Get built-in SEO metrics, instant contact discovery, simplified
          outreach, and real-time backlink monitoring in one platform.
        </p>
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-wrap justify-center gap-3 gap-x-6">
            <Link
              href={`${config.mainAppUrl}/dashboard`}
              className="inline-flex items-center justify-center px-8 py-2 text-sm font-medium transition-colors bg-teal-500 rounded-md min-w-max ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-teal-600 h-11"
            >
              Try FREE 14-days <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <VideoSection />
          </div>
          <p className="mt-4 text-sm text-slate-600">No credit card needed</p>
        </div>
        <div className="mt-36 lg:mt-44">
          <p className="text-base font-display text-slate-900">
            Trusted by these six companies so far
          </p>
          <ul
            role="list"
            className="flex items-center justify-center mt-8 gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            <li>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                <li className="flex">
                  <Image
                    src="/placeholder.svg?height=48&width=158"
                    alt="Transistor"
                    width={158}
                    height={48}
                  />
                </li>
                <li className="flex">
                  <Image
                    src="/placeholder.svg?height=48&width=105"
                    alt="Tuple"
                    width={105}
                    height={48}
                  />
                </li>
                <li className="flex">
                  <Image
                    src="/placeholder.svg?height=48&width=127"
                    alt="StaticKit"
                    width={127}
                    height={48}
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                <li className="flex">
                  <Image
                    src="/placeholder.svg?height=48&width=138"
                    alt="Mirage"
                    width={138}
                    height={48}
                  />
                </li>
                <li className="flex">
                  <Image
                    src="/placeholder.svg?height=48&width=136"
                    alt="Laravel"
                    width={136}
                    height={48}
                  />
                </li>
                <li className="flex">
                  <Image
                    src="/placeholder.svg?height=48&width=147"
                    alt="Statamic"
                    width={147}
                    height={48}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
