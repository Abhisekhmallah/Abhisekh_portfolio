import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { DockDemo } from "@/components/DockDemo";

export const metadata: Metadata = {
  title: "Abhisekh",
  description:
    "Abhisekh - Software Engineer, Open Source Enthusiast, Tech Blogger",
  generator: "Abhisekh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div id="home">{children}</div>
        <DockDemo /> {/* ✅ Fixed dock at bottom */}
        <Analytics />
      </body>
    </html>
  );
}
