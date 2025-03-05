"use client"

import React, { useState } from 'react';
import { useCartStore } from '@/stores/cartStore';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetClose
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ChevronRight, Trash2, Minus, Plus, ExternalLink, Clock } from 'lucide-react';
import Link from 'next/link';
import _ from 'lodash';
import Image from 'next/image';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const cartItems = useCartStore(state => state.items);
    const removeItem = useCartStore(state => state.removeItem);
    const updateQuantity = useCartStore(state => state.updateQuantity);
    const removeItemsByVendor = useCartStore(state => state.removeItemsByVendor);

    // State to track which vendor sections are expanded
    const [expandedVendors, setExpandedVendors] = useState<Record<string, boolean>>({});

    // Toggle vendor section expansion
    const toggleVendorExpanded = (vendorId: string) => {
        setExpandedVendors(prev => ({
            ...prev,
            [vendorId]: !prev[vendorId]
        }));
    };

    // Calculate total items in cart
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Group cart items by vendor
    const itemsByVendor = _.groupBy(cartItems, 'vendor_id');

    // Calculate store totals
    const storeTotals = Object.entries(itemsByVendor).map(([vendorId, items]) => {
        const storeTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

        // Use vendor_title if available, otherwise use "Restaurant" as default
        const vendorTitle = items[0]?.vendor_title || 'Restaurant';
        // Use vendor_slug if available, otherwise fall back to vendor_id
        const vendorSlug = items[0]?.vendor_slug || vendorId;

        return {
            vendorId,
            vendorTitle,
            vendorSlug,
            storeTotal,
            itemCount,
            items
        };
    });

    // Handle quantity update
    const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
        if (newQuantity === 0) {
            removeItem(itemId);
        } else {
            updateQuantity(itemId, newQuantity);
        }
    };

    // Handle removing all items from a vendor
    const handleDeleteVendorItems = (vendorId: string) => {
        removeItemsByVendor(vendorId);
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 bg-white dark:bg-gray-900 border-l border-border dark:border-gray-800">
                <div className="flex flex-col h-full bg-white dark:bg-gray-900">
                    <SheetHeader className="px-4 py-4 border-b border-border dark:border-gray-800 bg-white dark:bg-gray-900">
                        <SheetTitle className="flex items-center text-foreground dark:text-white">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Your Cart
                            {totalItems > 0 && (
                                <Badge variant="outline" className="ml-2 bg-transparent border-border dark:border-gray-700">
                                    {totalItems} items
                                </Badge>
                            )}
                        </SheetTitle>
                    </SheetHeader>

                    {totalItems === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-gray-900">
                            <div className="relative w-32 h-32 mb-6">
                                {/* Empty cart illustration */}
                                <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse"></div>
                                <div className="relative flex items-center justify-center w-full h-full">
                                    <div className="w-20 h-20 rounded-full bg-background border border-border dark:bg-gray-800 flex items-center justify-center">
                                        <ShoppingCart className="h-10 w-10 text-muted-foreground" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-white">Your cart is empty</h3>
                            <p className="text-muted-foreground max-w-xs mb-6">
                                Explore our restaurants and discover delicious meals to add to your cart.
                            </p>
                            <SheetClose asChild>
                                <Button className="px-6" size="lg">
                                    Browse Restaurants
                                </Button>
                            </SheetClose>

                            {/* Tips */}
                            <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                                <div className="flex items-start gap-2">
                                    <ShoppingCart className="h-4 w-4 mt-0.5 text-primary" />
                                    <span>Add items from any restaurant menu</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Clock className="h-4 w-4 mt-0.5 text-primary" />
                                    <span>Your cart will be saved for later</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <ScrollArea className="flex-1 px-4 py-4 bg-white dark:bg-gray-900">
                                <div className="space-y-6">
                                    {storeTotals.map((store) => (
                                        <div key={store.vendorId} className="bg-white dark:bg-gray-800 rounded-lg border border-border dark:border-gray-800 shadow-sm">
                                            {/* Vendor header with toggle */}
                                            <div
                                                className="flex items-center justify-between p-4 cursor-pointer"
                                                onClick={() => toggleVendorExpanded(store.vendorId)}
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-md flex items-center justify-center mr-3">
                                                        <ShoppingCart className="h-5 w-5 text-primary dark:text-primary-foreground" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-base text-foreground dark:text-white">{store.vendorTitle}</h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            {store.itemCount} {store.itemCount === 1 ? 'item' : 'items'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right flex flex-col items-end">
                                                    <p className="font-semibold text-base text-foreground dark:text-white">₦{store.storeTotal.toLocaleString()}</p>
                                                    <ChevronRight
                                                        className={`h-4 w-4 text-muted-foreground transition-transform ${
                                                            expandedVendors[store.vendorId] ? 'rotate-90' : ''
                                                        }`}
                                                    />
                                                </div>
                                            </div>

                                            {/* Expandable list of items */}
                                            {expandedVendors[store.vendorId] && (
                                                <div className="border-t border-border dark:border-gray-800">
                                                    <div className="p-4 space-y-4">
                                                        {store.items.map((item) => (
                                                            <div key={item.id} className="flex items-start">
                                                                {/* Item image */}
                                                                {item.image ? (
                                                                    <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden mr-3">
                                                                        <Image
                                                                            src={item.image}
                                                                            alt={item.title}
                                                                            width={64}
                                                                            height={64}
                                                                            className="object-cover w-full h-full"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div className="w-16 h-16 flex-shrink-0 bg-accent dark:bg-gray-700 rounded-md mr-3 flex items-center justify-center">
                                                                        <ShoppingCart className="h-6 w-6 text-muted-foreground" />
                                                                    </div>
                                                                )}

                                                                {/* Item details */}
                                                                <div className="flex-1">
                                                                    <h4 className="font-medium text-sm text-foreground dark:text-white">{item.title}</h4>

                                                                    {/* Item addons */}
                                                                    {item.addons && item.addons.length > 0 && (
                                                                        <ul className="mt-1 text-xs text-muted-foreground">
                                                                            {item.addons.map((addon) => (
                                                                                <li key={addon.item_id}>
                                                                                    {addon.name} {addon.price > 0 && `(+₦${addon.price.toLocaleString()})`}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}

                                                                    {/* Item price and quantity controls */}
                                                                    <div className="flex items-center justify-between mt-2">
                                                                        <span className="text-sm font-medium text-foreground dark:text-gray-200">₦{item.price.toLocaleString()}</span>

                                                                        <div className="flex items-center">
                                                                            <Button
                                                                                variant="outline"
                                                                                size="icon"
                                                                                className="h-6 w-6 border-border dark:border-gray-700"
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation();
                                                                                    handleUpdateQuantity(item.id, item.quantity - 1);
                                                                                }}
                                                                            >
                                                                                <Minus className="h-3 w-3" />
                                                                            </Button>
                                                                            <span className="mx-2 text-sm tabular-nums w-5 text-center text-foreground dark:text-white">{item.quantity}</span>
                                                                            <Button
                                                                                variant="outline"
                                                                                size="icon"
                                                                                className="h-6 w-6 border-border dark:border-gray-700"
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation();
                                                                                    handleUpdateQuantity(item.id, item.quantity + 1);
                                                                                }}
                                                                            >
                                                                                <Plus className="h-3 w-3" />
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Summary and checkout for this restaurant */}
                                                    <div className="p-4 border-t border-border dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                                                        <div className="mb-3">
                                                            <div className="flex justify-between mb-1">
                                                                <span className="text-sm text-muted-foreground">Subtotal</span>
                                                                <span className="text-sm font-medium text-foreground dark:text-white">₦{store.storeTotal.toLocaleString()}</span>
                                                            </div>
                                                            <div className="flex justify-between text-sm">
                                                                <span className="text-muted-foreground">Delivery Fee</span>
                                                                <span className="font-medium text-foreground dark:text-white">Calculated at checkout</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex space-x-2">
                                                            <Link
                                                                href={`/store/${store.vendorSlug}`}
                                                                className="flex-1"
                                                            >
                                                                <Button
                                                                    variant="secondary"
                                                                    className="w-full text-sm"
                                                                >
                                                                    Add More Items
                                                                </Button>
                                                            </Link>
                                                            <Link
                                                                href={`/checkout/${store.vendorSlug}`}
                                                                className="flex-1"
                                                            >
                                                                <Button
                                                                    className="w-full text-sm"
                                                                >
                                                                    Checkout
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {!expandedVendors[store.vendorId] && (
                                                <div className="flex justify-between p-4 pt-0">
                                                    <Link
                                                        href={`/store/${store.vendorSlug}`}
                                                        className="flex items-center text-sm text-primary hover:text-primary/80"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                                                        <span>View Restaurant</span>
                                                    </Link>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-destructive hover:text-destructive hover:bg-destructive/10 text-xs h-8"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteVendorItems(store.vendorId);
                                                        }}
                                                    >
                                                        <Trash2 className="h-3.5 w-3.5 mr-1" />
                                                        Remove All
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}