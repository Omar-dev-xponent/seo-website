import config from "@/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[900px] mx-auto">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Manage Your Entire Link Building Process in One Place
            </h2>
            <p className="text-lg tracking-tight text-slate-700">
              Stop juggling multiple tools and start building better links today
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href={`${config.mainAppUrl}/signin`}
              className="inline-flex items-center justify-center rounded-md px-8 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-teal-500 text-primary-foreground hover:bg-teal-600 h-11"
            >
              Try Free Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
