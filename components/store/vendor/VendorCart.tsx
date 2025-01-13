import React, { useMemo, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
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
        <div className="text-xs text-muted-foreground border-t pt-4 mt-4">
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
        <Card className="overflow-hidden shadow-sm flex flex-col h-[calc(100vh-7rem)]">
            <div className="bg-primary/5 py-3 px-4 border-b flex-none">
                <h3 className="font-semibold">Order Summary</h3>
            </div>

            {vendorItems.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    {/* Scrollable Cart Items */}
                    <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        <div className="p-4 divide-y">
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
                    <div className="flex-none border-t bg-background">
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
                                <div className="flex justify-between font-medium text-lg pt-2 border-t">
                                    <span>Total</span>
                                    <span>₦{total.toLocaleString()}</span>
                                </div>
                            </div>

                            <Button className="w-full">
                                Order {itemCount} {itemCount === 1 ? 'item' : 'items'} for ₦{total.toLocaleString()}
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </Card>
    );
}
