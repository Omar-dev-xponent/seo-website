import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import config from "@/config";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[900px] mx-auto">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Simple pricing, for everyone
            </h2>
            <p className="text-lg tracking-tight text-slate-700">
              Choose the plan that's right for your business
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-medium text-slate-900">
                Starter
              </CardTitle>
              <div className="text-3xl font-bold text-slate-900">
                $29
                <span className="text-sm font-normal text-slate-400">
                  /month
                </span>
              </div>
              <CardDescription className="text-sm text-slate-600">
                Perfect for small teams and startups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Up to 5 team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>5 automation workflows</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-semibold">
                <Link
                  href={`${config.mainAppUrl}/dashboard?redirect=/settings/billing/change-plan`}
                >
                  Get Started
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-primary relative">
            <CardHeader>
              <Badge className="absolute right-4 top-4">Popular</Badge>
              <CardTitle className="text-xl font-medium text-slate-900">
                Professional
              </CardTitle>
              <div className="text-3xl font-bold text-slate-900">
                $79
                <span className="text-sm font-normal text-slate-400">
                  /month
                </span>
              </div>
              <CardDescription className="text-sm text-slate-600">
                Ideal for growing businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Up to 20 team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Unlimited automation workflows</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>API access</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-semibold">
                <Link
                  href={`${config.mainAppUrl}/dashboard?redirect=/settings/billing/change-plan`}
                >
                  Get Started
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-medium text-slate-900">
                Enterprise
              </CardTitle>
              <div className="text-3xl font-bold text-slate-900">
                $199
                <span className="text-sm font-normal text-slate-400">
                  /month
                </span>
              </div>
              <CardDescription className="text-sm text-slate-600">
                For large organizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Custom analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced security features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Custom integrations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-semibold">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
