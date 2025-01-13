import Axios, {AxiosError, AxiosRequestHeaders, CreateAxiosDefaults} from 'axios'
import {ApiError} from "@/constants/types/auth";
import {endpoints} from "@/constants/endpoints";
import locationStore from "@/stores/locationStore";
import {useAuthModal} from "@/stores/useAuthModal";
import {logFunction} from "@/lib/utils";
import {DEFAULT_LOCATION} from "@/constants/location";

const axiosConfig: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-Secret-Token': process.env.NEXT_PUBLIC_SECRET_TOKEN,
    } as AxiosRequestHeaders,
    withXSRFToken: true,
};

const axios = Axios.create(axiosConfig);

// Simpler location interceptor
axios.interceptors.request.use((config) => {
    try {
        // Access the state directly
        const state = locationStore.getState()

        // Set headers with fallbacks to defaults
        const headers = {
            'X-Latitude': state.latitude?.toString() || DEFAULT_LOCATION.latitude.toString(),
            'X-Longitude': state.longitude?.toString() || DEFAULT_LOCATION.longitude.toString(),
            'X-Region': state.region || DEFAULT_LOCATION.region,
            ...(state.address ? { 'X-Address': state.address } : {})
        }

        // Merge with existing headers
        config.headers = {
            ...config.headers,
            ...headers
        } as AxiosRequestHeaders

    } catch (error) {
        // If there's any issue with the store, use defaults
        config.headers = {
            ...config.headers,
            'X-Latitude': DEFAULT_LOCATION.latitude.toString(),
            'X-Longitude': DEFAULT_LOCATION.longitude.toString(),
            'X-Region': DEFAULT_LOCATION.region
        } as AxiosRequestHeaders
    }

    return config
})

axios.interceptors.response.use(
    response => response,
    async (error: AxiosError<ApiError>) => {
        if (error.response?.status === 419) {
            await csrf()
            return axios.request(error.config!)
        }

        if (error.response && error.response?.status === 401) {
            useAuthModal.getState().open(() => {
                // Retry the failed request after login
                return axios.request(error.config)
            })
        }

        return Promise.reject(error)
    }
)

export const csrf = () => axios.get(endpoints.csrf)

export default axios

export const getRequest = async (url: string, params = {}) => {
    logFunction('get_request', url)
    const response = await axios.get(url, { params });
    return response.data;
};
