import Badge from "@/components/badge";
import Button from "@/components/button";
import AccountLayout from "@/components/layout/account-layout";
import OrderLayout from "@/components/layout/orders-layout";
import TimeLine from "@/components/timeline";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";

const TrackOpenOrderPage: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div className="space-y-5 pt-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <p className="text-sm font-medium text-brand-darkest">
            Order No. - BS83748748
          </p>
          <Badge variant="pending">order placed</Badge>
        </div>
        <Button size="small" className="h-8 px-[8px]">
          Track Order
        </Button>
      </div>
      <div className="space-y-5">
        <TimeLine />
      </div>
    </div>
  );
};

TrackOpenOrderPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <OrderLayout isDetailsPage>{page}</OrderLayout>
    </AccountLayout>
  );
};

TrackOpenOrderPage.auth = false;

export default TrackOpenOrderPage;
