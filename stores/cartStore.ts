import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { isEqual } from 'lodash'

export interface CartItem {
    id: string
    vendor_id: string
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

interface CartStore {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (itemId: string) => void
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
