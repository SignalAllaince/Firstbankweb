import AccountLayout from "@/components/layout/account-layout";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";

const ReviewsPage: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div className="space-y-5 pt-5">
      <div className="space-y-5"></div>
    </div>
  );
};

ReviewsPage.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

ReviewsPage.auth = false;

export default ReviewsPage;
