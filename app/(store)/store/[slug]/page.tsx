import {notFound} from 'next/navigation';
import {getRequest} from '@/lib/axios';
import {endpoints} from '@/constants/endpoints';
import {VendorView} from './VendorView';
import {unstable_cache} from 'next/cache';
import {use} from 'react';
import {VendorResponse} from "@/constants/types/vendor";

const getVendor = (slug: string) => {
    const fetchVendor = async (): Promise<VendorResponse | null> => {
        try {
            const response = await getRequest(`${endpoints.vendors.view}/${slug}`);
            return response as VendorResponse;
        } catch (error) {
            console.error('Error fetching vendor:', error);
            return null;
        }
    };

    return unstable_cache(
        fetchVendor,
        [`vendor-${slug}`],
        {
            revalidate: 60,
            tags: [`vendor-${slug}`, 'vendor'],
        }
    )();
};


interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function VendorPage({ params }: PageProps) {
    const { slug } = use(params);
    const vendorData = use(getVendor(slug));

    if (!vendorData) {
        notFound();
    }

    return <VendorView vendor={vendorData.data} />;
}
