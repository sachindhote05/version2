import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterWrapper from "./components/FooterWrapper";

export const metadata: Metadata = {
  title: "Version2 - Leadership & Performance Excellence",
  description:
    "Training and Coaching made Structured and Sustainable for Businesses and Individuals.",
};

export const viewport: Viewport = {
  themeColor: "#1E3A8A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black scroll-smooth">
        <Navbar />
        {children}
        <FooterWrapper /> {/* ✅ yaha lagana hai */}
      </body>
    </html>
  );
}