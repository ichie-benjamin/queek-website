'use client';

import { useRouter } from 'next/navigation';
import { VendorCarousel } from '@/components/store/vendor/VendorCarousel';
import { VendorGrid } from '@/components/store/vendor/VendorGrid';
import {endpoints} from "@/constants/endpoints";
import React from "react";



export function HomeData() {
    const router = useRouter();

    const handleVendorClick = (vendorId: string) => {
        router.push(`/store/${vendorId}`);
    };

    return (
        <>

            {/* Recommended Vendors Carousel */}
            <VendorCarousel
                title="Recommended for You"
                endpoint={`${endpoints.vendors.list}?recommended`}
                onVendorClick={handleVendorClick}
            />

            <VendorGrid
                title="All Vendors"
                endpoint={`${endpoints.vendors.list}?recommended`}
            />
        </>
    );
}
