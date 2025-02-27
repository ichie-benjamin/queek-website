import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Clock, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Vendor } from "@/constants/types/vendor";
import { cn } from '@/lib/utils';

const VendorHeader = ({ vendor }: { vendor: Vendor }) => {
    const [showDetails, setShowDetails] = useState(false);

    // Determine message style based on store status
    const messageStyle = vendor.is_closed
        ? "text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-950/50"
        : "text-white bg-green-50 dark:text-white dark:bg-green-950/50";

    return (
        <>
            <div className="relative mb-4">
                {/* Banner Image */}
                <div className="relative h-40 md:h-52 w-full overflow-hidden rounded-lg">
                    <Image
                        src={vendor.banner}
                        alt={`${vendor.name} banner`}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Simplified Vendor Info Card */}
                <Card className="relative mx-4 -mt-12 bg-card dark:bg-card shadow-md p-4">
                    <div className="flex items-center gap-3">
                        {/* Logo */}
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white dark:border-gray-800 shadow-sm">
                            <Image
                                src={vendor.logo}
                                alt={vendor.name}
                                fill
                                className="object-cover"
                                sizes="64px"
                            />
                        </div>

                        {/* Essential Info */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <p className="sm:text-lg font-semibold text-foreground">{vendor.name}</p>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="p-1 h-auto"
                                    onClick={() => setShowDetails(true)}
                                >
                                    <Info className="w-5 h-5 text-muted-foreground" />
                                </Button>
                            </div>

                            {/* Only show the most important details in the header */}
                            <div className="flex items-center gap-3 mt-1 text-sm">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="font-medium text-foreground">{vendor.rating}</span>
                                </div>

                                <div className="hidden sm:block">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">{vendor.delivery_info.delivery_time}</span>
                                    </div>
                                </div>

                                <div className="">
                                    {vendor.delivery_info.delivery_message && (
                                        <span className={cn("px-2 py-0.5 text-xs font-medium rounded-full", messageStyle)}>
                                            {vendor.delivery_info.delivery_message}
                                        </span>
                                    )}

                                    {vendor.is_closed && !vendor.delivery_info.delivery_message && (
                                        <span className="px-2 py-0.5 text-xs font-medium text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-950/50 rounded-full">
                                            Closed
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Details Dialog/Modal */}
            <Dialog open={showDetails} onOpenChange={setShowDetails}>
                <DialogContent className="sm:max-w-md max-w-sm bg-card dark:bg-card text-card-foreground dark:text-card-foreground">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                                <Image
                                    src={vendor.logo}
                                    alt={vendor.name}
                                    fill
                                    className="object-cover"
                                    sizes="32px"
                                />
                            </div>
                            {vendor.name}
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 py-2">
                        {/* Description */}
                        {vendor.short_description && (
                            <div className="text-sm text-muted-foreground">
                                {vendor.short_description}
                            </div>
                        )}

                        {/* Address */}
                        {vendor.address && (
                            <div className="text-sm">
                                <div className="font-medium mb-1">Address</div>
                                <div className="text-muted-foreground">{vendor.address}</div>
                            </div>
                        )}

                        {/* Hours */}
                        <div className="text-sm">
                            <div className="font-medium mb-1">Hours</div>
                            <div className="text-muted-foreground">
                                {vendor.open_time} - {vendor.close_time}
                            </div>
                            {vendor.is_closed && (
                                <div className="text-red-600 dark:text-red-400 text-xs mt-1">
                                    Currently closed
                                </div>
                            )}
                        </div>

                        {/* Delivery Info */}
                        <div className="text-sm space-y-2">
                            <div className="font-medium">Delivery Information</div>

                            {vendor.delivery_info.delivery_fee && (
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Delivery Fee</span>
                                    <span>{vendor.delivery_info.delivery_fee}</span>
                                </div>
                            )}

                            {vendor.delivery_info.min_order > 0 && (
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Minimum Order</span>
                                    <span>₦{vendor.delivery_info.min_order.toLocaleString()}</span>
                                </div>
                            )}

                            {vendor.delivery_info.delivery_message && (
                                <div className={cn("text-xs mt-1",
                                    vendor.is_closed ? "text-red-600 dark:text-red-400" : "text-white dark:text-white")}>
                                    {vendor.delivery_info.delivery_message}
                                </div>
                            )}
                        </div>

                        {/* Additional Vendor Information */}
                        {vendor.support_phone || vendor.support_email ? (
                            <div className="text-sm space-y-2">
                                <div className="font-medium">Contact Information</div>

                                {vendor.support_phone && (
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Phone</span>
                                        <span>{vendor.support_phone}</span>
                                    </div>
                                )}

                                {vendor.support_email && (
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Email</span>
                                        <span>{vendor.support_email}</span>
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default VendorHeader;
