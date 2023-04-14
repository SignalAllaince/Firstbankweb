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

  ACCOUNT_LOGIN: "/auth/login",
  ACCOUNT_SIGNUP: "/auth/register",
  ACCOUNT_RESET_PASSWORD: "/auth/reset-password",
};

// Api Endpoints
export const ENDPOINTS = {
  API_BASE_URL: process.env.NEXT_PUBLIC_BACKEND,

  // Auth endpoints
  API_INITIATE_SIGNUP: "/auth/signup",
  API_FORGOT_PASSWORD: "/auth/forgot-password",
  API_RESET_PASSWORD: (token: string) => `/auth/reset-password?token=${token}`,
  VERIFY_SIGNUP_DETAILS: "/auth/verify/signup",

  // Users Endpoints
  API_CREATE_WITHDRAWAL_ACCOUNT: "/withdrawal-accounts",
  API_VERIFY_ACCOUNT: "/withdrawal-accounts/verify",
  API_GET_BANK_LIST: "/resources/banks/ng",
  API_GET_CURRENCIES: "/resources/currencies",

  // Settings Endpoint
  USER_ACCOUNT_INFO: "/users/info",
  EDIT_USER_ACCOUNT_INFO: "/users/info/edit",
  API_CHANGE_PASSWORD: "/users/security/change-password",
  USER_WITHDRAWAL_ACCOUNTS: "/withdrawal-accounts",
  USER_NOTIFICATION_SETTINGS: "/users/notification-preferences",
  VERIFY_USER_EMAIL: "/auth/verify/email",

  // Tip Endpoints
  API_TIP_LINKS: "/tips",
  API_SINGLE_TIP_LINK: (linkId: string) => `/tips/${linkId}`,
  GET_TIP_LINKS: (
    pageSize: string | number,
    pageNumber: string | number,
    status: string,
    search: string
  ) =>
    `/tips?pageSize=${pageSize}&pageNumber=${pageNumber}&status=${status}&search=${search}`,
  API_DISABLE_TIP_LINK: (linkId: string) => `/tips/${linkId}/disable`,
  API_ENABLE_TIP_LINK: (linkId: string) => `/tips/${linkId}/enable`,
  API_TIP_TRANSACTIONS: (
    linkId: string,
    pageSize: number,
    pageNumber: number
  ) =>
    `/tips/${linkId}/transactions?pageSize=${pageSize}&pageNumber=${pageNumber}`,

  // Wallet Endpoints
  API_GET_WALLETS: "/wallets",
  API_GET_WALLETS_TRANSACTION: (pageSize: number, pageNumber: number) =>
    `/wallets/transactions?pageSize=${pageSize}&pageNumber=${pageNumber}`,
  USER_ANALYTICS: "/analytics",

  //  Withdrawal Endpoints
  API_INITIATE_WITHDRAWAL: "/remittance/withdrawals",

  // store endpoints
  API_STORE_LINKS: "/stores",
  GET_STORE_LINKS: (
    pageSize: string | number,
    pageNumber: string | number,
    status: string,
    search: string
  ) =>
    `/stores?pageSize=${pageSize}&pageNumber=${pageNumber}&status=${status}&search=${search}`,
  API_SINGLE_STORE_INFO: (storeId: string) => `/stores/${storeId}`,

  GET_STORE_PRODUCTS: (
    storeId: string,
    pageSize: string | number,
    pageNumber: string | number,
    search: string
  ) =>
    `/stores/${storeId}/products?pageSize=${pageSize}&pageNumber=${pageNumber}&search=${search}`,

  GET_STORE_ORDERS: (
    storeId: string,
    pageSize: string | number,
    pageNumber: string | number,
    search: string
  ) =>
    `/stores/${storeId}/orders?pageSize=${pageSize}&pageNumber=${pageNumber}&search=${search}`,

  GET_STORE_ORDER_DETAIL: (storeOrderId: string) => `/orders/${storeOrderId}`,

  GET_INDIVIDUAL_PRODUCT_INFO: (storeId: string, productId: string) =>
    `/stores/${storeId}/products/${productId}`,

  API_SINGLE_STORE_PRODUCTS: (storeId: string) => `/stores/${storeId}/products`,

  EDIT_STORE_PRODUCT: (storeId: string, productId: string) =>
    `/stores/${storeId}/products?productId=${productId}`,

  PUT_EDIT_STORE_PRODUCT: (storeId: string, productId: string) =>
    `/stores/${storeId}/products/${productId}`,

  GET_CUSTOMERS: (
    pageSize: string | number,
    pageNumber: string | number,
    search: string
  ) =>
    `/customers?pageSize=${pageSize}&pageNumber=${pageNumber}&search=${search}`,

  GET_CUSTOMER_DETAILS: (customerId: string) => `/customers/${customerId}`,

  GET_CUSTOMER_TRANSACTIONS: (
    customerId: string,
    pageSize: number,
    pageNumber: number
  ) =>
    `/customers/${customerId}/transactions?pageSize=${pageSize}&pageNumber=${pageNumber}`,
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
  GET_BANK_LIST: "GET_BANK_LIST",
  GET_CURRENCIES: "GET_CURRENCIES",
  GET_USER_ACCOUNT_INFO: "GET_USER_ACCOUNT_INFO",
  EDIT_USER_ACCOUNT_INFO: "EDIT_USER_ACCOUNT_INFO",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  USER_WITHDRAWAL_ACCOUNTS: "USER_WITHDRAWAL_ACCOUNTS",
  ADD_USER_WITHDRAWAL_ACCOUNTS: "ADD_USER_WITHDRAWAL_ACCOUNTS",
  REMOVE_WITHDRAWAL_ACCOUNTS: "USER_WITHDRAWAL_ACCOUNTS",
  USER_NOTIFICATION_SETTINGS: "USER_NOTIFICATION_SETTINGS",
  UPDATE_USER_NOTIFICATION_SETTINGS: "UPDATE_USER_NOTIFICATION_SETTINGS",
  CREATE_TIP: "CREATE_TIP",
  VERIFY_USER_EMAIL: "VERIFY_USER_EMAIL",
  VERIFY_SIGNUP_DETAILS: "VERIFY_SIGNUP_DETAILS",
  EDIT_TIP_LINKS: "EDIT_TIP_LINKS",
  GET_WALLETS: "GET_WALLETS",
  GET_WALLETS_TRANSACTION: "GET_WALLETS_TRANSACTION",
  USER_ANALYTICS: "USER_ANALYTICS",
  INITIATE_WITHDRAWAL: "INITIATE_WITHDRAWAL",
  STORE_LINKS: "STORE_LINKS",
  SINGLE_STORE_INFO: "SINGLE_STORE_INFO",
};
