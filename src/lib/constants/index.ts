// Api Endpoints
export const ENDPOINTS = {
  // API_BASE_URL: process.env.NEXT_PUBLIC_BACKEND,
  // API_BASE_URL: "https://brandshopapi.azurewebsites.net/",
  API_BASE_URL: "https://newfbnbackend.azurewebsites.net/",

  // https://brandshopapi.azurewebsites.net

  // Auth
  AUTH_USER: (userName: string, password: string) =>
    `user-authentication?Username=${userName}&Password=${password}`,

  // Cart Endpoints
  GET_CART_LIST: `account/cart/list`,
  GET_CART_ITEM_RESULT: (productId: string) =>
    `account/cart/add-item-result?productId=${productId}`,
  ADD_ITEM_TO_CART: `account/cart/add-item`,
  UPDATE_CART_ITEM_QUANTITY: "account/cart/update-item-quantity",
  CART_VALIDATION_SELECTION: "account/cart/validate-selection",
  DELETE_CART_ITEM: (itemId: number) => `account/cart/remove-item?id=${itemId}`,
  CLEAR_CART: `account/cart/clear`,

  // Category Endpoint
  GET_SEARCHED_CATEGORIES: "category-view/search-categories",
  GET_ALL_CATEGORIES: "category-view/all-categories",
  GET_SINGLE_CATEGORY_DETAILS: (
    categoryId: number,
    mnp?: string | number,
    mxp?: string | number,
    sort?: string,
    ps?: number,
    page?: number
  ) =>
    `category-view/details?id=${categoryId}&mnp=${mnp}&s=${sort}&mxp=${mxp}&ps=${ps}&p=${page}`,

  // Products Endpoints
  GET_PRODUCT_BY_ID: (productId: string) =>
    `product-catalog/product-details/${productId}`,
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

  // Address Endpoint
  GET_ADDRESS_LIST: "account/address/list",
  CREATE_ADDRESS: "account/address/create",
  GET_SINGLE_ADDRESS: (addressId: string) => `account/address/${addressId}`,
  UPDATE_SINGLE_ADDRESS: (addressId: string) =>
    `account/address/update/${addressId}`,
  UPDATE_DEFAULT_ADDRESS: "account/address/set-default",
  DELETE_ADDRESS: "account/address/confirm-delete",

  // search Endpoint
  GET_SEARCH_RESULT: (
    search: string,
    mnp?: string | number,
    mxp?: string | number,
    sort?: string,
    ps?: number,
    page?: number
  ) =>
    `search/query?q=${search}&mnp=${mnp}&s=${sort}&mxp=${mxp}&ps=${ps}&p=${page}`,
  GET_MOST_SEARCHED_KEYWORDS: "search-stats/most-serach-keywords",

  // review Endpoints
  ADD_PRODUCT_REVIEW: "review-product/add-review",
  GET_PRODUCT_REVIEWS: (
    productId: number,
    pageNumber: number,
    pageSize: number
  ) =>
    `review-product/reviews-for-product?productId=${productId}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
  // Reply
  POST_REPLY: "reply/add-reply",

  // Shipping Endpoint
  SEARCH_SHIPPING_RATE: "shipping-rate/search",
  GET_SHIPPING_RATE: (rateId: string) => `shipping-rate/read/${rateId}`,
  GET_SHIPPING_RATES: "shipping-rate/export-shipping-rates",
  GET_SHIPPING_RATES_OPTIONS: "shipping-rate/search-options",
  CREATE_SHIPPING_RATE: "shipping-rate/create",
  UPDATE_SHIPPING_RATE: "shipping-rate/update",
  DELETE_SHIPPING_RATE: (rateId: string) => `shipping-rate/delete/${rateId}`,
  POST_SHIPPING_RATES: "shipping-rate/import-shipping-rates",

  // Tax Class Endpoint
  GET_TAXCLASS_LIST: "api/tax-classes/list",
  GET_ACTIVE_TAXCLASS: "api/tax-classes/active",
  GET_SINGLE_TAXCLASS: (taxClassId: string) =>
    `api/tax-classes/read/${taxClassId}`,
  GET_DEFAULT_TAXCLASS: "api/tax-classes/default",
  CREATE_TAXCLASS: "api/tax-classes/create",
  UPDATE_TAXCLASS: "api/tax-classes/update",
  DELETE_TAXCLASS: (taxClassId: string) =>
    `api/tax-classes/delete/${taxClassId}`,
  POST_TAXCLASS_LIST: "api/tax-classes/import-tax-classes",
  GET_TAXCLASS_LISTS: "api/tax-classes/export-tax-classes",

  // Wishlist Endpoint
  GET_WISHLIST: (pageNumber: number, pageSize: number) =>
    `account/wishlist/${pageNumber}/${pageSize}`,
  ADD_ITEM_TO_WISHLIST: (id: number) => `account/wishlist/add-item?id=${id}`,
  REMOVE_ITEM_FROM_WISHLIST: (id: number) =>
    `account/wishlist/remove-item?productId=${id}`,
  UPDATE_WISHLIST_ITEM: "account/wishlist/",

  // Checkout Endpoints
  CREATE_CHECKOUT_ORDER: `checkout/create-order`,
  GET_CHECKOUT_SHIPPING: (oid: string, sta: number, ers: string) =>
    `checkout/shipping?oid=${oid}&sta=${sta}&ers=${ers}`,
  SAVE_CHECKOUT_ORDERNOTE: (orderId: string) =>
    `checkout/${orderId}/save-ordernote`,
  APPLY_CHECKOUT_COUPON: (orderId: string) =>
    `checkout/${orderId}/apply-coupon`,
  GET_CHECKOUT_DETAILS: (userId: string, oid: string) =>
    `checkout/checkout-details?oid=${oid}&userId=7B0030007800640033006600640035003000`,
  GET_CHECKOUT_SHIPPING_ADDRESS: (userId: string) =>
    `checkout/shipping-addresses/${userId}?userId=${userId}`,
  CREATE_NEW_CHECKOUT_SHIPPING_ADDRESS: (orderId: string) =>
    `checkout/${orderId}/new-shipping-address`,
  CREATE_NEW_CHECKOUT_BILLING_ADDRESS: (orderId: string) =>
    `checkout/${orderId}/new-billing-address`,
  UPDATE_ORDER_SHIPPING_ADDRESS: (addresId: string, orderId: string) =>
    `checkout/${addresId}/update-shipping-address/${orderId}`,
  GET_UPDATED_BILLING_ADDRESS: (name: string) => `checkout/${name}`,
  GET_SHIPPING_AS_BILLING: (orderId: string) =>
    `checkout/${orderId}/use-shipping-as-billing/true`,
  GET_CHECKOUT_SHIPPING_STATES: `checkout/shipping-states`,
  GET_CHANGE_SHIPPING_PROVIDER: (name: string) => `checkout/${name}`,
  GET_ALL_CHECKOUT: `checkout/checkout-all`,
  UPDATE_CHECKOUT_ITEM: (name: string) => `checkout/${name}`,
  GET_CHECKOUT_PAYMENT: (oid: string) => `checkout/start-payment?oid=${oid}`,
  GET_CHECKOUT_ORDER_SUCCESS: (name: string) => `checkout/${name}`,
  GET_CHECKOUT_ORDER_ERROR: (name: string) => `checkout/${name}`,
  ADD_ITEM_TO_CHECKOUT_ORDER: (name: string) => `checkout/${name}`,
  REMOVE_ITEM_FROM_CHECOUT_ORDER: (name: string) => `checkout/${name}`,
  UPDATE_ITEM_IN_CHECKOUT_ORDER: (name: string) => `checkout/${name}`,
  GET_CANCEL_CHECKOUT_ORDER: (name: string) => `checkout/${name}`,
  CHANGE_CHECKOUT_ORDER_STATUS: (name: string) => `checkout/${name}`,
  GET_CHECKOUT_ORDER_STATUS: (name: string) => `checkout/${name}`,
  GET_DELETE_CHECKOUT_ORDER: (name: string) => `checkout/${name}`,

  // Homepage Endpoint
  GET_HOMEPAGE_BANNERS: "homeservice/catalog-banners",
  GET_HOMEPAGE_CONTENT: "homeservice/home-content",

  // order Endpoints
  GET_ALL_ORDERS: (pageNumber: number, pageSize: number) =>
    `account/orders?Pagination.RequestedPage=${pageNumber}&Pagination.PageSize=${pageSize}`,
  GET_SINGLE_ORDERS: (orderId: string) => `account/${orderId}/account/orders`,
  CANCEL_ORDER: (orderId: string) => `account/${orderId}/cancel-order`,
  DELETE_ORDER: (orderId: string) => `account/${orderId}/delete-order`,
};

export const STOREID = "fbn46374683";

export const NAMESPACE = {
  // categories
  GET_SEARCHED_CATEGORIES: "GET_SEARCHED_CATEGORIES",
  GET_ALL_CATEGORIES: "GET_ALL_CATEGORIES",
  GET_SINGLE_CATEGORY_DETAILS: "GET_SINGLE_CATEGORY",
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
  GET_CART_LIST: "GET_CART_LIST",
  GET_CART_ITEM_RESULT: "GET_CART_ITEM_RESULT",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  UPDATE_CART_ITEM_QUANTITY: "UPDATE_CART_ITEM_QUANTITY",
  CART_VALIDATION_SELECTION: "CART_VALIDATION_SELECTION",
  DELETE_CART_ITEM: "DELETE_CART_ITEM",
  CLEAR_CART: "CLEAR_CART",

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

  // Address
  GET_ADDRESS_LIST: "GET_ADDRESS_LIST",
  CREATE_ADDRESS: "CREATE_ADDRESS",
  GET_SINGLE_ADDRESS: "GET_SINGLE_ADDRESS",
  UPDATE_SINGLE_ADDRESS: "UPDATE_SINGLE_ADDRESS",
  UPDATE_DEFAULT_ADDRESS: "UPDATE_DEFAULT_ADDRESS",
  DELETE_ADDRESS: "DELETE_ADDRESS",

  // Search
  GET_SEARCH_RESULT: "GET_SEARCH_RESULT",
  GET_MOST_SEARCHED_KEYWORDS: "GET_MOST_SEARCHED_KEYWORDS",

  // reviews
  GET_PRODUCT_REVIEWS: "GET_PRODUCT_REVIEWS",
  ADD_PRODUCT_REVIEW: "ADD_PRODUCT_REVIEW",
  POST_REPLY: "POST_REPLY",

  // Shipping rates
  GET_SHIPPING_RATES: "GET_SHIPPING_RATES",
  SEARCH_SHIPPING_RATE: "SEARCH_SHIPPING_RATE",
  GET_SHIPPING_RATE: "GET_SHIPPING_RATE",
  GET_SHIPPING_RATES_OPTIONS: "GET_SHIPPING_RATES_OPTIONS",
  CREATE_SHIPPING_RATE: "CREATE_SHIPPING_RATE",
  UPDATE_SHIPPING_RATE: "UPDATE_SHIPPING_RATE",
  DELETE_SHIPPING_RATE: "DELETE_SHIPPING_RATE",
  POST_SHIPPING_RATES: "POST_SHIPPING_RATES",

  // TAX CLASS
  GET_TAXCLASS_LIST: "GET_TAXCLASS_LIST",
  GET_ACTIVE_TAXCLASS: "GET_ACTIVE_TAXCLASS",
  GET_SINGLE_TAXCLASS: "GET_SINGLE_TAXCLASS",
  GET_DEFAULT_TAXCLASS: "GET_DEFAULT_TAXCLASS",
  CREATE_TAXCLASS: "CREATE_TAXCLASS",
  UPDATE_TAXCLASS: "UPDATE_TAXCLASS",
  DELETE_TAXCLASS: "DELETE_TAXCLASS",
  POST_TAXCLASS_LIST: "POST_TAXCLASS_LIST",
  GET_TAXCLASS_LISTS: "GET_TAXCLASS_LISTS",

  // Wishlist Endpoint
  GET_WISHLIST: "GET_WISHLIST",
  ADD_ITEM_TO_WISHLIST: "ADD_ITEM_TO_WISHLIST",
  REMOVE_ITEM_FROM_WISHLIST: "REMOVE_ITEM_FROM_WISHLIST",
  UPDATE_WISHLIST_ITEM: "UPDATE_WISHLIST_ITEM",

  // Checkout Endpoint
  CREATE_CHECKOUT_ORDER: "CREATE_CHECKOUT_ORDER",
  GET_CHECKOUT_SHIPPING: "GET_CHECKOUT_SHIPPING",
  SAVE_CHECKOUT_ORDERNOTE: "SAVE_CHECKOUT_ORDERNOTE",
  APPLY_CHECKOUT_COUPON: "APPLY_CHECKOUT_COUPON",
  GET_CHECKOUT_DETAILS: "GET_CHECKOUT_DETAILS",
  GET_CHECKOUT_SHIPPING_ADDRESS: "GET_CHECKOUT_SHIPPING_ADDRESS",
  CREATE_NEW_CHECKOUT_SHIPPING_ADDRESS: "CREATE_NEW_CHECKOUT_SHIPPING_ADDRESS",
  CREATE_NEW_CHECKOUT_BILLING_ADDRESS: "CREATE_NEW_CHECKOUT_BILLING_ADDRESS",
  UPDATE_ORDER_SHIPPING_ADDRESS: "UPDATE_ORDER_SHIPPING_ADDRESS",
  GET_UPDATED_BILLING_ADDRESS: "GET_UPDATED_BILLING_ADDRESS",
  GET_SHIPPING_AS_BILLING: "GET_SHIPPING_AS_BILLING",
  GET_CHECKOUT_SHIPPING_STATES: "GET_CHECKOUT_SHIPPING_STATES",
  GET_CHANGE_SHIPPING_PROVIDER: "GET_CHANGE_SHIPPING_PROVIDER",
  GET_ALL_CHECKOUT: "GET_ALL_CHECKOUT",
  UPDATE_CHECKOUT_ITEM: "UPDATE_CHECKOUT_ITEM",
  GET_CHECKOUT_PAYMENT: "GET_CHECKOUT_PAYMENT",
  GET_CHECKOUT_ORDER_SUCCESS: "GET_CHECKOUT_ORDER_SUCCESS",
  GET_CHECKOUT_ORDER_ERROR: "GET_CHECKOUT_ORDER_ERROR",
  ADD_ITEM_TO_CHECKOUT_ORDER: "ADD_ITEM_TO_CHECKOUT_ORDER",
  REMOVE_ITEM_FROM_CHECOUT_ORDER: "REMOVE_ITEM_FROM_CHECOUT_ORDER",
  UPDATE_ITEM_IN_CHECKOUT_ORDER: "UPDATE_ITEM_IN_CHECKOUT_ORDER",
  GET_CANCEL_CHECKOUT_ORDER: "GET_CANCEL_CHECKOUT_ORDER",
  CHANGE_CHECKOUT_ORDER_STATUS: "CHANGE_CHECKOUT_ORDER_STATUS",
  GET_CHECKOUT_ORDER_STATUS: "GET_CHECKOUT_ORDER_STATUS",
  GET_DELETE_CHECKOUT_ORDER: "GET_DELETE_CHECKOUT_ORDER",

  // Homepage Endpoint
  GET_HOMEPAGE_CONTENT: "GET_HOMEPAGE_CONTENT",
  GET_HOMEPAGE_BANNERS: "GET_HOMEPAGE_BANNERS",

  // order Endpoints
  GET_ALL_ORDERS: "GET_ALL_ORDERS",
  GET_SINGLE_ORDERS: "GET_SINGLE_ORDERS",
  CANCEL_ORDER: "CANCEL_ORDER",
};
