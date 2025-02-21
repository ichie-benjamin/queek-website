import React from 'react';
import { Star, Clock, AlertCircle, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {Vendor} from "@/constants/types/vendor";

const VendorHeader = ({ vendor }: { vendor: Vendor }) => {

    return (
        <div className="relative mb-6">
            {/* Banner Image */}
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                <img
                    src={vendor.banner}
                    alt={`${vendor.name} banner`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Vendor Info Card - Overlapping Banner */}
            <Card className="relative mx-4 -mt-20 bg-white shadow-lg">
                <div className="p-6">
                    {/* Logo and Basic Info */}
                    <div className="flex gap-4 items-start mb-4">
                        <div className="relative">
                            <img
                                src={vendor.logo}
                                alt={vendor.name}
                                className="w-24 h-24 rounded-xl object-cover border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="flex-1 pt-2">
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-bold text-gray-900">{vendor.name}</h1>
                                {vendor.is_closed && (
                                    <span className="px-3 py-1 text-sm font-medium text-red-700 bg-red-50 rounded-full">
                    Closed
                  </span>
                                )}
                            </div>
                            <p className="mt-1 text-sm text-gray-600">{vendor.short_description}</p>
                        </div>
                    </div>

                    {/* Status Indicators */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="font-medium">{vendor.rating}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span>{vendor.delivery_info.delivery_time}</span>
                        </div>

                        {vendor.address && (
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4 text-gray-500" />
                                <span>{vendor.address}</span>
                            </div>
                        )}

                        {vendor.delivery_info.delivery_message && (
                            <div className="flex items-center gap-1.5">
                                <AlertCircle className="w-4 h-4 text-blue-500" />
                                <span className="text-blue-600">{vendor.delivery_info.delivery_message}</span>
                            </div>
                        )}

                        {/* Delivery Fee */}
                        {vendor.delivery_info.delivery_fee && (
                            <div className="flex items-center gap-1.5">
                <span className="font-medium">
                  Delivery Fee: ₦{vendor.delivery_info.delivery_fee}
                </span>
                            </div>
                        )}

                        {/* Min Order */}
                        {vendor.delivery_info.min_order > 0 && (
                            <div className="flex items-center gap-1.5">
                <span className="font-medium">
                  Min Order: ₦{vendor.delivery_info.min_order.toLocaleString()}
                </span>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default VendorHeader;
