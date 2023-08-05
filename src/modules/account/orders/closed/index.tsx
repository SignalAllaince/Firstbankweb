import FadeInOut from "@/components/fade";
import IfElse from "@/components/if-else";
import AccountLayout from "@/components/layout/account-layout";
import OrderLayout from "@/components/layout/orders-layout";
import PageHead from "@/components/page-head";
import { useOrders } from "@/lib/context/order.context";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { AnimatePresence } from "framer-motion";
import { ReactElement } from "react";
import OrderLoading from "../history/loading";
import OrderHistory from "./main";

const ClosedOrdersPage: NextPageWithLayout & ProtectedComponentType = () => {
  const { getOrders, orders } = useOrders();

  return (
    <>
      <PageHead title="Closed Orders" />
      <AnimatePresence>
        <IfElse
          ifOn={!getOrders.isLoading && !!orders}
          ifOnElse={getOrders.isLoading && !orders}
          // ifOnElse={true}
          onElse={<OrderLoading />}
        >
          <FadeInOut>
            <OrderHistory orders={orders?.items!} />
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
