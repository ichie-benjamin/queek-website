"use client"

import ProductsListing from "@/components/store/vendor/ProductListing";
import { VendorCart } from "@/components/store/vendor/VendorCart";
import { Vendor } from '@/constants/types/vendor';
import ScrollToTop from "@/components/ScrollToTop";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {StoreHeader} from "@/components/store/StoreHeader";

import {useEffect, useState} from "react";
import VendorHeader from "@/components/store/vendor/VendorHeader";

interface VendorViewProps {
    vendor: Vendor;
}

export function VendorView({ vendor }: VendorViewProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const [showSearch, setShowSearch] = useState(false);

    // Handle scroll to determine when to show header search
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                setShowSearch(window.scrollY > 250);
            }, 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <StoreHeader
                onSearch={setSearchQuery}
                searchPlaceholder="Search in menu..."
                initialSearchValue={searchQuery}
                showSearch={showSearch}
                showDeliveryAddress={false}
            />

            <div className="container sm:max-w-7xl mx-auto px-4 py-6">
                <ScrollToTop />

                <Breadcrumb className={'mb-4'}>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link href={'/store'}>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <Link href={`/store/tag/${vendor.service}`}>{ vendor.service }</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{vendor.name}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>



                <div className="grid grid-cols-12 gap-6">

                    <div className="col-span-12 lg:col-span-9">
                        <VendorHeader vendor={vendor} />

                        <ProductsListing
                            vendorId={vendor.id}
                            headerSearchQuery={searchQuery}
                            onHeaderSearchChange={setSearchQuery}
                            showHeaderSearch={showSearch}
                        />
                    </div>

                    <div className=" lg:col-span-3">
                        <div className="sticky top-20">
                            <VendorCart vendorId={vendor.id} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
