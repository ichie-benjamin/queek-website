"use client"

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRequest } from '@/lib/axios';
import { VendorsResponse } from '@/constants/types/vendor';
import { VendorCard } from './VendorCard';
import { VendorSkeleton } from './VendorSkeleton';

interface VendorGridProps {
    title: string;
    endpoint: string;
    onVendorClick?: (vendorId: string) => void;
}

export const VendorGrid = ({
                                   title,
                                   endpoint,
                                   onVendorClick
                               }: VendorGridProps) => {


    const { data: response, isLoading } = useQuery<VendorsResponse>({
        queryKey: ['vendors', endpoint],
        queryFn: () => getRequest(endpoint),
    });


    const renderVendors = () => {
        if (isLoading) {
            return Array(6).fill(0).map((_, index) => (
                <VendorSkeleton key={index} />
            ));
        }

        return response?.data.map((vendor) => (
            <VendorCard
                key={vendor.id}
                vendor={vendor}
            />
        ));
    };

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{title}</h2>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {renderVendors()}
            </div>
        </section>
    );
};
