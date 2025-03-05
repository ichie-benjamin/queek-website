import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { isEqual } from 'lodash'

export interface CartItem {
    id: string
    vendor_id: string
    vendor_title: string
    vendor_slug: string
    title: string
    price: number
    quantity: number
    image?: string
    addons?: Array<{
        addon_id: string
        item_id: string
        name: string
        price: number
    }>
}

export interface CartStore {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (itemId: string) => void
    removeItemsByVendor: (vendorId: string) => void // New function to remove all items from a vendor
    updateQuantity: (itemId: string, quantity: number) => void
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (newItem) => set((state) => {
                // Find item with same id AND same addon selections
                const existingItem = state.items.find((item) =>
                    item.id === newItem.id &&
                    isEqual(item.addons, newItem.addons)
                )

                if (existingItem) {
                    return {
                        items: state.items.map((item) =>
                            item === existingItem
                                ? { ...item, quantity: item.quantity + newItem.quantity }
                                : item
                        ),
                    }
                }

                return { items: [...state.items, newItem] }
            }),

            removeItem: (itemId) => set((state) => ({
                items: state.items.filter((item) => item.id !== itemId)
            })),

            // New function to remove all items from a specific vendor
            removeItemsByVendor: (vendorId) => set((state) => ({
                items: state.items.filter((item) => item.vendor_id !== vendorId)
            })),

            updateQuantity: (itemId, quantity) => set((state) => ({
                items: state.items.map((item) =>
                    item.id === itemId ? { ...item, quantity } : item
                )
            }))
        }),
        {
            name: 'cart-storage'
        }
    )
)