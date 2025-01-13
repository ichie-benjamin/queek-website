
export interface PriceInfo {
    amount: number;
    display_text: string;
    discount: string;
    sale_price: number;
    sale_price_text: string;
    currencyCode: string;
    discount_text: string;
}

export interface ProductItemProps {
    title: string;
    description: string;
    price: number;
    sale_price: number;
    priceInfo: PriceInfo;
    image: string;
    stock: boolean;
    onOpenModal: () => void
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    sale_price: number;
    variations_count?: number;
    priceInfo: PriceInfo;
    image: string;
    vendor_id: string;
    stock: boolean;
    tags: string[];
}

export interface CategoryData {
    title: string;
    data: Product[];
    view_more: boolean;
}


export interface ProductsResponse {
    status: string;
    message: string;
    data: CategoryData[];
}

export interface Category {
    title: string;
    data: Product[];
    view_more: boolean;
}

export interface SectionProps {
    category: Category;
    isActive: boolean;
    onVisible: (categoryId: string) => void;
}
