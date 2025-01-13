import React from 'react';
import { UtensilsCrossed, Clock, Search, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EmptyProductsProps {
    isSearching: boolean;
    searchQuery?: string;
    onClearSearch?: () => void;
    className?: string;
}

export const EmptyProducts = ({
                                  isSearching,
                                  searchQuery = '',
                                  onClearSearch,
                                  className
                              }: EmptyProductsProps) => {
    return (
        <div className={cn(
            "flex flex-col items-center justify-center min-h-[400px] px-4 py-12",
            className
        )}>
            {/* Icon with animated background */}
            <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse" />
                <div className="relative bg-primary/10 p-4 rounded-full">
                    {isSearching ? (
                        <Search className="h-8 w-8 text-primary" />
                    ) : (
                        <UtensilsCrossed className="h-8 w-8 text-primary" />
                    )}
                </div>
            </div>

            {/* Main message */}
            <div className="text-center space-y-2 mb-8">
                <h3 className="text-lg font-semibold">
                    {isSearching ? (
                        `No items found matching "${searchQuery}"`
                    ) : (
                        "No menu items available"
                    )}
                </h3>
                <p className="text-muted-foreground max-w-md">
                    {isSearching ? (
                        "Try adjusting your search terms or browse our menu categories"
                    ) : (
                        "This vendor hasn't added any items to their menu yet. Please check back later."
                    )}
                </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col items-center gap-4">
                {isSearching && onClearSearch && (
                    <Button
                        variant="outline"
                        onClick={onClearSearch}
                        className="w-full sm:w-auto"
                    >
                        Clear search and show all items
                    </Button>
                )}
            </div>

            {/* Additional info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Menu updates regularly</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="h-4 w-4" />
                    <span>Check back soon</span>
                </div>
            </div>
        </div>
    );
};
