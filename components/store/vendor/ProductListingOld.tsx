"use client"

import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import {ProductsResponse, SectionProps} from "@/constants/types/products";
import ProductItem from "@/components/store/ProductItem";
import { getRequest } from "@/lib/axios";
import { endpoints } from "@/constants/endpoints";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';



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

const Section = ({ category, isActive, onVisible }: SectionProps) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        rootMargin: '-10% 0px -70% 0px'
    });

    React.useEffect(() => {
        if (inView) {
            onVisible(category.title);
        }
    }, [inView, category.title, onVisible]);

    return (
        <section
            ref={ref}
            id={`category-${category.title}`}
            className={cn(
                "scroll-mt-24 transition-opacity duration-200",
                inView ? "opacity-100" : "opacity-90"
            )}
        >
            <h2 className="text-xl font-bold mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 gap-4">
                {category.data.map((product) => (
                    <ProductItem
                        key={product.id}
                        {...product}
                        onAddToCart={() => {
                            console.log('Add to cart:', product);
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

const ProductsListing = ({ vendorId }: { vendorId: string }) => {
    const [activeCategory, setActiveCategory] = useState<string>('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { data: products, isLoading } = useQuery<ProductsResponse>({
        queryKey: ['vendor-products', vendorId],
        queryFn: () => getRequest(`${endpoints.vendors.product}/${vendorId}/products`)
    });

    const scrollToCategory = (categoryId: string) => {
        setActiveCategory(categoryId);
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleCategoryVisible = (categoryId: string) => {
        setActiveCategory(categoryId);
    };

    if (isLoading || !products) {
        return <LoadingSkeleton />;
    }

    // Filter products based on search query
    const filteredCategories = products.data.map(category => ({
        ...category,
        data: category.data.filter(product =>
            !searchQuery ||
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description?.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.data.length > 0);

    return (
        <div className="flex gap-6">
            {/* Fixed Category Sidebar */}
            <aside className="hidden lg:block w-60 flex-shrink-0">
                <div className={cn(
                    "sticky top-24 w-60 transition-all duration-300 ease-in-out",
                    isScrolled ? "translate-y-0" : "translate-y-4"
                )}>
                    <nav className={cn(
                        "py-4 space-y-0.5 bg-background rounded-lg transition-shadow duration-300",
                        isScrolled && "shadow-md"
                    )}>
                        {products.data.map((category) => (
                            <button
                                key={category.title}
                                onClick={() => scrollToCategory(category.title)}
                                className={cn(
                                    "w-full px-4 py-3 text-left rounded-lg text-sm font-medium transition-colors",
                                    activeCategory === category.title
                                        ? "bg-primary/10 text-primary"
                                        : "hover:bg-gray-100 text-gray-700"
                                )}
                            >
                                {category.title}
                            </button>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Search Bar */}
                <div className="sticky top-20 bg-background z-10 pb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                            placeholder="Search in menu..."
                        />
                    </div>
                </div>

                {/* Product Sections */}
                <div className="space-y-12 pb-20">
                    {filteredCategories.map((category) => (
                        <Section
                            key={category.title}
                            category={category}
                            isActive={activeCategory === category.title}
                            onVisible={handleCategoryVisible}
                        />
                    ))}
                    {searchQuery && filteredCategories.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground">
                            No items found matching "{searchQuery}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductsListing;
