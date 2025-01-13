"use client";


import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";

const DynamicNav = ({ address = "Arochukwu Street, 7A" }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 100); // Adjust this threshold as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
            isScrolled ? "bg-white shadow-md" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/logo.svg"
                            alt="Glovo"
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Center Section - Address or Search */}
                    <div className="flex-1 max-w-2xl mx-4">
                        {isScrolled ? (
                            <div className="relative">
                                <Input
                                    type="text"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder="What can we get you?"
                                    className="w-full pl-10"
                                />
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center text-sm">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>Delivering to</span>
                                <span className="ml-1 font-medium text-primary">{address}</span>
                            </div>
                        )}
                    </div>

                    {/* Login Button */}
                    <div>
                        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DynamicNav;
