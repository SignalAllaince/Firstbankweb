import Heading from "@/components/heading";
import AccountLayout from "@/components/layout/account-layout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";
// import WishListRow from "./components/review";
import Image from "next/image";
import starImg from "../../../../public/images/star.svg";

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
        <Section className="my-4 flex w-full flex-col items-center justify-center space-y-4 py-4">
          <div className="max-w-xl">
            <Image src={starImg} alt={"djsdsd"} />
          </div>
          <div className="flex flex-col items-center space-y-3 text-center">
            <Heading size="h4">No reviews here right now!</Heading>
            <p className="font-light">
              Check your “Orders” for products that you haven’t reviewed &
              rated!
            </p>
          </div>
        </Section>

        {/* <WishListRow />
        <WishListRow />
        <WishListRow /> */}
      </div>
    </Section>
  );
};

ReviewsPage.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

ReviewsPage.auth = true;

export default ReviewsPage;
