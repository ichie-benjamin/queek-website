import React, { memo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import ProductItem from "@/components/store/ProductItem";
import {Product} from "@/constants/types/products";

interface SectionProps {
    category: {
        title: string;
        data: Product[];
    };
    isActive: boolean;
    onVisible: (title: string) => void;
    onOpenModal: (product : Product) => void;
}

const ProductItemSection = memo(function ProductItemSection({ category, onVisible, onOpenModal }: SectionProps) {
    const { ref, inView } = useInView({
        threshold: 0.2,
        rootMargin: '-10% 0px -70% 0px'
    });

    useEffect(() => {
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
            <h2 className="text-xl font-bold mb-6 text-foreground dark:text-foreground">{category.title}</h2>
            <div className="grid grid-cols-1 gap-4">
                {category.data.map((product) => (
                    <ProductItem
                        key={product.id}
                        {...product}
                        onOpenModal={() => onOpenModal(product)}
                    />
                ))}
            </div>
        </section>
    );
});

export default ProductItemSection;
