"use client"
import React, { useState, useEffect } from 'react';
import { siteConfig } from "@/config/site";
import { cn, logFunction } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { useAuthModal } from "@/stores/useAuthModal";
import { MapPin, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface StoreHeaderProps {
    onSearch?: (value: string) => void;
    searchPlaceholder?: string;
    initialSearchValue?: string;
    showSearch?: boolean;
    showDeliveryAddress?: boolean;
}

export function StoreHeader({
                                onSearch,
                                searchPlaceholder = "What can we get you?",
                                initialSearchValue = "",
                                showSearch = true,
                                showDeliveryAddress = true
                            }: StoreHeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchValue, setSearchValue] = useState(initialSearchValue);
    const openAuthModal = useAuthModal(state => state.open);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
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

    const openModal = () => {
        openAuthModal(() => {
            logFunction('auth', 'Login')
        });
    };

    return (
        <header className="z-40 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/store" className="flex items-center space-x-2">
                        <span className="font-bold text-2xl">{siteConfig.name}</span>
                    </Link>

                    {/* Center Section - Address or Search */}
                    {showSearch && (
                        <div className={cn(
                            "flex-1 max-w-2xl mx-4 transition-all duration-500 transform",
                            isScrolled || !showDeliveryAddress ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                        )}>
                            <div className="relative">
                                <Input
                                    type="text"
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    placeholder={searchPlaceholder}
                                    className="w-full pl-12 h-12 shadow-sm rounded-full border-0"
                                />
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                            </div>
                        </div>
                    )}

                    {/* Delivery Address - Only visible when not scrolled and showDeliveryAddress is true */}
                    {showDeliveryAddress && (
                        <div className={cn(
                            "absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2 transition-all duration-500",
                            !isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                        )}>
                            <MapPin className="h-5 w-5" />
                            <span className="text-sm">Delivering to</span>
                            <span className="text-sm font-medium">Arochukwu Street, 7A</span>
                        </div>
                    )}

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={openModal}
                            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
                        >
                            <Image
                                src='/images/user.svg'
                                alt='login'
                                width={20}
                                height={20}
                                className="invert"
                            />
                            <span>Login</span>
                        </button>
                        <ModeToggle />
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
}
