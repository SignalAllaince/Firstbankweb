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
  GET_CART_DATA: (customerId: string) => `cart/read/${customerId}`,
  ADD_ITEM_TO_CART: (customerId: string) => `cart/${customerId}/add-cart-item`,
  ADD_ITEMS_TO_CART: (customerId: string) =>
    `cart/${customerId}/add-cart-items`,
  UPDATE_CART_QUANTITY: "cart/update/quantity",
  DELETE_CART_ITEM: (itemId: string) => `cart/delete/item/${itemId}`,

  // Category Endpoint
  GET_CATEGORY_PARENT: "categories/parent-only",
  GET_CATEGORY_LIST: "categories/list",
  GET_SINGLE_CATEGORY: (categoryId: string) => `categories/read/${categoryId}`,
  CREATE_CATEGORY: "categories/create",
  UPDATE_CATEGORY: "categories/update",
  DELETE_CATEGORY: (categoryId: string) => `categories/delete/${categoryId}`,
  ADD_PRODUCT_TO_CATEGORY: (categoryId: string) =>
    `categories/${categoryId}/products`,
  UPDATE_PRODUCT_IN_CATEGORY: (categoryId: string) =>
    `categories/update-product/${categoryId}`,
  UPDATE_CATEGORY_STATUS: "categories/change-status",

  // Products Endpoints
  GET_PRODUCT_BY_SEARCH: (name: string) => `products/basic-search/${name}`,
  GET_PRODUCT_BY_ID: (name: string) => `products/read/${name}`,
  GET_PRODUCTS_BY_SEARCH: "products/search",
  CREATE_PRODUCTS: "products/create",
  UPDATE_PRODUCT: "products/update",
  UPDATE_PRODUCT_STATUS: "products/change-status",
  DELETE_PRODUCT: (productId: string) => `products/delete/${productId}`,
  GET_PRODUCTS_SEARCH_OPTIONS: "products/search-options",
  GET_PRODUCTS_ORDERBY: "products/product-orderby",
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
