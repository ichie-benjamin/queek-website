"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, ThumbsUp, Truck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

const sortOptions = [
    { id: 'distance', label: 'Near me', icon: Clock, value: 'distance' },
    { id: 'rating', label: 'Ratings', icon: ThumbsUp, value: 'rating' },
    { id: 'delivery_fee', label: 'Delivery fee', icon: Truck, value: 'delivery_fee' }
] as const;

const popularFilters = [
    { id: 'chicken', label: '🍗 Chicken', value: 'chicken' },
    { id: 'jollof', label: '🍚 Jollof', value: 'jollof' },
    { id: 'local', label: '🥘 Local Food', value: 'local' }
] as const;

const moreFilters = [
    { id: 'alcohol', label: '🍷 Alcohol', value: 'alcohol' },
    { id: 'bakery', label: '🥖 Bakery and Pastry', value: 'bakery' }
] as const;

const ServiceSidebar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentSort = searchParams.get('sort_by');

    // Function to update URL with new sort parameter while preserving other params
    const handleSort = (sortValue: string) => {
        const params = new URLSearchParams(searchParams);

        // If clicking the same sort option, remove it (toggle behavior)
        if (currentSort === sortValue) {
            params.delete('sort_by');
        } else {
            params.set('sort_by', sortValue);
        }

        // Update the URL with the new parameters
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <Card className="p-4 space-y-6 bg-white shadow-sm">
            <div>
                <h3 className="font-semibold mb-4 text-gray-900">Sort by</h3>
                <div className="space-y-2">
                    {sortOptions.map(({ id, label, icon: Icon, value }) => (
                        <Button
                            key={id}
                            variant="ghost"
                            className={cn(
                                "w-full justify-start hover:bg-gray-100",
                                currentSort === value && "bg-primary/10 text-primary hover:bg-primary/20"
                            )}
                            size="sm"
                            onClick={() => handleSort(value)}
                        >
                            <Icon className="mr-2 h-4 w-4" />
                            {label}
                        </Button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-4 text-gray-900">Popular filters</h3>
                <div className="space-y-2">
                    {popularFilters.map(({ id, label }) => (
                        <Button
                            key={id}
                            variant="outline"
                            className="w-full justify-start hover:bg-gray-50"
                            size="sm"
                        >
                            {label}
                        </Button>
                    ))}
                </div>
            </div>

            <div>
                <Button variant="link" className="text-sm px-0 mb-2">More filters</Button>
                <div className="space-y-2">
                    {moreFilters.map(({ id, label }) => (
                        <Button
                            key={id}
                            variant="outline"
                            className="w-full justify-start hover:bg-gray-50"
                            size="sm"
                        >
                            {label}
                        </Button>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default ServiceSidebar;
