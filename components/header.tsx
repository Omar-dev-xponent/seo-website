import { Button } from "@/components/ui/button";
import config from "@/config";
import Link from "next/link";
import { DesktopNavMenus, MobileNavMenus } from "./nav-menus"; // Updated import
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-16 app-container">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-xl font-semibold md:text-3xl font-display text-brand-100">
              Outreachful
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden gap-6 lg:flex">
          <DesktopNavMenus />
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`${config.mainAppUrl}/signin`}
            className="hidden text-sm font-semibold sm:block"
          >
            Sign In
          </Link>
          <Button asChild className="hidden sm:flex">
            <Link href={`${config.mainAppUrl}/signin`}>Get Started</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <MobileMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col py-6 space-y-3">
        <MobileNavMenus />
        <Link
          href={`${config.mainAppUrl}/signin`}
          className="text-sm font-semibold "
        >
          Sign In
        </Link>
        <Button asChild className="w-full">
          <Link href={`${config.mainAppUrl}/signin`}>Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
