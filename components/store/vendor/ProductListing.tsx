"use client"

import React, { useEffect, useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { cn } from '@/lib/utils';
import {Product} from "@/constants/types/products";
import { getRequest } from "@/lib/axios";
import { endpoints } from "@/constants/endpoints";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import ProductItemSection from "@/components/store/vendor/product/ProductItemSection";
import ProductModal from "@/components/store/vendor/product/ProductItemModal";
import {EmptyProducts} from "@/components/store/vendor/EmptyProducts";
import {Button} from "@/components/ui/button";
import {Vendor} from "@/constants/types/vendor";

const LoadingSkeleton = () => (
    <div className="flex gap-6">
        <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="fixed w-64 pr-4">
                <div className="space-y-2 py-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Skeleton key={i} className="w-full h-12 rounded-lg" />
                    ))}
                </div>
            </div>
        </aside>
        <main className="flex-1 space-y-8">
            {[1, 2, 3].map((section) => (
                <div key={section} className="space-y-4">
                    <Skeleton className="w-48 h-6" />
                    {[1, 2, 3].map((item) => (
                        <Skeleton key={item} className="w-full h-24 rounded-lg" />
                    ))}
                </div>
            ))}
        </main>
    </div>
);

interface ProductsListingProps {
    vendorId: string;
    vendor?: Vendor;
    headerSearchQuery: string;
    onHeaderSearchChange: (query: string) => void;
    showHeaderSearch: boolean;
}

interface ProductCategory {
    title: string;
    data: Product[];
}


const ProductsListing = ({
                             vendorId,vendor,
                             headerSearchQuery,
                             onHeaderSearchChange,
                             showHeaderSearch
                         }: ProductsListingProps) => {

    const [activeCategory, setActiveCategory] = useState<string>('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check if we're on mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        setSearchQuery(headerSearchQuery);
    }, [headerSearchQuery]);

    // Track scroll position with debounce (only affects desktop behavior)
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                setIsScrolled(window.scrollY > 50);
            }, 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const { data: products, isLoading } = useQuery({
        queryKey: ['vendor-products', vendorId],
        queryFn: () => getRequest(`${endpoints.vendors.product}/${vendorId}/products`),
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });

    const hasProducts = products?.data.some((category: ProductCategory) => category.data.length > 0);

    // Handle local search changes
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        onHeaderSearchChange(value); // Sync with header search
    };

    const filteredCategories: ProductCategory[] = React.useMemo(() => {
        if (!products?.data) return [];
        if (!searchQuery) return products.data;

        return products.data
            .map((category: ProductCategory) => ({
                ...category,
                data: category.data.filter((product: Product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.description?.toLowerCase().includes(searchQuery.toLowerCase())
                )
            }))
            .filter((category: ProductCategory) => category.data.length > 0);
    }, [products?.data, searchQuery]);

    const handleOpenModal = useCallback((product: Product) => {
        setSelectedProduct(product);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedProduct(null);
    }, []);

    const scrollToCategory = useCallback((categoryId: string) => {
        setActiveCategory(categoryId);
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
            const yOffset = isMobile ? -120 : -80; // Adjust offset for mobile to account for the sticky headers
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [isMobile]);

    const handleCategoryVisible = useCallback((categoryId: string) => {
        setActiveCategory(categoryId);
    }, []);

    if (isLoading || !products) {
        return <LoadingSkeleton />;
    }

    return (
        <div className="flex flex-col md:flex-row md:gap-6 relative">
            {/* Mobile Categories - Start in normal flow, become sticky when scrolled */}
            {hasProducts && isMobile && (
                <div className="sticky top-14 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-900/95 border-b border-border/40 dark:border-gray-800/40">
                    {/* Categories Scrollable Row */}
                    <div className="flex overflow-x-auto hide-scrollbar space-x-2 py-3 px-2 border-b border-border/10 dark:border-gray-800/10 no-wrap whitespace-nowrap">
                        {products.data.map((category: ProductCategory) => (
                            <Button
                                key={category.title}
                                onClick={() => scrollToCategory(category.title)}
                                variant={activeCategory === category.title ? "default" : "outline"}
                                size="sm"
                                className={cn(
                                    "whitespace-nowrap flex-shrink-0 text-sm py-1 px-3 rounded-full",
                                    activeCategory === category.title
                                        ? "shadow-sm"
                                        : "text-foreground dark:text-foreground/80 bg-background/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
                                )}
                            >
                                {category.title}
                                <span className="ml-1 text-xs opacity-70">
                                    ({category.data.length})
                                </span>
                            </Button>
                        ))}
                    </div>

                    {/* Search Bar - Also sticky on mobile */}
                    {!showHeaderSearch && (
                        <div className="p-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="pl-10 bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700"
                                    placeholder="Search in menu..."
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Desktop Category Sidebar */}
            {hasProducts && !isMobile && (
                <aside className="hidden md:block w-60 flex-shrink-0">
                    <div className={cn(
                        "sticky top-24 w-60 transition-all duration-300 ease-in-out",
                        isScrolled ? "translate-y-0" : "translate-y-4"
                    )}>
                        <nav className={cn(
                            "py-4 space-y-0.5 bg-background dark:bg-background rounded-lg transition-shadow duration-300",
                            isScrolled && "shadow-md"
                        )}>
                            {products.data.map((category: ProductCategory) => (
                                <button
                                    key={category.title}
                                    onClick={() => scrollToCategory(category.title)}
                                    className={cn(
                                        "w-full px-4 py-3 text-left rounded-lg text-sm font-medium transition-colors",
                                        activeCategory === category.title
                                            ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                                            : "hover:bg-gray-100 text-foreground dark:hover:bg-gray-800"
                                    )}
                                >
                                    {category.title}
                                    <span className="ml-2 text-xs text-muted-foreground">
                                        ({category.data.length})
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>
            )}

            {/* Main Content */}
            <div className="flex-1 min-w-0">
                {/* Desktop Search Bar - Shows/hides based on scroll */}
                {hasProducts && !isMobile && !showHeaderSearch && (
                    <div className="sticky top-16 bg-background dark:bg-background z-10 pb-4 pt-4 md:pt-0">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="pl-10 bg-white dark:bg-gray-900"
                                placeholder="Search in menu..."
                            />
                        </div>
                    </div>
                )}

                {/* Product Sections or Empty State */}
                {!hasProducts ? (
                    <EmptyProducts
                        isSearching={false}
                        className="mt-4 px-3"
                    />
                ) : filteredCategories.length === 0 ? (
                    <EmptyProducts
                        isSearching={true}
                        searchQuery={searchQuery}
                        onClearSearch={() => setSearchQuery('')}
                        className="mt-4 px-3"
                    />
                ) : (
                    <div className="space-y-8 md:space-y-12 pb-20 px-3 md:px-0 pt-2">
                        {filteredCategories.map((category) => (
                            <ProductItemSection
                                key={category.title}
                                category={category}
                                isActive={activeCategory === category.title}
                                onVisible={handleCategoryVisible}
                                onOpenModal={handleOpenModal}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Single Modal Instance */}
            {selectedProduct && (
                <ProductModal
                    isOpen={!!selectedProduct}
                    onClose={handleCloseModal}
                    product={{
                        ...selectedProduct,
                        vendor_id: vendorId // Ensure vendor_id is passed
                    }}
                    vendorName={vendor?.name ?? 'Restaurant'} // Pass only the vendor name
                    vendorSlug={vendor?.slug ?? vendorId} // Pass only the vendor slug
                />
            )}
        </div>
    );
};

export default ProductsListing;
