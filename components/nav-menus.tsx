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
import { Rocket } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const products: { title: string; href: string; description: string }[] = [
  {
    title: "Outreach",
    href: "#",
    description: "Automate and scale your outreach campaigns with smart tools.",
  },
  {
    title: "Lead Database",
    href: "#",
    description:
      "Centralized, high-quality leads for faster sales prospecting.",
  },
  {
    title: "Email Accounts",
    href: "#",
    description: "Manage multiple email accounts securely in one place.",
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
    href: "#",
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
            <ul className="grid gap-3 p-4 md:w-[450px] lg:w-[550px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={`${config.mainAppUrl}/signin`}
                  >
                    <Rocket className="w-14 h-14 text-teal-500" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Start For Free!
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Get built-in SEO metrics, instant contact discovery,
                      simplified outreach, and real-time backlink monitoring in
                      one platform.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {products.map((component) => (
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
          <div className="flex flex-col space-y-2 pl-4">
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
          <div className="flex flex-col space-y-2 pl-4">
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
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
