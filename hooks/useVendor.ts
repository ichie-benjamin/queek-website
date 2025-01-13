
import { useQuery } from '@tanstack/react-query';
import { getRequest } from '@/lib/axios';
import { endpoints } from '@/lib/axios';
import {Vendor, VendorFilters} from "@/constants/types/vendor";

// API functions using getRequest
const fetchVendors = async (filters: VendorFilters) => {
    return getRequest<Vendor[]>(endpoints.restaurants.list, filters);
};

const fetchFeaturedVendors = async () => {
    return getRequest<Vendor[]>(`${endpoints.restaurants.list}/featured`);
};

const fetchRecommendedVendors = async () => {
    return getRequest<Vendor[]>(`${endpoints.restaurants.list}/recommended`);
};

const fetchVendorsByCategory = async (category: string) => {
    return getRequest<Vendor[]>(`${endpoints.restaurants.list}`, { category });
};

const fetchVendor = async (id: string) => {
    return getRequest<Vendor>(endpoints.restaurants.detail(id));
};


export const useVendors = (filters: VendorFilters = {}) => {
    return useQuery({
        queryKey: ['vendors', filters],
        queryFn: () => fetchVendors(filters),
        select: (response) => ({
            data: response.data,
            meta: response.meta,
        }),
    });
};

export const useFeaturedVendors = () => {
    return useQuery({
        queryKey: ['vendors', 'featured'],
        queryFn: fetchFeaturedVendors,
        select: (response) => response.data,
    });
};

export const useRecommendedVendors = () => {
    return useQuery({
        queryKey: ['vendors', 'recommended'],
        queryFn: fetchRecommendedVendors,
        select: (response) => response.data,
    });
};

export const useVendorsByCategory = (category: string) => {
    return useQuery({
        queryKey: ['vendors', 'category', category],
        queryFn: () => fetchVendorsByCategory(category),
        enabled: !!category,
        staleTime: 1000 * 60 * 5, // 5 minutes
        select: (response) => response.data,
    });
};

export const useVendor = (id: string) => {
    return useQuery({
        queryKey: ['vendor', id],
        queryFn: () => fetchVendor(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5, // 5 minutes
        select: (response) => response.data,
    });
};
