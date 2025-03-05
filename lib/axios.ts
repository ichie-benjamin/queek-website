import Axios, { AxiosError, AxiosInstance } from 'axios';
import { ApiError } from "@/constants/types/auth";

import locationStore from "@/stores/locationStore";
import { useAuthModal } from "@/stores/useAuthModal";
import { logFunction } from "@/lib/utils";
import { DEFAULT_LOCATION } from "@/constants/location";

export interface AxiosErrorResponse {
    errors: Record<string, string[]>;
}

// Create a function to get the token from secure storage
const getAuthToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('auth_token');
    }
    return null;
};

// Set up base headers
const baseHeaders: Record<string, string> = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

// Add secret token if it exists (for app-specific authentication)
if (process.env.NEXT_PUBLIC_SECRET_TOKEN) {
    baseHeaders['X-Secret-Token'] = process.env.NEXT_PUBLIC_SECRET_TOKEN;
}

// Create axios instance
const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: new Axios.AxiosHeaders(baseHeaders)
}) as AxiosInstance;

// Request interceptor
axios.interceptors.request.use((config) => {
    // Create headers object
    const headers = new Axios.AxiosHeaders(config.headers || {});

    try {
        // Add authentication token if available
        const token = getAuthToken();
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        // Add location data from store
        const state = locationStore.getState();
        headers.set('X-Latitude', state.latitude?.toString() || DEFAULT_LOCATION.latitude.toString());
        headers.set('X-Longitude', state.longitude?.toString() || DEFAULT_LOCATION.longitude.toString());
        headers.set('X-Region', state.region || DEFAULT_LOCATION.region);

        if (state.address) {
            headers.set('X-Address', state.address);
        }

        // Update config with new headers
        config.headers = headers;
    } catch (error) {
        // If there's any issue with the store, use defaults
        logFunction('error', error);
        headers.set('X-Latitude', DEFAULT_LOCATION.latitude.toString());
        headers.set('X-Longitude', DEFAULT_LOCATION.longitude.toString());
        headers.set('X-Region', DEFAULT_LOCATION.region);

        config.headers = headers;
    }

    return config;
});

// Response interceptor
axios.interceptors.response.use(
    response => response,
    async (error: AxiosError<ApiError>) => {
        // Handle 401 Unauthorized errors (token expired or invalid)
        if (error.response?.status === 401) {
            // Clear the invalid token
            if (typeof window !== 'undefined') {
                localStorage.removeItem('auth_token');
            }

            // Show login modal
            const authModal = useAuthModal.getState();
            authModal.open(() => {
                // Retry the failed request after login
                return axios.request(error.config!);
            });
        }

        return Promise.reject(error);
    }
);

// Helper function to store token after login
export const setAuthToken = (token: string): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', token);
    }
};

// Helper function to clear token on logout
export const clearAuthToken = (): void => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
    }
};

// API request helpers
export const getRequest = async (url: string, params = {}) => {
    logFunction('get_request', url);
    const response = await axios.get(url, { params });
    return response.data;
};

export const postRequest = async (url: string, data = {}) => {
    logFunction('post_request', url);
    const response = await axios.post(url, data);
    return response.data;
};

export const putRequest = async (url: string, data = {}) => {
    logFunction('put_request', url);
    const response = await axios.put(url, data);
    return response.data;
};

export const deleteRequest = async (url: string) => {
    logFunction('delete_request', url);
    const response = await axios.delete(url);
    return response.data;
};

export default axios;