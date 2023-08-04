import { QueryFunction, QueryKey } from "@tanstack/react-query";
import { AxiosRequestHeaders, Method } from "axios";

export type MethodTypes = "get" | "post" | "patch" | "put" | "delete";

export interface SecureRequestProps<T = Record<string, unknown>> {
  method?: Method;
  url: string;
  body?: Record<string, unknown>;
  isCreathorsApi?: boolean;
  baseURL?: string;
  headers?: AxiosRequestHeaders;
  endpoint?: string;
  queryKey?: string | string[] | number[];
  showToast?: boolean;
  token?: string;
  queryFn?: QueryFunction<FirstBankResponseType<T>, QueryKey>;
}

export interface RequestResponse<T = Record<string, unknown>> {
  queryFn?: QueryFunction<FirstBankResponseType<T>, QueryKey>;
}

export interface FirstBankResponseType<D = Record<string, unknown>> {
  data: {
    oid: any;
    response_code: string;
    data: D;
    errors: Record<string, unknown>;
    errorCode: number;
    status: string;
  };
}

export interface ResponseErrorType {
  message: string;
  name: string;

  response: {
    data: {
      response_message: string;
      status: string;
      statusCode: number;
      message: string;
      details: string[];
      source: string;
    };
  };
}

export type CustomMethod = "get" | "put" | "delete" | "post";

export type PaymentMethod =
  | "card"
  | "ussd"
  | "transfer"
  | "QR"
  | "solId"
  | "first-checkout"
  | null;

export interface CreateProductResponse {
  name: string;
}

// Cart interfaces
export interface CartQuantityUpdate {
  cartItemId: number;
  quantity: number;
}

export interface SearchCategories {
  icon: string | null;
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  thumbnailImage: null;
  thumbnailUrl: null;
}

export interface CategoryProduct {
  price: number;
  oldPrice: number;
  specialPrice: number;
  stockQuantity: number;
  specialPriceStart: string;
  specialPriceEnd: string;
  reviewsCount: number;
  ratingAverage: null;
  calculatedProductPrice: {
    price: number;
    oldPrice: number;
    percentOfSaving: number;
    priceString: "string";
    oldPriceString: "string";
  };
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  thumbnailUrl: string;
}
export interface CategoryItems {
  categoryId: number;
  parentCategorId: null;
  categoryName: string;
  categorySlug: string;
  seoKeywords: string;
  shortDescription: string;
  primaryImage: null;
  thumbnailImage: string;
  totalProduct: number;
  products: CategoryProduct[];
  filterOption: {
    categories: {
      id: number;
      name: string;
      slug: string;
      count: number;
      parentId: null;
    }[];
    price: {
      maxPrice: number;
      minPrice: number;
    };
  };
  currentSearchOption: {
    q: null;
    b: null;
    c: null;
    p: 1;
    ps: 10;
    tp: 1.0;
    s: null;
    mnp: null;
    mxp: null;
  };
  availableSortOptions: {
    value: string;
    display: string;
  }[];
}

export interface ProductDetailsRes {
  id: number;
  name: string;
  slug: string;
  sku: null;
  thumbnailUrl: string;
  shortDescription: string;
  seoKeywords: string;
  calculatedProductPrice: {
    price: number;
    oldPrice: number;
    percentOfSaving: number;
    priceString: string;
    oldPriceString: string;
  };
  description: string;
  specification: string;
  isAllowToOrder: boolean;
  stockQuantity: number;
  reviewsCount: number;
  ratingAverage: null;
  availableOptions: any[];
  optionDisplayValues: {};
  images: {
    url: string;
    thumbnailUrl: string;
  }[];
  variations: any[];
  attributes: any[];
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
}

export interface CartListResponse {
  id: 7;
  items: {
    id: number;
    productId: number;
    slug: string;
    productName: string;
    productImage: string | undefined;
    productPrice: number;
    productPriceString: string;
    productStockQuantity: number;
    isProductAvailabeToOrder: boolean;
    quantity: number;
    total: number;
    totalString: string;
    optionCombination: null;
  }[];
  subTotal: number;
  subTotalString: string;
  customerId: string;
  isValid: false;
}

export interface WishlistResponse {
  id: number;
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  items: {
    id: number;
    wishListId: number;
    productId: number;
    productName: string;
    slug: string;
    productPriceString: string;
    productOldPriceString: string;
    productImage: string | undefined;
    description: null;
    quantity: number;
  }[];
}

export interface SearchResponse {
  totalProduct: number;
  products: {
    price: number;
    oldPrice: number;
    specialPrice: number;
    stockQuantity: number;
    specialPriceStart: string;
    specialPriceEnd: string;
    reviewsCount: number;
    ratingAverage: null;
    calculatedProductPrice: {
      price: number;
      oldPrice: number;
      percentOfSaving: number;
      priceString: string;
      oldPriceString: string;
    };
    id: number;
    name: string;
    slug: string;
    shortDescription: string;
    thumbnailUrl: null;
  }[];
  filterOption: {
    categories: {
      id: number;
      name: string;
      slug: string;
      count: number;
      parentId: null;
    }[];
    price: {
      maxPrice: number;
      minPrice: number;
    };
  };
  currentSearchOption: {
    q: string;
    c: null;
    p: number;
    ps: number;
    tp: number;
    s: null;
    mnp: null;
    mxp: null;
  };
  availableSortOptions: {
    value: string;
    display: string;
  }[];
}

// Checkout
export interface CreateShippingAdress {
  contactName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  stateId: string;
  city: string;
  zipCode: string;
}

export interface ApplyCoupon {
  couponCode: string;
}

// Orders
export interface IOrderResponse {
  name: string;
  status: string;
}
export type AddressType = {
  id: number;
  contactName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  zipCode: null | number;
  stateId: number;
  stateName: string;
  cityName: string;
  isCityEnabled: boolean;
  isZipCodeEnabled: boolean;
};

export type CheckoutProduct = {
  name: string;
  productId: number;
  slug: string;
  thumbnailUrl: string;
  id: number;
  quantity: number;
  price: string;
  priceString: string;
  total: string;
  totalString: string;
  shippingPrice: number;
  shippingPriceString: string;
  isAvailableToOrder: boolean;
  productStockQuantity: number;
};
export interface ICategoryDetails {
  orderId: string;
  orderStatus: number;
  customerId: string;
  shippingAddress: null;
  billingAddress: null;
  isValid: true;
  useShippingAddressAsBillingAddress: false;
  selectedShippingAddressId: number;
  selectedBillingAddressId: number;
  existingShippingAddresses: AddressType[];
  existingBillingAddresses: AddressType[];
  taxAmount: number;
  taxAmountString: string;
  orderNote: null;
  couponCode: null;
  subTotal: number;
  subTotalString: string;
  orderTotal: number;
  orderTotalString: string;
  shippingTotal: number;
  shippingTotalString: string;
  selectedShippingProviderId: number;
  shippingProviders: null;
  error: null;
  checkoutProducts: CheckoutProduct[];
}

export type OrderItem = {
  productId: number;
  productName: string;
  productOptions: [];
  productOptionString: string;
  quantity: number;
  thumbnailImage: null | string;
  id: null;
  productImage: null | string;
  slug: null;
  productPrice: number;
  productStockQuantity: number;
  isAvailableToOrder: false;
  shippedQuantity: number;
  shippingPrice: number;
  shippingPriceString: string;
  taxAmount: number;
  taxPercent: number;
  discountAmount: number;
  total: number;
  taxIncludedAmount: number;
  rowTotal: number;
  taxAmountString: string;
  productPriceString: string;
  discountAmountString: string;
  totalString: string;
  taxIncludedAmountString: string;
  rowTotalString: string;
};
export interface IOrderDetails {
  id: string;
  mId: string;
  dateCreated: string;
  subTotal: number;
  subTotalString: string;
  orderStatus: number;
  orderItems: OrderItem[];
}
export interface IOrderContainer {
  items: IOrderDetails[];
  totalItems: number;
  currentPage: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  totalPages: number;
}
export interface ISinglOrderDetails extends IOrderDetails {
  shippingAddress: AddressType;
  customerId: string;
  customerName: string;
  customerEmail: string;
  orderStatusString: string;
  discountAmount: number;
  subTotalWithDiscount: number;
  taxAmount: number;
  shippingAmount: number;
  orderTotal: number;
  shippingMethod: null;
  paymentMethod: null;
  paymentFee: number;
  discountAmountString: string;
  subtotalWithDiscountString: string;
  taxAmountString: string;
  shippingAmountString: string;
  paymentFeeAmountString: string;
  orderTotalString: string;
  subOrderIds: null;
  isMasterOrder: boolean;
  isProductPriceIncludeTax: boolean;
  orderNote: null;
}
export const UserResponse = {
  1: "New",
  2: "PendingCheckout",
  3: "PendingPaymen",
  4: "PaymentFailed",
  5: "PaymentReceived",
  6: "InsufficientInventory",
  7: "OutOfStock",
  8: "OnHold",
  9: "UserCancelled",
  10: "Refunded",
  11: "Shipping",
  12: "Shipped",
  13: "Closed",
  14: "Complete",
  15: "Deleted",
  16: "Cancelled",
  17: "Invoiced",
};

export type ReviewModel = {
  rating: number;
  title: string;
  comment: string;
  reviewerName: string;
  productId: number;
  hasBoughtProduct: boolean;
};
