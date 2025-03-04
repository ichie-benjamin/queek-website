import Axios, {AxiosError, AxiosInstance } from 'axios'
import {ApiError} from "@/constants/types/auth";
import {endpoints} from "@/constants/endpoints";
import locationStore from "@/stores/locationStore";
import {useAuthModal} from "@/stores/useAuthModal";
import {logFunction} from "@/lib/utils";
import {DEFAULT_LOCATION} from "@/constants/location";


export interface AxiosErrorResponse {
    errors: Record<string, string[]>;
}

// const axios = Axios.create({
//     baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
//     withCredentials: true,
//     withXSRFToken: true,
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//         'X-Secret-Token': process.env.NEXT_PUBLIC_SECRET_TOKEN,
//     } as unknown as AxiosRequestHeaders,
// }) as AxiosInstance;


const baseHeaders: Record<string, string> = {
    'X-Requested-With': 'XMLHttpRequest',
};

// Add secret token if it exists
if (process.env.NEXT_PUBLIC_SECRET_TOKEN) {
    baseHeaders['X-Secret-Token'] = process.env.NEXT_PUBLIC_SECRET_TOKEN;
}

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,
    withXSRFToken: true,
    headers: new Axios.AxiosHeaders(baseHeaders)
}) as AxiosInstance;


axios.interceptors.request.use((config) => {
    try {
        // Access the state directly
        const state = locationStore.getState();

        // Create new headers with proper Axios.AxiosHeaders
        const newHeaders = new Axios.AxiosHeaders({
            'X-Latitude': state.latitude?.toString() || DEFAULT_LOCATION.latitude.toString(),
            'X-Longitude': state.longitude?.toString() || DEFAULT_LOCATION.longitude.toString(),
            'X-Region': state.region || DEFAULT_LOCATION.region,
            ...(state.address ? { 'X-Address': state.address } : {})
        });

        // Merge with existing headers
        if (config.headers) {
            Object.entries(config.headers).forEach(([key, value]) => {
                newHeaders.set(key, value);
            });
        }

        config.headers = newHeaders;

    } catch (error) {
        // If there's any issue with the store, use defaults
        logFunction('error', error);
        config.headers = new Axios.AxiosHeaders({
            ...config.headers,
            'X-Latitude': DEFAULT_LOCATION.latitude.toString(),
            'X-Longitude': DEFAULT_LOCATION.longitude.toString(),
            'X-Region': DEFAULT_LOCATION.region
        });
    }

    return config;
});

axios.interceptors.response.use(
    response => response,
    async (error: AxiosError<ApiError>) => {
        // if (error.response?.status === 419) {
        //     await csrf();
        //     return axios.request(error.config!);
        // }

        if (error.response && error.response?.status === 401) {
            useAuthModal.getState().open(() => {
                // Retry the failed request after login
                return axios.request(error.config!);
            });
        }

        return Promise.reject(error);
    }
);


export const csrf = () => axios.get(endpoints.csrf)

export default axios

export const getRequest = async (url: string, params = {}) => {
    logFunction('get_request', url)
    const response = await axios.get(url, { params });
    return response.data;
};
