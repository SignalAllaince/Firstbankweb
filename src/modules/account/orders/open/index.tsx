import FadeInOut from "@/components/fade";
import IfElse from "@/components/if-else";
import AccountLayout from "@/components/layout/account-layout";
import OrderLayout from "@/components/layout/orders-layout";
import PageHead from "@/components/page-head";
import useGetAllOrders from "@/hooks/order/useGetAllOrders";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { AnimatePresence } from "framer-motion";
import { ReactElement } from "react";
import OrderLoading from "../history/loading";
import OrderHistory from "./main";

const OpenOrdersPage: NextPageWithLayout & ProtectedComponentType = () => {
  const getOrders = useGetAllOrders();
  return (
    <>
      <PageHead title="Open Orders" />
      <AnimatePresence>
        <IfElse
          ifOn={!getOrders.isLoading && !!getOrders?.value}
          ifOnElse={getOrders.isLoading && !getOrders?.value}
          // ifOnElse={true}
          onElse={<OrderLoading />}
        >
          <FadeInOut>
            <OrderHistory orders={getOrders?.value!} />
          </FadeInOut>
        </IfElse>
      </AnimatePresence>
    </>
  );
};

OpenOrdersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <OrderLayout>{page}</OrderLayout>
    </AccountLayout>
  );
};

OpenOrdersPage.auth = true;

export default OpenOrdersPage;
