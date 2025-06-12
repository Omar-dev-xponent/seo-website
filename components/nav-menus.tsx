"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import config from "@/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const products: {
  title: string;
  href: string;
  description: string;
  tag?: string;
  icon: string;
}[] = [
  {
    title: "Site Database",
    href: "/site-database",
    description: "Discover sites for link building",
    icon: "/icons/nav-icons/database.svg",
  },
  {
    title: "Client Portal",
    href: "client-portal",
    description: "One place for every client",
    tag: "New Addition",
    icon: "/icons/nav-icons/client-portal.svg",
  },
  {
    title: "Prospecting",
    href: "/prospecting",
    description: "Your prospecting starts right here",
    icon: "/icons/nav-icons/prospect.svg",
  },
  {
    title: "Filtering & Shortlisting",
    href: "/filtering-and-shortlisting",
    description: "Find the right opportunities faster",
    icon: "/icons/nav-icons/filtering.svg",
  },
  {
    title: "Pitch Copy Manager",
    href: "/pitch-copy-manager",
    description: "AI-Powered outreach templates",
    icon: "/icons/nav-icons/pitch-copy.svg",
  },
  {
    title: "Campaigns",
    href: "/campaign",
    description: "Automated outreach campaign hub",
    icon: "/icons/nav-icons/campaign.svg",
  },
  {
    title: "Reporting",
    href: "/reporting",
    description: "Real-time link building analytics",
    icon: "/icons/nav-icons/reporting.svg",
  },
  {
    title: "Team Management",
    href: "/team-management",
    description: "Collaborate & control access",
    icon: "/icons/nav-icons/team.svg",
  },
  {
    title: "Integrations",
    href: "/integrations",
    description: "Seamless tool connections hub",
    icon: "/icons/nav-icons/integrations.svg",
  },
  {
    title: "Link Monitoring",
    href: "/link-monitoring",
    description: "Real-time backlink tracker",
    icon: "/icons/nav-icons/link.svg",
  },
];

const resources: { title: string; href: string; description: string }[] = [
  {
    title: "Blog",
    href: "/blog",
    description: "Insights, tips, and updates to grow your business.",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description: "Success stories from satisfied customers.",
  },
  {
    title: "Help",
    href: "#",
    description: "Quick answers and support when you need it.",
  },
  {
    title: "Careers",
    href: "#",
    description: "Join our team and grow with us.",
  },
];

export function DesktopNavMenus() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex space-x-3 p-3 md:w-[450px] lg:w-[650px] ">
              <div className="flex-1">
                {products.slice(0, 5).map((link, ind) => {
                  return (
                    <li
                      key={ind}
                      className="p-3 transition-all duration-300 rounded-lg hover:bg-accent-1"
                    >
                      <NavigationMenuLink asChild>
                        <Link href={link.href}>
                          <div className="flex items-start space-x-3">
                            <Image
                              src={link.icon}
                              alt={link.title}
                              width={20}
                              height={20}
                              className="mt-1.5"
                            />
                            <div>
                              <p className="mb-1 text-base font-display text-typography-100">
                                {link.title}{" "}
                                {link.tag && (
                                  <span className="p-1 px-2 text-xs rounded-full bg-brand-10 font-display text-brand-100">
                                    {link.tag}
                                  </span>
                                )}
                              </p>
                              <p className="text-sm font-display text-typography-50">
                                {link.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  );
                })}
              </div>
              <div className="px-2">
                <p className="border-[1px] border-typography-10 h-full"></p>
              </div>
              <div className="flex-1">
                {products.slice(5, 10).map((link, ind) => {
                  return (
                    <li
                      key={ind}
                      className="p-3 transition-all duration-300 rounded-lg hover:bg-accent-1"
                    >
                      <NavigationMenuLink asChild>
                        <Link href={link.href}>
                          <div className="flex items-start space-x-3">
                            <Image
                              src={link.icon}
                              alt={link.title}
                              width={20}
                              height={20}
                              className="mt-1.5"
                            />
                            <div>
                              <p className="mb-1 text-base font-display text-typography-100">
                                {link.title}{" "}
                                {link.tag && (
                                  <span className="p-1 px-2 text-xs rounded-full bg-brand-10 font-display text-brand-100">
                                    {link.tag}
                                  </span>
                                )}
                              </p>
                              <p className="text-sm font-display text-typography-50">
                                {link.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  );
                })}
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {resources.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNavMenus() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="products">
        <AccordionTrigger className="text-sm font-medium hover:no-underline [&[data-state=open]]:text-primary">
          Products
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col pl-4 space-y-2">
            {products.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="resources">
        <AccordionTrigger className="text-sm font-medium hover:no-underline [&[data-state=open]]:text-primary">
          Resources
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col pl-4 space-y-2">
            {resources.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <Link
        href="/pricing"
        className="flex items-center py-4 text-sm font-medium hover:text-primary"
      >
        Pricing
      </Link>
    </Accordion>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
              {children}
            </p>
          </>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
