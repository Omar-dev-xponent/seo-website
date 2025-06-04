import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer-prev";

export const metadata: Metadata = {
  title: "Blog - Outreachful",
  description:
    "Read the industry's latest thoughts on starting and growing a successful online business...",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
