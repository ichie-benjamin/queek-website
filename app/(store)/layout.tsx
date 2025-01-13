import ReactQueryProvider from "@/providers/ReactQueryProvider";

import Footer from "@/components/Footer";
import React from "react";
import {StoreHeader} from "@/components/store/StoreHeader";

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
