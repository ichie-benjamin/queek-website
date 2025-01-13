import React, {Suspense, use} from 'react';
import ServiceSidebar from "@/components/store/ServiceSidebar";
import {endpoints} from "@/constants/endpoints";
import {VendorSkeletonList} from "@/components/store/vendor/VendorSkeletonList";
import {VendorGridList} from "@/components/store/vendor/VendorGridList";
import {SearchVendors} from "@/components/store/vendor/SearchVendors";
import {getServiceName} from "@/lib/utils";

interface PageProps {
    params: Promise<{ slug: string }>;
}

const Page = ({ params }: PageProps) => {
    const { slug } = use(params);

    return (
        <div className="container mx-auto sm:max-w-7xl px-4 py-8">
            <div className="pt-4">
                <div className="relative lg:flex gap-6">
                    {/* Sidebar with sticky positioning */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-32 space-y-4">
                            <ServiceSidebar />
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-h-screen">
                        <div className="flex justify-between px-10- py-3">
                            <div className="w-1/4">
                                <h1 className="text-2xl font-semibold mb-6">{getServiceName(slug)} Listing</h1>
                            </div>
                            <div className="sm:w-2/4">
                                <SearchVendors />
                            </div>
                        </div>

                        <div className="space-y-6 pb-8">
                            <Suspense fallback={<VendorSkeletonList />}>
                                <VendorGridList
                                    endpoint={`${endpoints.vendors.by_service(slug)}`}
                                />
                            </Suspense>

                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Page;
