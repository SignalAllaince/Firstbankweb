import { QueryFunction, QueryKey } from "@tanstack/react-query";
import { AxiosRequestHeaders, AxiosResponse, Method } from "axios";

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

// export interface FirstBankResponseType<D = Record<string, unknown>> {
//   data: {
//     oid: any;
//     response_code: string;
//     data: D;
//     errors: Record<string, unknown>;
//     errorCode: number;
//     status: string;
//   };
// }

export type FirstBankResponseType<D> = AxiosResponse<
  CredentialsServerResponseModel<D>
>;

export type CredentialsServerResponseModel<T> = {
  data: T;
  oid: any;
  response_code: string;
  errors: Record<string, unknown>;
  errorCode: number;
  status: string;
  message: string;
};

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
  thumbnailImage: string;
  thumbnailUrl: string;
}

export interface CategoryProduct {
  price: number;
  oldPrice: number;
  specialPrice: number;
  stockQuantity: number;
  specialPriceStart: string;
  specialPriceEnd: string;
  reviewsCount: number;
  ratingAverage: null | string | number;
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
    p: number;
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
  ratingAverage: null | string | number;
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
    productImage: string;
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
  isValid: boolean;
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
    productImage: string;
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
    ratingAverage: null | string | number;
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
    thumbnailUrl: string;
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
  useShippingAddressAsBillingAddress: boolean;
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
  thumbnailImage: string;
  id: null;
  productImage: string;
  slug: null;
  productPrice: number;
  productStockQuantity: number;
  isAvailableToOrder: boolean;
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
  orderStatus: "New";
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

export type IAddressItem = {
  addressId: string;
  contactName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  stateName: string;
  isDefaultShippingAddress: boolean;
};

export type ISingleReview = {
  id: number;
  rating: number;
  title: string;
  comment: string;
  reviewerName: string;
  dateCreated: string;
  replies: string[];
};
export interface IProductReview {
  productId: number;
  productName: string;
  productSlug: string;
  hasBoughtProduct: boolean;
  loggedUserName: null;
  reviewsCount: number;
  ratingAverage: number;
  rating1Count: number;
  rating2Count: number;
  rating3Count: number;
  rating4Count: number;
  rating5Count: number;
  items: ISingleReview[];
  pageinfo: {
    totalItems: number;
    currentPage: number;
    totalPages: number;
    pages: null;
    pageSize: number;
    routeData: null;
  };
}

export type IUserReviewItem = {
  id: 41;
  rating: 4;
  title: "satisfied" | "Indifferent" | "Disappointed";
  comment: string;
  reviewerName: string;
  dateCreated: string;
  replies: [];
};

export interface IUserReview {
  id: number;
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  items: IUserReviewItem[];
}
