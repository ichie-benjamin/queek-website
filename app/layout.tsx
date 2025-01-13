import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {SiteHeader} from "@/components/site-header";
import React from "react";
import {Providers} from "@/components/providers";

import Footer from "@/components/Footer";

import Head from 'next/head';
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

    <Head>
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
      )}>
      <Providers>
          {/*<div className="relative flex min-h-dvh flex-col bg-background">*/}
          { children }
          {/*</div>*/}
      </Providers>



      </body>

    </html>
  );
}
