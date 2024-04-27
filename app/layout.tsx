import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {SiteHeader} from "@/components/site-header";
import React from "react";
import {Providers} from "@/components/providers";
import SiteFooter from "@/components/site-footer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable : "--font-sans" });

export const metadata: Metadata = {
    title: "Queek - Your Ultimate Companion for Convenience | Simplify Your Life Today",
    description: "Discover the convenience of Queek - the all-in-one platform for transportation, food delivery, household services, and more. Revolutionize your routine and simplify your life with Queek.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
      )}>
      <Providers>
          {/*<div className="relative flex min-h-dvh flex-col bg-background">*/}
              <SiteHeader />
              <main className="relative overflow-hidden">
                  {children}
              </main>
              <Footer />
          {/*</div>*/}
      </Providers>

      </body>
    </html>
  );
}
