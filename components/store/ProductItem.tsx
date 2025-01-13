import React from 'react';
import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {ProductItemProps} from "@/constants/types/products";


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
        <Card  onClick={onOpenModal} className="flex justify-between p-4 hover:shadow-md transition-all group">
            <div className="flex-1 pr-4">
                <h3 className="font-medium text-base- text-lg">{title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-4">{description}</p>
                <div className="mt-2 flex  items-center gap-2">
          <span className="font-semibold text-gray-600">
            {priceInfo.display_text}
          </span>
                    {hasDiscount && (
                        <span className="text-sm text-gray-500 line-through">
              {priceInfo.sale_price_text}
            </span>
                    )}
                </div>
            </div>

            <div className="relative min-w-[100px] h-[100px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                />
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
