"use client"

import { Skeleton } from "@/components/ui/skeleton";
import {Card, CardContent} from "@/components/ui/card";

export const VendorSkeleton = () => (
    <Card className="overflow-hidden">
        <Skeleton className="h-48 w-full" />
        <CardContent className="p-4">
            <div className="space-y-3">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                </div>
            </div>
        </CardContent>
    </Card>
);
