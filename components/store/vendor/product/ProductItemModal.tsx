import React, { useState, useCallback } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from 'lucide-react'
import { useCartStore, CartItem } from '@/stores/cartStore'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useQuery } from '@tanstack/react-query'
import { getRequest } from "@/lib/axios"
import { endpoints } from "@/constants/endpoints"
import { Product } from "@/constants/types/products"
import { Skeleton } from "@/components/ui/skeleton"

interface Addon {
    id: string
    title: string
    required: number
    min: number
    max: number
    multiple_selection: number
    items: Array<{
        id: string
        name: string
        price: number
        variation_id: string
    }>
}

interface ProductModalProps {
    isOpen: boolean
    onClose: () => void
    product: Product
}

interface ProductVariations {
    data: {
        addons: Addon[]
    }
}

interface AddonSelection {
    [key: string]: string
}

const AddonSkeleton = () => (
    <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-16" />
        </div>
        <div className="space-y-2">
            {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-14 w-full rounded-lg" />
            ))}
        </div>
    </div>
);

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
    const [quantity, setQuantity] = useState(1)
    const [selectedAddons, setSelectedAddons] = useState<AddonSelection>({})
    const addItem = useCartStore(state => state.addItem)

    const { data: variations, isLoading: isLoadingVariations } = useQuery<ProductVariations>({
        queryKey: ['product-variations', product.id],
        queryFn: () => getRequest(`${endpoints.products.view(product.id)}`),
        enabled: isOpen && (product.variations_count ?? 0) > 0, // Added null coalescing
    })

    const calculateTotalPrice = useCallback(() => {
        let total = product.price;
        if (variations?.data.addons) {
            variations.data.addons.forEach(addon => {
                const selectedItemId = selectedAddons[addon.id];
                if (selectedItemId) {
                    const selectedItem = addon.items.find(item => item.id === selectedItemId);
                    if (selectedItem) {
                        total += selectedItem.price;
                    }
                }
            });
        }
        return total * quantity;
    }, [product.price, quantity, selectedAddons, variations]);


    const areAllRequiredAddonsSelected = useCallback(() => {
        if (!variations?.data.addons) return true
        return variations.data.addons.every(addon =>
            !addon.required || selectedAddons[addon.id]
        )
    }, [variations, selectedAddons])

    const handleAddonChange = (addonId: string, itemId: string) => {
        setSelectedAddons(prev => ({
            ...prev,
            [addonId]: itemId
        }))
    }

    const handleAddToCart = useCallback(() => {
        if (!areAllRequiredAddonsSelected()) return

        const cartItem: CartItem = {
            id: product.id,
            vendor_id: product.vendor_id,
            title: product.title,
            price: calculateTotalPrice() / quantity,
            quantity,
            image: product.image,
            addons: Object.entries(selectedAddons).map(([addonId, itemId]) => {
                const addon = variations?.data.addons.find(a => a.id === addonId)
                const item = addon?.items.find(i => i.id === itemId)
                return {
                    addon_id: addonId,
                    item_id: itemId,
                    name: item?.name || '',
                    price: item?.price || 0
                }
            })
        }

        addItem(cartItem)
        setQuantity(1)
        setSelectedAddons({})
        onClose()
    }, [product, quantity, selectedAddons, variations, addItem, onClose, calculateTotalPrice, areAllRequiredAddonsSelected])

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="flex flex-col max-h-[90vh] max-w-md p-0 gap-0 bg-white">
                {/* Fixed Header */}
                <DialogHeader className="flex-none p-6 pb-4 relative border-b">
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </button>
                    <DialogTitle>{product.title}</DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                        {product.description || "Choose your preferences below"}
                    </DialogDescription>
                </DialogHeader>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="p-6">
                        {product.image && (
                            <div className="relative w-full h-48 mb-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover rounded-lg"
                                    loading="lazy"
                                />
                            </div>
                        )}

                        {/* Loading or Addons Sections */}
                        {isLoadingVariations ? (
                            <>
                                <AddonSkeleton />
                                <AddonSkeleton />
                                <AddonSkeleton />
                            </>
                        ) : (
                            variations?.data.addons.map((addon) => (
                                <div key={addon.id} className="mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium">{addon.title}</h3>
                                        {addon.required === 1 && (
                                            <span className="text-sm font-semibold text-rose-500">
                                                Required
                                            </span>
                                        )}
                                    </div>
                                    <RadioGroup
                                        value={selectedAddons[addon.id] || ''}
                                        onValueChange={(value) => handleAddonChange(addon.id, value)}
                                        className="space-y-2"
                                    >
                                        {addon.items.map((item) => (
                                            <div key={item.id} className="flex items-center justify-between space-x-2 p-3 rounded-lg border">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value={item.id} id={item.id} />
                                                    <Label htmlFor={item.id} className="cursor-pointer">
                                                        {item.name}
                                                    </Label>
                                                </div>
                                                {item.price > 0 && (
                                                    <span className="text-sm">
                                                        +₦{item.price.toLocaleString()}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Fixed Bottom Section */}
                <div className="flex-none border-t p-6 bg-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                disabled={isLoadingVariations}
                            >
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center tabular-nums">{quantity}</span>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => setQuantity(quantity + 1)}
                                disabled={isLoadingVariations}
                            >
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                        <Button
                            className="flex-1 ml-4"
                            size="lg"
                            onClick={handleAddToCart}
                            disabled={(product.variations_count || 0) > 0 &&
                                (isLoadingVariations || !areAllRequiredAddonsSelected())}
                        >
                            {isLoadingVariations ?
                                "Loading options..." :
                                `Add ${quantity} • ₦${calculateTotalPrice().toLocaleString()}`
                            }
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
