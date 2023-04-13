import { ProtectedComponentType } from "@/types/service.types";
import { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface AppPropsWithAuth extends AppProps {
  Component: NextPageWithLayout & ProtectedComponentType;
}

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
  title: string;
}
