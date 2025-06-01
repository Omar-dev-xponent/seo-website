import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[900px] mx-auto">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Trusted by Top Agencies & SEO Professionals
            </h2>
            <p className="text-lg tracking-tight text-slate-700">
              Join hundreds of agencies and in-house SEO teams who have
              outreachfuld their link building process.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="rounded-full"
                />
                <div>
                  <CardTitle className="text-base font-medium text-slate-900">
                    Sarah Johnson
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600">
                    Marketing Director, TechCorp
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                "Outreachful has transformed how our marketing team
                collaborates. We've reduced meeting time by 35% and increased
                campaign output by 50%."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="rounded-full"
                />
                <div>
                  <CardTitle className="text-base font-medium text-slate-900">
                    Michael Chen
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600">
                    CTO, GrowthStart
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                "The automation features alone saved us countless hours. Our
                development team now focuses on innovation instead of repetitive
                tasks."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="rounded-full"
                />
                <div>
                  <CardTitle className="text-base font-medium text-slate-900">
                    Emily Rodriguez
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600">
                    Operations Manager, Elevate Inc
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                "Outreachful's analytics have given us insights we never had
                before. We've optimized our operations and reduced costs by
                22%."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
