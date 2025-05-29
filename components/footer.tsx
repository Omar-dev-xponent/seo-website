import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 lg:h-24 lg:flex-row lg:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/">
            <span className="text-[15px] font-semibold text-slate-900">
              <span className="text-primary-500 font-bold">O</span>utreachful
            </span>
          </Link>

          <p className="text-center text-sm text-slate-600 md:text-left">
            &copy; {new Date().getFullYear()} Outreachful. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-slate-400 hover:text-slate-700">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-slate-400 hover:text-slate-700">
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-slate-400 hover:text-slate-700">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-slate-400 hover:text-slate-700">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link
            href="/pricing"
            className="text-xs text-slate-600 hover:underline underline-offset-4"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-xs text-slate-600 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xs text-slate-600 hover:underline underline-offset-4"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-xs text-slate-600 hover:underline underline-offset-4"
          >
            Blog
          </Link>
          <Link
            href="/terms-conditions"
            className="text-xs text-slate-600 hover:underline underline-offset-4"
          >
            Terms
          </Link>
          <Link
            href="/privacy-policy"
            className="text-xs text-slate-600 hover:underline underline-offset-4"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
