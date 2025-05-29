import ThriveDesk from "@/components/thrivedesk";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Outreachful - Link Building Platform",
  description: "Outreachful your link building workflow...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-display antialiased`}
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          {children}
          <ThriveDesk />
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </body>
    </html>
  );
}
