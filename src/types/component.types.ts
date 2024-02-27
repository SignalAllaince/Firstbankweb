import { IconType } from "@/components/icon";
import { ProtectedComponentType } from "@/types/service.types";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface AppPropsWithAuth extends AppProps {
  Component: NextPageWithLayout;
}

export type ProtectedNextPage<P = Record<string, unknown>> =
  NextPageWithLayout<P> & ProtectedComponentType;
// Box props
export type BoxProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface DrawerProps {
  isOpen: boolean;
  setDrawer: () => void;
  title: string;
  children: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  title?: string;
  size?: "lg" | "md";
  isCloseIconPresent?: boolean;
}
// input types
export interface IInputOption {
  value: string;
  label: string;
}

export type InputWrapperProps = {
  borderColor?: string;
  bg?: string;
  inputIcon?: IconType;
  name: string;
  label?: string;
  isLoading?: boolean;
  type?: string;
  touched?: Record<string, unknown>;
  errors?: { [x: string]: unknown } | undefined;
  handleClick?: () => void;
  isShown?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
  options?: IInputOption[];
  isTextArea?: boolean;
  h?: number | string;
  pr?: number;
  height?: number | string;
};

export interface Option {
  value: string;
  label: string;
}
