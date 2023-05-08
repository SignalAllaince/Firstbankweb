export const PAGES = {
  DASHBOARD_HOME: "/dashboard",
  DASHBOARD: {
    HOME: "/",
    AFFILIATE: "/affiliates",
    STORE: "/storefront",
    TIP: "/tips",
    TRANSACTION: "/transaction",
    CUSTOMER: "/customers",
    WALLET: "/wallets",
    ORDERS: "/orders",
    SETTINGS: "/settings",
  },
};

// Api Endpoints
export const ENDPOINTS = {
  API_BASE_URL: process.env.NEXT_PUBLIC_BACKEND,

  // Auth endpoints
  API_INITIATE_SIGNUP: "/auth/signup",
  API_FORGOT_PASSWORD: "/auth/forgot-password",
  API_RESET_PASSWORD: (token: string) => `/auth/reset-password?token=${token}`,
  VERIFY_SIGNUP_DETAILS: "/auth/verify/signup",

  // Cart Endpoints
  API_GET_CART_DATA: (customerId: string) => `cart/read/${customerId}`,
  API_ADD_ITEM_TO_CART: (customerId: string) =>
    `cart/${customerId}/add-cart-item`,
  API_ADD_ITEMS_TO_CART: (customerId: string) =>
    `cart/${customerId}/add-cart-items`,
  API_UPDATE_CART_QUANTITY: "cart/update/quantity",
  API_DELETE_CART_ITEM: (itemId: string) => `cart/delete/item/${itemId}`,
};

export const STORE = {
  TIP_PREVIEW: "_TIP_PREVIEW_",
};
export const NAMESPACE = {
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  INITIATE_SIGNUP: "INITIATE_SIGNUP",
  RESET_PASSWORD: "RESET_PASSWORD",
  CREATE_WITHDRAWAL_ACCOUNT: "CREATE_WITHDRAWAL_ACCOUNT",
  VERIFY_ACCOUNT: "VERIFY_ACCOUNT",
};
