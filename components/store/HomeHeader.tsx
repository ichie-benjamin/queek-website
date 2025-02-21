"use client"
import React, { useState, useEffect } from 'react';
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Search, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {useDebounce} from "@/hooks/store/useDebounce";

interface StoreHeaderProps {
    onSearch?: (value: string) => void;
    searchPlaceholder?: string;
    initialSearchValue?: string;
    showSearch?: boolean;
}

export function HomeHeader({
                                onSearch,
                                searchPlaceholder = "What can we get you?",
                                initialSearchValue = "",
                            }: StoreHeaderProps) {
    const [searchValue, setSearchValue] = useState(initialSearchValue);
    const [scrollY, setScrollY] = useState(0);
    const debouncedScrollY = useDebounce(scrollY, 100);
    const isScrolled = debouncedScrollY > 50;

    // Track scroll with RAF for performance
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setSearchValue(initialSearchValue);
    }, [initialSearchValue]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch?.(value);
    };

    return (
        <header className={cn(
            "sticky top-0 z-40 w-full transition-all duration-300",
            isScrolled ? "bg-white shadow-md" : "bg-[#d7fec8]"
        )}>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/store" className="flex items-center space-x-2">
                        <span className="font-bold text-2xl">{siteConfig.name}</span>
                    </Link>

                    {/* Center Section - Location or Search */}
                    <div className={cn(
                        "flex-1 max-w-xl mx-8 transition-all duration-500 transform",
                        isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                            <Input
                                type="text"
                                value={searchValue}
                                onChange={handleSearchChange}
                                placeholder={searchPlaceholder}
                                className="w-full pl-10 h-11 bg-gray-50 border-0 rounded-full"
                            />
                        </div>
                    </div>

                    {/* Delivery Location - Only visible when not scrolled */}
                    <div className={cn(
                        "absolute left-1/2 transform -translate-x-1/2 flex items-center transition-all duration-500",
                        !isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    )}>
                        <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium">GRA Junction</span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="default"
                            className="rounded-full bg-primary text-white hover:bg-primary/90"
                        >
                            Login
                        </Button>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
}

