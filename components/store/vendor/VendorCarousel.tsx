import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRequest } from '@/lib/axios';
import { VendorsResponse } from '@/constants/types/vendor';
import { VendorCard } from './VendorCard';
import { VendorSkeleton } from './VendorSkeleton';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface VendorCarouselProps {
    title: string;
    endpoint: string;
    onVendorClick?: (vendorId: string) => void;
}

export const VendorCarousel = ({
                                       title,
                                       endpoint
                                   }: VendorCarouselProps) => {
    const { data: response, isLoading } = useQuery<VendorsResponse>({
        queryKey: ['restaurants', endpoint],
        queryFn: () => getRequest(endpoint),
    });

    const renderVendors = () => {
        if (isLoading) {
            return Array(6).fill(0).map((_, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/5">
                    <VendorSkeleton />
                </CarouselItem>
            ));
        }

        return response?.data?.map((vendor, index) => (
            <CarouselItem key={vendor.id+index} className="sm:basis-1/2 lg:basis-1/5">
                <VendorCard
                    vendor={vendor}
                />
            </CarouselItem>
        ));
    };

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6">{title}</h2>
            <div className="relative">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {renderVendors()}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
};
