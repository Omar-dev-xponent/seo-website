import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import type React from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Outreachful - Link Building Platform",
  description:
    "Outreachful your link building workflow with our all-in-one platform.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 ">{children}</main>
        <Footer />
      </div>
    </>
  );
}
