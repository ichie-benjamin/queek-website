"use client"

import React from 'react';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';


interface SearchVendorsProps {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}

export const SearchVendors = ({
                                  placeholder = "What can we get you?",
                                  value,
                                  onChange
                              }: SearchVendorsProps) => {
    return (
        <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-10 w-full dark:bg-darkbox bg-white"
                placeholder={placeholder}
            />
        </div>
    );
};
