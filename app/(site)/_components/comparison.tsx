import { CheckCircle, X } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ComparisonSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[900px] mx-auto">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Effortlessly build high-quality backlinks{" "}
              <span className="text-primary">70% faster</span>
            </h2>
            <p className="text-lg tracking-tight text-slate-700">
              Simplify your entire link-building workflow with an easy-to-use
              platform that eliminates the hassle of juggling multiple tools and
              spreadsheets, saving you time, resources, and effort.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2">
          <Card>
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-3">
                <Badge
                  variant="secondary"
                  className="h-10 w-10 rounded-full p-0 flex items-center justify-center text-base font-bold"
                >
                  1
                </Badge>
                <div className="text-left">
                  <h3 className="text-xl font-bold">The old way</h3>
                  <p className="text-sm text-muted-foreground">
                    Slow, fragmented and inefficient
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Prospecting:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      Searching Google, copying URLs, checking SEO metrics in
                      separate tools. (1-2 hours)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Contact discovery:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      Hunting for emails, using verification tools, updating
                      sheets. (1-1.5 hours)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Outreach:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      Importing contacts, personalizing emails, tracking
                      responses in sheets. (1-2 hours)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">
                      Monitoring & reporting:
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      Checking placements, building reports from scattered data.
                      (30-60 mins)
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3 mt-6 pt-6 border-t">
                  <span className="text-xl">⏱️</span>
                  <span className="font-bold">
                    Total time spent per campaign: 4+ hours
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-primary">
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-3">
                <Badge
                  variant="default"
                  className="h-10 w-10 rounded-full p-0 flex items-center justify-center text-base font-bold"
                >
                  2
                </Badge>
                <div className="text-left">
                  <h3 className="text-xl font-bold">The Outreachful way</h3>
                  <p className="text-sm text-muted-foreground">
                    Faster, smarter, all-in-one
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Prospecting:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      Instantly find high-quality sites in our built-in
                      database, with SEO metrics preloaded. (5-10 mins)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Contact discovery:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      Auto-find & verify emails, add contacts to campaigns in
                      one click. (2-5 mins)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Outreach:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      Use AI-generated templates, automate sequences, track
                      everything in one dashboard. (10-15 mins)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">
                      Monitoring & reporting:
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      Automated tracking, instant client dashboards, one-click
                      reports. (5 mins)
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3 mt-6 pt-6 border-t">
                  <span className="text-xl">🚀</span>
                  <span className="font-bold">
                    Total time per campaign: 30 minutes
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
