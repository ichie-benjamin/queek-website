"use client"

import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { getRequest } from "@/lib/axios";
import { endpoints } from "@/constants/endpoints";
import { Service, ServiceResponse } from "@/constants/types/services";
import { type CarouselApi } from "@/components/ui/carousel";

interface CategoryCardProps {
    service: Service;
}

const CategoryCard = ({ service }: CategoryCardProps) => (
    <Link
        href={`store/tag/${service.slug}`}
        className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-gray-50 cursor-pointer transition-colors h-full"
        style={{ backgroundColor: `${service.color}20` }}
    >
        <div className="w-12 h-12 mb-2">
            <img
                src={service.icon}
                alt={service.name}
                className="w-full h-full object-contain"
            />
        </div>
        <span className="text-sm font-medium text-center">{service.title}</span>
    </Link>
);

const CategorySkeleton = () => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg h-full">
        <Skeleton className="w-12 h-12 rounded-full mb-2" />
        <Skeleton className="h-4 w-20" />
    </div>
);

export const Categories = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const { data: servicesData, isLoading } = useQuery<ServiceResponse>({
        queryKey: ['services'],
        queryFn: () => getRequest(endpoints.services.list)
    });

    useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        });
    }, [api]);

    const featuredServices = servicesData?.data
        .filter(service => service.is_featured)
        .sort((a, b) => a.position - b.position) ?? [];

    return (
        <section className="mb-12">
            <Carousel
                opts={{
                    align: "start",
                    loop: false
                }}
                setApi={setApi}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {(isLoading ? Array(7).fill(null) : featuredServices).map((service, index) => (
                        <CarouselItem
                            key={service?.id || index}
                            className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6"
                        >
                            {service ? <CategoryCard service={service} /> : <CategorySkeleton />}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {canScrollPrev && <CarouselPrevious />}
                {canScrollNext && <CarouselNext />}
            </Carousel>
        </section>
    );
};
