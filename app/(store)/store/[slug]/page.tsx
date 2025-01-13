import {notFound} from 'next/navigation';
import {getRequest} from '@/lib/axios';
import {endpoints} from '@/constants/endpoints';
import {VendorView} from './VendorView';
import {Vendor} from '@/constants/types/vendor';
import {unstable_cache} from 'next/cache';
import {use} from 'react';

const getVendor = (slug: string) => {
    return unstable_cache(
        async () => {
            try {
                return await getRequest<{ data: Vendor }>(`${endpoints.vendors.view}/${slug}`);
            } catch (error) {
                console.error('Error fetching vendor:', error);
                return null;
            }
        },
        [`vendor-${slug}`],
        {
            revalidate: 60, // cache for 60 seconds
            tags: [`vendor-${slug}`, 'vendor'], // tags for cache invalidation
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
