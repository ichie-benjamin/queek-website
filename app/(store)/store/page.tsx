"use client"

import React, {Suspense, useState} from 'react';
import {Categories} from "@/components/store/home/Categories";

import {HomeData} from "@/components/store/home/HomeData";
import {Search} from "lucide-react";

import {useRouter} from "next/navigation";
import Input from "@/components/Input";
import {HomeHeader} from "@/components/store/HomeHeader";


const HomePage = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (value: string) => {
        if (value.trim()) {
            router.push(`/store/search?keyword=${encodeURIComponent(value.trim())}`);
        }
    };

    return (
        <>
            <HomeHeader
                onSearch={handleSearch}
                searchPlaceholder="What can we get you?"
                initialSearchValue={searchQuery}
            />


            {/* Hero Section with curved bottom */}
            <section className="relative bg-[#d7fec8] pt-8">
                <div className="container mx-auto max-w-6xl px-4 pb-24">
                    {/* Categories */}
                    <div className="mt-12 mb-24">
                        <Categories />
                    </div>
                </div>

                {/* Curved bottom with search input positioned on it */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg
                        viewBox="0 0 1440 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 96H1440V40C1440 40 1088 0 720 0C352 0 0 40 0 40V96Z"
                            fill="white"
                        />
                    </svg>

                    {/* Search positioned on the curve */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                            <Input
                                value={searchQuery}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (e.key === 'Enter') {
                                        handleSearch(searchQuery);
                                    }
                                }}
                                className="w-full pl-12 h-14 text-lg bg-white border-0 rounded-full shadow-lg"
                                placeholder="What can we get you?"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto sm:max-w-6xl px-4 py-8">


                {/*<Categories />*/}
                <Suspense>
                    <HomeData />
                </Suspense>
            </div>
        </>
    );
};

export default HomePage;
