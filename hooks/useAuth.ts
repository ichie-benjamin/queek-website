import { useCallback } from 'react';
import useUserStore from '@/stores/userStore';
import { clearAuthToken } from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { useAuthModal } from '@/stores/useAuthModal';


export const useAuth = () => {
    const { user, isAuthenticated, logout } = useUserStore();
    const router = useRouter();
    const { open: openAuthModal } = useAuthModal();


    const checkAuth = useCallback(() => {
        return isAuthenticated && !!user;
    }, [isAuthenticated, user]);

    /**
     * Handle user logout
     * Clears token and user data
     */
    const handleLogout = useCallback(() => {
        // Clear auth token from localStorage
        clearAuthToken();

        // Clear user data from store
        logout();

        // Redirect to home page
        router.push('/');
    }, [logout, router]);


    const requireAuth = useCallback(() => {
        if (!isAuthenticated || !user) {
            openAuthModal();
            return false;
        }
        return true;
    }, [isAuthenticated, user, openAuthModal]);

    return {
        user,
        isAuthenticated,
        checkAuth,
        logout: handleLogout,
        requireAuth
    };
};

export default useAuth;