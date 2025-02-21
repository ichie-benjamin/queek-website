"use client"

import React, { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'next/navigation';
import { getRequest } from '@/lib/axios';
import {Vendor, VendorsResponse} from '@/constants/types/vendor';
import { VendorCard } from './VendorCard';
import { VendorSkeleton } from './VendorSkeleton';
import {logFunction} from "@/lib/utils";

interface VendorGridProps {
    title?: string;
    endpoint: string;
}

interface PaginatedResponse extends VendorsResponse {
    meta: {
        current_page: number;
        last_page: number;
        total: number;
        per_page: number;
    };
}

export const VendorGridList = ({ title, endpoint }: VendorGridProps) => {
    const searchParams = useSearchParams();
    const { ref, inView } = useInView({
        threshold: 0
    });

    // Create the query parameters from URL search params
    const queryParams = {
        page: 1,
        ...Object.fromEntries(searchParams.entries())
    };

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error
    } = useInfiniteQuery<PaginatedResponse>({
        queryKey: ['vendor_list', queryParams],
        queryFn: async ({ pageParam = 1 }) => {
            const params = new URLSearchParams({
                ...queryParams,
                page: (pageParam as number).toString()
            });
            const urlWithParams = `${endpoint}${endpoint.includes('?') ? '&' : '?'}${params.toString()}`;

            return getRequest(urlWithParams);
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            if (lastPage.meta.current_page >= lastPage.meta.last_page) {
                return undefined;
            }
            return lastPage.meta.current_page + 1;
        },
        // initialPageParam: 1
    });

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    // Get all vendors from all pages
    const vendors = data?.pages.flatMap(page => page.data) ?? [];

    if (isError) {
        logFunction('error', error)

        return (
            <div className="text-center py-8 text-red-600">
                Error loading vendors
            </div>
        );
    }

    return (
        <section className="mb-12">
            { title ? (
                <h2 className="text-2xl font-semibold mb-6">{title}</h2>
            ) : null }

            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {vendors && vendors.map((vendor: Vendor | undefined) =>
                    vendor ? <VendorCard key={vendor.id} vendor={vendor} /> : null
                )}
                {isLoading && Array(6).fill(0).map((_, index) => (
                    <VendorSkeleton key={`initial-loading-${index}`} />
                ))}

                {isFetchingNextPage && Array(3).fill(0).map((_, index) => (
                    <VendorSkeleton key={`next-page-loading-${index}`} />
                ))}

                <div ref={ref} className="col-span-full h-px" />
            </div>

            {!isLoading && vendors.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No vendors found
                </div>
            )}

            {!hasNextPage && vendors.length > 0 && (
                <div className="text-center py-4 text-gray-500">
                    No more vendors to load
                </div>
            )}
        </section>
    );
};
