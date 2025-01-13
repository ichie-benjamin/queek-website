interface DeliveryInfo {
    is_free_delivery: boolean;
    delivery_fee: string;
    delivery_fee_value: number;
    min_order: number;
    min_order_fee: number;
    d_p_value: number;
    s_p_value: number;
    delivery_time: string;
    delivery_message: string;
    offers_free_delivery: boolean;
    offer_pickup: boolean;
    offer_instant_delivery: boolean;
    offer_shop_for_me: boolean;
    offers_delivery: boolean;
    max_delivery: boolean;
    disable_delivery: boolean;
}

export interface Vendor {
    id: string;
    name: string;
    distance: number;
    delivery_info: DeliveryInfo;
    notice: any[];
    slug: string;
    logo: string;
    disable_order: boolean;
    is_closed: boolean;
    temporary_unavailable: boolean;
    can_pre_order: boolean;
    area: string;
    banner: string;
    support_phone: string;
    support_email: string;
    slogan: string;
    tags: string;
    tag: string;
    is_new: boolean;
    rating: string;
    short_description: string;
    address: string;
    open_time: string;
    close_time: string;
    service_type: string | null;
    service: string | null;
    landmark: string | null;
    region_id: string;
    min_order_price: string;
}

export interface VendorResponse {
    status: string;
    message: string;
    data: Vendor;
}

export interface VendorsResponse {
    status: string;
    message: string;
    data?: Vendor[];
}


