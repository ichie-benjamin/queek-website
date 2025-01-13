"use client"

import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Vendor } from '@/constants/types/vendor';
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

interface VendorCardProps {
    vendor: Vendor;
    onClick?: () => void;
}

export const VendorCard = ({ vendor, onClick }: VendorCardProps) => {
    const {
        slug,
        name,
        banner,
        rating,
        distance,
        delivery_info,
        is_closed,
        can_pre_order,
        is_new
    } = vendor;

    return (
        <Link href={`/store/${slug}`}>
            <Card className="border-0 rounded-none shadow-none cursor-pointer hover:shadow-none transition-all duration-300">
                <div className="relative h-40 group">
                    {/* Wrapper div for the image with overflow hidden and border radius */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <Image
                            src={banner}
                            alt={name}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0eHh0dHyIeHx8fHiMkIyAgICQjKCYpJiglKSgwLTAtKDFBOUA5QUFBQUFBQUFBQUH/2wBDARUXFyAeIB4gHh4iIB4lJSAlKCgoKCkwMDAwMDE1NTU1NTU1QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                    </div>

                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                        {is_new && (
                            <Badge className="bg-blue-500">New</Badge>
                        )}
                        {is_closed && (
                            <Badge className="text-red-600 text-xs" variant="secondary">
                                {delivery_info.delivery_message}
                            </Badge>
                        )}
                    </div>

                    {can_pre_order && is_closed && (
                        <Button
                            variant="secondary"
                            className="absolute bottom-4 left-4 z-10"
                        >
                            Pre-order
                        </Button>
                    )}
                </div>

                <CardContent className="py-4 px-1">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold line-clamp-1 text-md">{name}</h3>
                        <div className="flex items-center">
                            <span className="text-yellow-500 text-xs">★</span>
                            <span className="ml-1 text-xs">{rating}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between space-x-4 text-sm text-gray-500">
                        <div className="flex items-center text-xs text-gray-500">
                            {delivery_info.delivery_fee_value > 0 ? (
                                <span>From : {delivery_info.delivery_fee}</span>
                            ) : (
                                <span>Free</span>
                            )}
                        </div>

                        <div className="flex items-center text-xs">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{delivery_info.delivery_time}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};
