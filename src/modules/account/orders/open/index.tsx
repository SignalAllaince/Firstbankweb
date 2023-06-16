import AccountLayout from "@/components/layout/account-layout";
import OrderLayout from "@/components/layout/orders-layout";
import PageHead from "@/components/page-head";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";
import SingleOrder from "../components/order-row";

const OpenOrdersPage: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div className="space-y-5 pt-5">
      <PageHead title="Open Orders" />
      <div className="space-y-5">
        <SingleOrder status="pending" />
        <SingleOrder status="pending" />
        <SingleOrder status="pending" />
      </div>
    </div>
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
