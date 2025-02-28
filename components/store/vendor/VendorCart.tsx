"use client"

import React, { useCallback, useMemo } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetClose
} from "@/components/ui/sheet";
import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

const EmptyCart = () => (
    <div className="text-center py-8 px-4">
        <div className="mb-6">
            <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground opacity-20" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Your Cart is Empty</h3>
        <p className="text-sm text-muted-foreground mb-4">
            Add items from the menu to start your order
        </p>
        <div className="text-xs text-muted-foreground border-t pt-4 mt-4 border-border">
            Free delivery on orders over ₦5,000
        </div>
    </div>
);

interface CartItemProps {
    id: string;
    title: string;
    price: number;
    quantity: number;
    instructions?: string;
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

const CartItem = ({
                      id,
                      title,
                      price,
                      quantity,
                      instructions,
                      onUpdateQuantity,
                      onRemove
                  }: CartItemProps) => (
    <div className="py-4 first:pt-0 last:pb-0">
        <div className="flex justify-between gap-2 mb-1">
            <div className="flex-1">
                <div className="flex justify-between mb-1">
                    <span className="font-medium">{title}</span>
                    <span className="font-medium">₦{price.toLocaleString()}</span>
                </div>
                {instructions && (
                    <p className="text-sm text-muted-foreground mb-2">{instructions}</p>
                )}
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onUpdateQuantity(id, Math.max(0, quantity - 1))}
                >
                    <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center tabular-nums">{quantity}</span>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onUpdateQuantity(id, quantity + 1)}
                >
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-destructive hover:text-destructive"
                onClick={() => onRemove(id)}
            >
                <Trash2 className="h-4 w-4" />
            </Button>
        </div>
    </div>
);

interface VendorCartProps {
    vendorId: string;
}

export function VendorCart({ vendorId }: VendorCartProps) {
    const items = useCartStore((state) => state.items);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeItem = useCartStore((state) => state.removeItem);

    const { vendorItems, total, itemCount } = useMemo(() => {
        const filteredItems = items.filter(item => item.vendor_id === vendorId);
        return {
            vendorItems: filteredItems,
            total: filteredItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            itemCount: filteredItems.reduce((sum, item) => sum + item.quantity, 0)
        };
    }, [items, vendorId]);

    const handleUpdateQuantity = useCallback((itemId: string, newQuantity: number) => {
        if (newQuantity === 0) {
            removeItem(itemId);
        } else {
            updateQuantity(itemId, newQuantity);
        }
    }, [removeItem, updateQuantity]);

    return (
        <>
            {/* Desktop Cart */}
            <div className="hidden lg:block">
                <Card className="overflow-hidden shadow-sm flex flex-col h-[calc(100vh-7rem)] border-border bg-card text-card-foreground">
                    <CardHeader className="bg-primary/5 py-3 px-4 border-b flex-none">
                        <CardTitle className="font-semibold text-base">Order Summary</CardTitle>
                    </CardHeader>

                    {vendorItems.length === 0 ? (
                        <EmptyCart />
                    ) : (
                        <>
                            {/* Scrollable Cart Items */}
                            <CardContent className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800 p-0">
                                <div className="p-4 divide-y divide-border">
                                    {vendorItems.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            {...item}
                                            onUpdateQuantity={handleUpdateQuantity}
                                            onRemove={removeItem}
                                        />
                                    ))}
                                </div>
                            </CardContent>

                            {/* Sticky Cart Summary */}
                            <CardFooter className="flex-none border-t bg-background p-0">
                                <div className="p-4 w-full">
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Subtotal</span>
                                            <span>₦{total.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Delivery Fee</span>
                                            <span>₦0</span>
                                        </div>
                                        <div className="flex justify-between font-medium text-lg pt-2 border-t border-border">
                                            <span>Total</span>
                                            <span>₦{total.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <Button className="w-full">
                                        Order {itemCount} {itemCount === 1 ? 'item' : 'items'} for ₦{total.toLocaleString()}
                                    </Button>
                                </div>
                            </CardFooter>
                        </>
                    )}
                </Card>
            </div>

            {/* Mobile Sheet (with proper structure) */}
            {vendorItems.length > 0 && (
                <Sheet>
                    {/* Sheet Trigger - The Mobile Fixed Cart Bar */}
                    <SheetTrigger asChild>
                        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 shadow-lg z-50">
                            <button className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-2">
                                    <ShoppingCart className="h-5 w-5" />
                                    <span className="font-semibold">{itemCount} {itemCount === 1 ? 'item' : 'items'}</span>
                                </div>
                                <span className="font-bold">₦{total.toLocaleString()}</span>
                            </button>
                        </div>
                    </SheetTrigger>

                    {/* Sheet Content */}
                    <SheetContent
                        side="right"
                        className="w-full sm:max-w-md p-0 bg-card text-card-foreground border-l border-border"
                    >
                        <SheetHeader className="border-b border-border p-4">
                            <SheetTitle className="flex justify-between items-center">
                                <span>Your Order</span>
                                <SheetClose asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </SheetClose>
                            </SheetTitle>
                        </SheetHeader>

                        {vendorItems.length === 0 ? (
                            <EmptyCart />
                        ) : (
                            <div className="flex flex-col h-[calc(100vh-10rem)]">
                                {/* Scrollable Cart Items */}
                                <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
                                    <div className="p-4 divide-y divide-border">
                                        {vendorItems.map((item) => (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                                onUpdateQuantity={handleUpdateQuantity}
                                                onRemove={removeItem}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Sticky Cart Summary */}
                                <div className="flex-none border-t border-border bg-background">
                                    <div className="p-4">
                                        <div className="space-y-2 mb-4">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Subtotal</span>
                                                <span>₦{total.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Delivery Fee</span>
                                                <span>₦0</span>
                                            </div>
                                            <div className="flex justify-between font-medium text-lg pt-2 border-t border-border">
                                                <span>Total</span>
                                                <span>₦{total.toLocaleString()}</span>
                                            </div>
                                        </div>

                                        <Button className="w-full">
                                            Checkout • ₦{total.toLocaleString()}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SheetContent>
                </Sheet>
            )}
        </>
    );
}
