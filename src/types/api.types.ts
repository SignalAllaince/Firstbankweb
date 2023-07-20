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
  thumbnailUrl: null;
}
export interface CategoryItems {
  categoryId: number;
  parentCategorId: null;
  categoryName: string;
  categorySlug: string;
  seoKeywords: string;
  shortDescription: string;
  primaryImage: null;
  thumbnailImage: null;
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
  images: any[];
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
    productImage: null;
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
    productImage: any[];
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
