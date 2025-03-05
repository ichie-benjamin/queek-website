"use client"
import React, { useState, useEffect } from 'react';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { MapPin, Search, ShoppingCart, User } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useAuth from '@/hooks/useAuth';
import { useAuthModal } from '@/stores/useAuthModal';
import { useCartStore } from '@/stores/cartStore';
import { CartDrawer } from '@/components/CartDrawer';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();
    const { open: openAuthModal } = useAuthModal();
    const cartItems = useCartStore(state => state.items);

    // Calculate total items in cart
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Only add scroll listener for non-mobile screens
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        // Add event listener
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

    // Get user initials for avatar
    const getInitials = () => {
        if (!user) return 'G';
        const firstName = user.first_name || '';
        const lastName = user.last_name || '';
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    return (
        <header className="z-40 sticky top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-900/95 dark:border-gray-800/40">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/store" className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-green-600 rounded">
                            <span className="font-bold text-lg text-white flex items-center justify-center h-full">
                                C
                            </span>
                        </div>
                    </Link>

                    {/* Center Section - Address or Search */}
                    {showSearch && (
                        <div className={cn(
                            "hidden md:flex flex-1 max-w-2xl mx-4 transition-all duration-500 transform",
                            isScrolled || !showDeliveryAddress ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                        )}>
                            <div className="relative w-full">
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
                            "hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-2 transition-all duration-500",
                            !isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                        )}>
                            <MapPin className="h-5 w-5 text-green-600" />
                            <span className="text-sm text-foreground dark:text-white/80">Delivering to</span>
                            <span className="text-sm font-medium text-foreground dark:text-white">
                                {user?.delivery_info?.address
                                    ? user.delivery_info.address.split(',')[0]
                                    : "Set location"}
                            </span>
                        </div>
                    )}

                    {/* Location picker - shown on mobile */}
                    <div className="md:hidden flex items-center space-x-1 cursor-pointer">
                        <MapPin className="h-5 w-5 text-green-600" />
                        <span className="text-sm truncate max-w-[120px]">
                            {user?.delivery_info?.address
                                ? user.delivery_info.address.split(',')[0]
                                : "Lagos Continental Hotel"}
                        </span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* Right section with icons */}
                    <div className="flex items-center space-x-2">
                        {/* Search button (visible on mobile) */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="md:hidden rounded-full w-10 h-10 bg-gray-100 dark:bg-gray-800 border-0 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <Search className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        </Button>

                        {/* Cart button with count badge */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-10 h-10 bg-gray-100 dark:bg-gray-800 border-0 hover:bg-gray-200 dark:hover:bg-gray-700 relative"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingCart className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            {totalItems > 0 && (
                                <Badge
                                    className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[18px] h-[18px] text-[10px] bg-green-600 border-0"
                                >
                                    {totalItems}
                                </Badge>
                            )}
                        </Button>

                        {/* Cart Drawer */}
                        <CartDrawer
                            isOpen={isCartOpen}
                            onClose={() => setIsCartOpen(false)}
                        />

                        {/* User dropdown or login */}
                        {isAuthenticated && user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full w-10 h-10 p-0 bg-green-100 dark:bg-green-900 border-0 hover:bg-green-200 dark:hover:bg-green-800"
                                    >
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={user.avatar} alt={user.name} />
                                            <AvatarFallback className="bg-green-600 text-white">
                                                {getInitials()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">{user.name}</p>
                                            <p className="text-xs leading-none text-muted-foreground truncate">
                                                {user.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/profile" className="cursor-pointer">
                                            My Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/orders" className="cursor-pointer">
                                            My Orders
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/saved-locations" className="cursor-pointer">
                                            Saved Locations
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/favorites" className="cursor-pointer">
                                            Favorites
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                        <div className="flex items-center justify-between w-full">
                                            <span>Theme</span>
                                            <ModeToggle asDropdownItem={true} />
                                        </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={logout}
                                        className="text-red-500 focus:text-red-500 cursor-pointer"
                                    >
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button
                                onClick={() => openAuthModal()}
                                variant="outline"
                                size="icon"
                                className="rounded-full w-10 h-10 bg-gray-100 dark:bg-gray-800 border-0 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <User className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}