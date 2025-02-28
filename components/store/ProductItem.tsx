import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductItemProps } from "@/constants/types/products";
import { cn } from '@/lib/utils';

const ProductItem = ({
                         title,
                         description,
                         priceInfo,
                         image,
                         stock,
                         onOpenModal
                     }: ProductItemProps) => {
    const hasDiscount = parseFloat(priceInfo.discount) > 0;

    return (
        <Card
            onClick={onOpenModal}
            className="flex justify-between p-4 hover:shadow-md transition-all group bg-card dark:bg-card border-border dark:border-gray-800"
        >
            <div className="flex-1 pr-3">
                <h3 className="font-medium text-base text-foreground dark:text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1 line-clamp-3">{description}</p>
                <div className="mt-2 flex items-center gap-2">
                    <span className="font-semibold text-foreground dark:text-foreground">
                        {priceInfo.display_text}
                    </span>
                    {hasDiscount && (
                        <span className="text-sm text-muted-foreground dark:text-muted-foreground/70 line-through">
                            {priceInfo.sale_price_text}
                        </span>
                    )}
                </div>
            </div>

            <div className={cn(
                "relative flex-shrink-0 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-lg overflow-hidden"
            )}>
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 640px) 80px, 100px"
                    />
                ) : (
                    <div className="w-full h-full bg-muted dark:bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground dark:text-muted-foreground text-xs">No image</span>
                    </div>
                )}

                {stock && (
                    <Button
                        size="icon"
                        className="absolute -bottom-3 -right-3 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Plus className="w-4 h-4" />
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default ProductItem;
