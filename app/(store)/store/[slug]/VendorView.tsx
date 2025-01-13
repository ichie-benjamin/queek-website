"use client"

import { Card } from '@/components/ui/card';
import { Star, Clock, AlertCircle } from 'lucide-react';
import ProductsListing from "@/components/store/vendor/ProductListing";
import { VendorCart } from "@/components/store/vendor/VendorCart";
import { Vendor } from '@/constants/types/vendor';
import ScrollToTop from "@/components/ScrollToTop";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface VendorViewProps {
    vendor: Vendor;
}

export function VendorView({ vendor }: VendorViewProps) {
    return (
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



            {/* Vendor Header */}
            <Card className="p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src={vendor.logo}
                        alt={vendor.name}
                        className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">{vendor.name}</h1>
                        <p className="text-sm text-muted-foreground">{vendor.short_description}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4" />
                        <span>{vendor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{vendor.delivery_info.delivery_time}</span>
                    </div>
                    {vendor.delivery_info.delivery_message && (
                        <div className="flex items-center gap-1 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>{vendor.delivery_info.delivery_message}</span>
                        </div>
                    )}
                </div>
            </Card>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-9">
                    <ProductsListing vendorId={vendor.id} />
                </div>

                <div className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-24">
                        <VendorCart vendorId={vendor.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
