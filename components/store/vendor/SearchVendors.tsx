"use client"

import React, { useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import debounce from 'lodash/debounce';

interface SearchVendorsProps {
    placeholder?: string;
}

export const SearchVendors = ({ placeholder = "What can we get you?" }: SearchVendorsProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Initialize input value from URL parameter
    const [inputValue, setInputValue] = useState(searchParams.get('keyword') || '');

    // Create debounced search function
    const debouncedSearch = useCallback(
        debounce((searchTerm: string) => {
            // Get current URL parameters
            const params = new URLSearchParams(searchParams);

            if (searchTerm) {
                params.set('keyword', searchTerm);
            } else {
                params.delete('keyword');
            }

            // Update URL with new search parameters
            router.push(`${pathname}?${params.toString()}`);
        }, 500),
        [pathname, router, searchParams]
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        debouncedSearch(value);
    };

    return (
        <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2
            text-gray-400 h-5 w-5" />
            <Input
                value={inputValue}
                onChange={handleSearchChange}
                className="pl-10 w-full dark:bg-darkbox bg-white"
                placeholder={placeholder}
            />
        </div>
    );
};
