export const endpoints = {
    csrf: '/session',
    auth: {
        login: '/login',
        register: '/auth/register',
        logout: '/logout',
        user: '/api/user',
        verify_phone: '/web/auth/verify/phone',
        check_phone: '/auth/check/phone',
    },

    products: {
        view:(id: string) => `/product/${id}`,
    },
    vendors: {
        list: `s/vendors`,
        by_service:(slug: string) => `/data/service/vendors/${slug}`,
        view: `/vendor/show`,
        product: `/vendor`,
    },
    orders: {
        create: '/api/orders',
        list: '/api/orders',
        detail: (id: string) => `/api/orders/${id}`,
        track: (id: string) => `/api/orders/${id}/track`,
    },
    services: {
        list: '/s/services/featured',
    },
}
