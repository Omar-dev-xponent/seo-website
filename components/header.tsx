import { Button } from "@/components/ui/button";
import config from "@/config";
import Link from "next/link";
import { DesktopNavMenus, MobileNavMenus } from "./nav-menus"; // Updated import
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-xl font-semibold text-slate-900">
              <span className="text-primary-500 font-bold">O</span>utreachful
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6">
          <DesktopNavMenus />
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`${config.mainAppUrl}/signin`}
            className="text-sm font-semibold hidden sm:block"
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
                <Menu className="h-5 w-5" />
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
      <div className="flex flex-col space-y-3 py-6">
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
