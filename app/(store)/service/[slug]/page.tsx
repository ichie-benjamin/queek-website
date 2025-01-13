import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import ServiceSidebar from "@/components/store/ServiceSidebar";
import {endpoints} from "@/constants/endpoints";
import {VendorGrid} from "@/components/store/vendor/VendorGrid";
import {Header} from "@/components/store/layout/Header";


const Page = () => {
    return (
    <div className="min-h-screen bg-gray-50">
        {/* Fixed Header */}
        <Header />

        {/* Main Content Container - starts after header */}
        <div className="pt-4"> {/* Adjust based on header height */}
            <div className="container mx-auto px-4">
                <div className="relative lg:flex gap-6">
                    {/* Fixed Sidebar - Hidden on mobile */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="fixed w-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
                            <ServiceSidebar />
                        </div>
                    </aside>

                    {/* Main Scrollable Content */}
                    <main className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">

                        <div className="container mx-auto px-4 py-6">
                            <h1 className="text-3xl font-bold mb-6">Food delivery in Lagos</h1>
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input
                                    className="pl-10 w-full"
                                    placeholder="What can we get you?"
                                />
                            </div>
                        </div>



                        <div className="space-y-6 pb-8">
                            <VendorGrid
                                title="All Vendors"
                                endpoint={`${endpoints.vendors.list}?recommended`}
                            />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Page;
