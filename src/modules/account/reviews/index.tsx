import Heading from "@/components/heading";
import AccountLayout from "@/components/layout/account-layout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";
import WishListRow from "./components/review";

const ReviewsPage: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <Section className="space-y-5 pt-5">
      <PageHead title="Reviews" />
      <div className="border-b border-brand-light pb-3">
        <Heading size="h5" className="capitalize">
          Ratings & Reviews
        </Heading>
      </div>
      <div className="space-y-5">
        <WishListRow />
        <WishListRow />
        <WishListRow />
      </div>
    </Section>
  );
};

ReviewsPage.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

ReviewsPage.auth = true;

export default ReviewsPage;
