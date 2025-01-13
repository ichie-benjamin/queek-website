export interface Service {
    id: string;
    name: string;
    title: string;
    type: 'food' | 'product' | 'service' | 'shop_for_me' | 'local_market';
    is_featured: number;
    color: string;
    service_id: string | null;
    icon: string;
    slug: string;
    is_more: number;
    position: number;
    requires_location: number;
}

export interface ServiceResponse {
    data: Service[];
}
