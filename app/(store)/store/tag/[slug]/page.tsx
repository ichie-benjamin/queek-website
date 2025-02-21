"use client";

import React, {Suspense, use, useEffect, useState} from 'react';
import ServiceSidebar from "@/components/store/ServiceSidebar";
import {endpoints} from "@/constants/endpoints";
import {VendorSkeletonList} from "@/components/store/vendor/VendorSkeletonList";
import {VendorGridList} from "@/components/store/vendor/VendorGridList";
import {SearchVendors} from "@/components/store/vendor/SearchVendors";
import {getServiceName} from "@/lib/utils";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebounce} from "@/hooks/store/useDebounce";
import {StoreHeader} from "@/components/store/StoreHeader";

interface PageProps {
    params: Promise<{ slug: string }>;
}

const Page = ({ params }: PageProps) => {
    const { slug } = use(params);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [showHeaderSearch, setShowHeaderSearch] = useState(false);

    // Search state
    const [searchQuery, setSearchQuery] = useState(searchParams.get('keyword') || '');
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    // Update URL when debounced search value changes
    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        if (debouncedSearchQuery) {
            params.set('keyword', debouncedSearchQuery);
        } else {
            params.delete('keyword');
        }

        router.push(`${pathname}?${params.toString()}`);
    }, [debouncedSearchQuery, pathname, router, searchParams]);

    // Handle search from either input
    const handleSearch = (value: string) => {
        setSearchQuery(value);
    };

    // Track scroll for showing/hiding header search
    useEffect(() => {
        const handleScroll = () => {
            setShowHeaderSearch(window.scrollY > 250);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>

            <StoreHeader
                onSearch={handleSearch}
                searchPlaceholder="Search vendors..."
                initialSearchValue={searchQuery}
                showSearch={showHeaderSearch}
                showDeliveryAddress={false}
            />

            <div className="container mx-auto sm:max-w-7xl px-4 py-8">
                <div className="pt-4">
                    <div className="relative lg:flex gap-6">
                        {/* Sidebar with sticky positioning */}
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="sticky top-32 space-y-4">
                                <ServiceSidebar />
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="flex-1 min-h-screen">
                            <div className="flex justify-between px-10- py-3">
                                <div className="w-1/4">
                                    <h1 className="text-2xl font-semibold mb-6">{getServiceName(slug)} Listing</h1>
                                </div>
                                {!showHeaderSearch && (
                                    <div className="sm:w-2/4">
                                        <SearchVendors
                                            value={searchQuery}
                                            onChange={handleSearch}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="space-y-6 pb-8">
                                <Suspense fallback={<VendorSkeletonList />}>
                                    <VendorGridList
                                        endpoint={`${endpoints.vendors.by_service(slug)}`}
                                    />
                                </Suspense>

                            </div>
                        </main>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Page;
