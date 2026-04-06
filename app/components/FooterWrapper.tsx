"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  // sirf home page pe footer
  if (pathname !== "/") return null;

  return <Footer />;
}