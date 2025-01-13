import ReactQueryProvider from "@/providers/ReactQueryProvider";
import {SiteHeader} from "@/components/site-header";
import Footer from "@/components/Footer";
import React from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <SiteHeader />
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </ReactQueryProvider>
  );
}
