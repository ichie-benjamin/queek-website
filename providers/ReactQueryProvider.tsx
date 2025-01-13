"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import AuthModal from "@/components/pages/modal/AuthModal";


export default function ReactQueryProvider({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {
    const [client] = useState(new QueryClient());

    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
            <ProgressBar
                height="4px"
                color="#13814c"
                options={{ showSpinner: false }}
                shallowRouting
            />

            <AuthModal />
        </QueryClientProvider>
);
}
