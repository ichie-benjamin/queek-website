import { create } from 'zustand'

interface AuthModalStore {
    isOpen: boolean
    onSuccess?: () => void
    open: (onSuccess?: () => void) => void
    close: () => void
}

export const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen: false,
    onSuccess: undefined,
    open: (onSuccess) => set({ isOpen: true, onSuccess }),
    close: () => set({ isOpen: false, onSuccess: undefined })
}))
