"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import config from "@/config";

export function CalculatorSection() {
  const [formData, setFormData] = useState({
    teamSize: "",
    hourlyRate: "",
    currency: "GBP",
    activities: {
      hunting: "",
      checking: "",
      managing: "",
      finding: "",
      running: "",
      tracking: "",
    },
  });

  // Calculate total hours and savings
  const totalHours = Object.values(formData.activities).reduce(
    (sum, hours) => sum + (Number.parseFloat(hours) || 0),
    0
  );
  const hoursSaved = totalHours * 0.7; // 70% time savings
  const monthlySavings =
    hoursSaved * (Number.parseFloat(formData.hourlyRate) || 0) * 4; // 4 weeks per month

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[900px] mx-auto">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              You're wasting hours every week. See what you could be saving.
            </h2>
            <p className="text-lg tracking-tight text-slate-700">
              Calculate your potential time and cost savings with Outreachful
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Enter your current workflow details below</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Team size
                </label>
                <Input
                  type="number"
                  placeholder="How many people work on link building?"
                  value={formData.teamSize}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      teamSize: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Hourly rate
                  </label>
                  <Input
                    type="number"
                    placeholder="What's the average hourly rate?"
                    value={formData.hourlyRate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        hourlyRate: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Currency
                  </label>
                  <Select
                    value={formData.currency}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, currency: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GBP">£ GBP</SelectItem>
                      <SelectItem value="USD">$ USD</SelectItem>
                      <SelectItem value="EUR">€ EUR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <h4 className="text-base font-medium mb-4">
                  Each week, how many hours do you spend on:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Hunting for link opportunities
                    </label>
                    <Input
                      type="number"
                      placeholder="Hrs"
                      value={formData.activities.hunting}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          activities: {
                            ...prev.activities,
                            hunting: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Checking SEO metrics
                    </label>
                    <Input
                      type="number"
                      placeholder="Hrs"
                      value={formData.activities.checking}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          activities: {
                            ...prev.activities,
                            checking: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Managing prospect lists
                    </label>
                    <Input
                      type="number"
                      placeholder="Hrs"
                      value={formData.activities.managing}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          activities: {
                            ...prev.activities,
                            managing: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Finding & verifying emails
                    </label>
                    <Input
                      type="number"
                      placeholder="Hrs"
                      value={formData.activities.finding}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          activities: {
                            ...prev.activities,
                            finding: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Running outreach campaigns
                    </label>
                    <Input
                      type="number"
                      placeholder="Hrs"
                      value={formData.activities.running}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          activities: {
                            ...prev.activities,
                            running: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tracking placements & reporting
                    </label>
                    <Input
                      type="number"
                      placeholder="Hrs"
                      value={formData.activities.tracking}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          activities: {
                            ...prev.activities,
                            tracking: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What you could save with Outreachful</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Hours saved per week
                </label>
                <div className="text-2xl font-bold text-primary">
                  {hoursSaved.toFixed(1)}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Monthly cost savings:
                </label>
                <div className="text-2xl font-bold text-primary">
                  {formData.currency === "GBP"
                    ? "£"
                    : formData.currency === "EUR"
                    ? "€"
                    : "$"}
                  {monthlySavings.toFixed(2)}
                </div>
              </div>

              <div>
                <Link href={`${config.mainAppUrl}/signin`} className="w-full">
                  <Button className="w-full">
                    Try FREE 14-days <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
