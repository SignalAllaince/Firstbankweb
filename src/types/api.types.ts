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
    response_code: string;
    data: D;
    message: string;
    status: string;
    response_message: string;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
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
