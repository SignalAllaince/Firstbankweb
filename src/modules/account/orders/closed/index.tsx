import ErrorMessage from "@/components/error-message";
import FadeInOut from "@/components/fade";
import IfElse from "@/components/if-else";
import AccountLayout from "@/components/layout/account-layout";
import OrderLayout from "@/components/layout/orders-layout";
import PageHead from "@/components/page-head";
import useGetAllOrders from "@/hooks/order/useGetAllOrders";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { AnimatePresence } from "framer-motion";
import React, { ReactElement } from "react";
import OrderLoading from "../history/loading";
import OrderHistory from "./main";

const ClosedOrdersPage: NextPageWithLayout & ProtectedComponentType = () => {
  const [currentPageNumber, setPage] = React.useState(1);
  const pageSize = 6;
  const getOrders = useGetAllOrders(currentPageNumber, pageSize);

  return (
    <>
      <PageHead title="Closed Orders" />
      <AnimatePresence>
        <IfElse
          ifOn={!getOrders.isLoading && !!getOrders?.value}
          ifOnElse={getOrders.isLoading && !getOrders?.value}
          elseThen={<ErrorMessage />}
          onElse={<OrderLoading />}
        >
          <FadeInOut>
            {/* @ts-expect-error */}
            <OrderHistory orders={getOrders?.value!} />
          </FadeInOut>
        </IfElse>
      </AnimatePresence>
    </>
  );
};

ClosedOrdersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <OrderLayout>{page}</OrderLayout>
    </AccountLayout>
  );
};

ClosedOrdersPage.auth = true;

export default ClosedOrdersPage;
