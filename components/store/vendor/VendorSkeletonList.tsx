import {VendorSkeleton} from "@/components/store/vendor/VendorSkeleton";
import React from "react";

export const VendorSkeletonList = () => {
    return Array(6).fill(0).map((_, index) => (
        <VendorSkeleton key={index} />
    ));
}
