import AccountLayout from "@/components/layout/account-layout";
import OrderLayout from "@/components/layout/orders-layout";
import PageHead from "@/components/page-head";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";
import SingleOrder from "../components/order-row";

const ClosedOrdersPage: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div className="space-y-5 pt-5">
      <PageHead title="Closed orders" />
      <div className="space-y-5">
        <SingleOrder status="success" />
        <SingleOrder status="error" />
        <SingleOrder status="success" />
      </div>
    </div>
  );
};

ClosedOrdersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <OrderLayout>{page}</OrderLayout>
    </AccountLayout>
  );
};

ClosedOrdersPage.auth = false;

export default ClosedOrdersPage;
