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
  response_code: string;
  data: D;
  error: D;
  content: string;
  status: string;
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
    categories: [
      {
        id: 12;
        name: "Kitchen Utensils";
        slug: "category/12/kitchen-utensils";
        count: 1;
        parentId: null;
      }
    ];
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
