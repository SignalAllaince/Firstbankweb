import ErrorMessage from "@/components/error-message";
import FadeInOut from "@/components/fade";
import IfElse from "@/components/if-else";
import AccountLayout from "@/components/layout/account-layout";
import OrderLayout from "@/components/layout/orders-layout";
import PageHead from "@/components/page-head";
import useGetAllOrders from "@/hooks/order/useGetAllOrders";
import PaginationContextProvider from "@/hooks/use-pagination";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { AnimatePresence } from "framer-motion";
import React, { ReactElement } from "react";
import OrderLoading from "./loading";
import OrderHistory from "./main";

const OrdersPage: NextPageWithLayout & ProtectedComponentType = () => {
  const [currentPageNumber, setPage] = React.useState(1);
  const pageSize = 10;
  const getOrders = useGetAllOrders(currentPageNumber, pageSize);

  return (
    <>
      <PageHead title="Orders" />
      <AnimatePresence>
        <IfElse
          ifOn={!getOrders.isLoading && !!getOrders?.value}
          ifOnElse={getOrders.isLoading && !getOrders?.value}
          elseThen={<ErrorMessage />}
          onElse={<OrderLoading isMainPage />}
        >
          <FadeInOut>
            <PaginationContextProvider
              currentPageNumber={currentPageNumber}
              setPage={setPage}
              total={getOrders?.value?.totalItems!}
              pageSize={pageSize}
            >
              <OrderHistory orders={getOrders?.value?.items!} />
            </PaginationContextProvider>
          </FadeInOut>
        </IfElse>
      </AnimatePresence>
    </>
  );
};

OrdersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <OrderLayout>{page}</OrderLayout>
    </AccountLayout>
  );
};

OrdersPage.auth = true;

export default OrdersPage;
