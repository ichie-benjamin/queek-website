import ReactQueryProvider from "@/providers/ReactQueryProvider";
import {SiteHeader} from "@/components/site-header";
import Footer from "@/components/Footer";
import React from "react";
import {StoreHeader} from "@/components/store/StoreHeader";
import DynamicNav from "@/components/store/DynamicNav";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      {/*<DynamicNav />*/}
      <StoreHeader />
      <main className="relative-overflow-hidden">
        {children}
      </main>
      <Footer />
    </ReactQueryProvider>
  );
}
