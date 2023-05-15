// Api Endpoints
export const ENDPOINTS = {
  API_BASE_URL: process.env.NEXT_PUBLIC_BACKEND,

  // Auth endpoints
  API_INITIATE_SIGNUP: "/auth/signup",
  API_FORGOT_PASSWORD: "/auth/forgot-password",
  API_RESET_PASSWORD: (token: string) => `/auth/reset-password?token=${token}`,
  VERIFY_SIGNUP_DETAILS: "/auth/verify/signup",

  // Cart Endpoints
  GET_CART_DATA: (userId: string) => `cart/read/${userId}`,
  ADD_ITEM_TO_CART: (userId: string) => `cart/${userId}/add-cart-item`,
  ADD_ITEMS_TO_CART: (userId: string) => `cart/${userId}/add-cart-items`,
  UPDATE_CART_ITEM_QUANTITY: "cart/update/quantity",
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

  // Tax Endpoints
  GET_TAX_RATE_LIST: "tax-rates/read",
  GET_SINGLE_TAX: (taxId: string) => `tax-rates/read/${taxId}`,
  CREATE_TAX_RATE: "tax-rates/create",
  UPDATE_TAX_RATE: "tax-rates/update",
  DELETE_TAX: (taxId: string) => `tax-rates/delete/${taxId}`,
  GET_TAX_PER_COUNTRY: (countryId: string) => `tax-rates/export/${countryId}`,
  TAX_IMPORT_POST: "tax-rates/import",

  // State Endpoint
  GET_STATE_LIST: "statesndpr/list",
  GET_SINGLE_STATE: (stateId: string) => `statesndpr/read/${stateId}`,
  UPDATE_STATE_DETAILS: "statesndpr/update",
  DELETE_STATE: (stateId: string) => `statesnpdr/delete/${stateId}`,
  GET_STATES_BY_SEARCH: "statesnpdr/search",
  CREATE_STATE: "statesnpdr/create",
  IMPORT_STATES_BY_COUNTRYID: (countryId: string) =>
    `statesnpdr/import-states/${countryId}`,
  EXPORT_STATES_BY_COUNTRYID: (countryId: string) =>
    `statesnpdr/export-states/${countryId}`,
};

export const STORE = {
  TIP_PREVIEW: "_TIP_PREVIEW_",
};
export const NAMESPACE = {
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  INITIATE_SIGNUP: "INITIATE_SIGNUP",
  RESET_PASSWORD: "RESET_PASSWORD",
  CREATE_WITHDRAWAL_ACCOUNT: "CREATE_WITHDRAWAL_ACCOUNT",

  // categories
  GET_CATEGORY_PARENT: "GET_CATEGORY_PARENT",
  GET_CATEGORY_LIST: "GET_CATEGORY_LIST",
  GET_SINGLE_CATEGORY: "GET_SINGLE_CATEGORY",
  CREATE_CATEGORY: "CREATE_CATEGORY",
  UPDATE_CATEGORY: "UPDATE_CATEGORY",
  DELETE_CATEGORY: "DELETE_CATEGORY",
  UPDATE_CATEGORY_STATUS: "UPDATE_CATEGORY_STATUS",
  UPDATE_PRODUCT_IN_CATEGORY: "UPDATE_PRODUCT_IN_CATEGORY",
  ADD_PRODUCT_TO_CATEGORY: "ADD_PRODUCT_TO_CATEGORY",

  // Products
  CREATE_PRODUCTS: "CREATE_PRODUCTS",
  GET_PRODUCTS_BY_SEARCH: "GET_PRODUCTS_BY_SEARCH",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  UPDATE_PRODUCT_STATUS: "UPDATE_PRODUCT_STATUS",
  GET_PRODUCTS_SEARCH_OPTIONS: "GET_PRODUCTS_SEARCH_OPTIONS",
  GET_PRODUCTS_ORDERBY: "GET_PRODUCTS_ORDERBY",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID",
  GET_PRODUCT_BY_SEARCH: "GET_PRODUCT_BY_SEARCH",

  // cart
  GET_CART_DATA: "GET_CART_DATA",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  ADD_ITEMS_TO_CART: "ADD_ITEMS_TO_CART",
  UPDATE_CART_ITEM_QUANTITY: "UPDATE_CART_ITEM_QUANTITY",
  DELETE_CART_ITEM: "DELETE_CART_ITEM",

  // state
  GET_STATE_LIST: "GET_STATE_LIST",
  GET_SINGLE_STATE: "GET_SINGLE_STATE",
  UPDATE_STATE_DETAILS: "UPDATE_STATE_DETAILS",
  DELETE_STATE: "DELETE_STATE",
  GET_STATES_BY_SEARCH: "GET_STATES_BY_SEARCH",
  CREATE_STATE: "CREATE_STATE",
  IMPORT_STATES_BY_COUNTRYID: "IMPORT_STATES_BY_COUNTRYID",
  EXPORT_STATES_BY_COUNTRYID: "EXPORT_STATES_BY_COUNTRYID",

  // Tax Rate
  GET_TAX_RATE_LIST: "GET_TAX_RATE_LIST",
  GET_SINGLE_TAX: "GET_SINGLE_TAX",
};
