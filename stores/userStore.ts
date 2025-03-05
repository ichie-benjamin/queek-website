import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define types for our user data structure
export interface DeliveryInfo {
    map_lat?: string;
    map_lng?: string;
    address?: string;
}

export interface User {
    id: string;
    username: string;
    ref_code?: string;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    avatar?: string;
    show_wallet?: boolean;
    has_pin?: boolean;
    is_online?: boolean;
    region_id?: string;
    ios_id?: string;
    android_id?: string;
    delivery_info?: DeliveryInfo;
    e_type?: string;
    e_status?: string;
    delivers_with?: string | null;
}

interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    setUser: (user: User) => void;
    updateUser: (userData: Partial<User>) => void;
    updateDeliveryInfo: (deliveryInfo: DeliveryInfo) => void;
    logout: () => void;
}

// Create the store with persistence
const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            // Set user data on login/registration
            setUser: (user: User) =>
                set({
                    user,
                    isAuthenticated: true
                }),

            // Update partial user data
            updateUser: (userData: Partial<User>) =>
                set((state) => ({
                    user: state.user ? { ...state.user, ...userData } : null
                })),

            // Update delivery info specifically
            updateDeliveryInfo: (deliveryInfo: DeliveryInfo) =>
                set((state) => ({
                    user: state.user
                        ? {
                            ...state.user,
                            delivery_info: {
                                ...(state.user.delivery_info || {}),
                                ...deliveryInfo
                            }
                        }
                        : null
                })),

            // Clear user data on logout
            logout: () =>
                set({
                    user: null,
                    isAuthenticated: false
                }),
        }),
        {
            name: 'user-storage', // name of the item in storage
            storage: createJSONStorage(() => localStorage), // use localStorage
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated
            }), // only persist these fields
        }
    )
);

export default useUserStore;