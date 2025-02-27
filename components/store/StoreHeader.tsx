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

    // Only add scroll listener for non-mobile screens
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        // Only add event listener on desktop
        if (window.innerWidth >= 768) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => window.removeEventListener('scroll', handleScroll);
        }
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
        <header className="z-40 sticky top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-900/95 dark:border-gray-800/40">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Mobile Header */}
                <div className="md:hidden flex h-14 items-center justify-between">
                    {/* Logo */}
                    <Link href="/store" className="flex items-center space-x-1">
                        <span className="font-bold text-xl text-foreground dark:text-white">{siteConfig.name}</span>
                    </Link>

                    {/* Right Section - Mode Toggle & Mobile Nav */}
                    <div className="flex items-center space-x-0">
                        <ModeToggle />
                        <MobileNav />
                    </div>
                </div>

                {/* Desktop Header */}
                <div className="hidden md:flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/store" className="flex items-center space-x-2">
                        <span className="font-bold text-2xl text-foreground dark:text-white">{siteConfig.name}</span>
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
                                    className="w-full pl-12 h-12 shadow-sm rounded-full border-0 bg-white dark:bg-gray-800"
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
                            <MapPin className="h-5 w-5 text-foreground dark:text-white" />
                            <span className="text-sm text-foreground dark:text-white/80">Delivering to</span>
                            <span className="text-sm font-medium text-foreground dark:text-white">Arochukwu Street, 7A</span>
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
                    </div>
                </div>
            </div>
        </header>
    );
}
