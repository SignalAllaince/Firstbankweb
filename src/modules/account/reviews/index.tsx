import ErrorMessage from "@/components/error-message";
import FadeInOut from "@/components/fade";
import Heading from "@/components/heading";
import IfElse from "@/components/if-else";
import AccountLayout from "@/components/layout/account-layout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import useGetUserReviews from "@/hooks/review/useGetUserReview";
import PaginationContextProvider from "@/hooks/use-pagination";
import WishListSkeleton from "@/modules/product/wishlist/loading";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { AnimatePresence } from "framer-motion";
import React, { ReactElement } from "react";
import ReviewMainSection from "./main";
// import ReviewMainSection from "./main";

const ReviewsPage: NextPageWithLayout & ProtectedComponentType = () => {
  const [currentPageNumber, setPage] = React.useState(1);
  const pageSize = 10;

  const userReviews = useGetUserReviews(currentPageNumber, pageSize);
  return (
    <Section className="space-y-5 pt-5">
      <PageHead title="Reviews" />
      <div className="border-b border-brand-light pb-3">
        <Heading size="h5" className="capitalize">
          Ratings & Reviews
        </Heading>
      </div>
      <div>
        <AnimatePresence>
          <IfElse
            ifOn={!userReviews.isLoading && !!userReviews?.value}
            ifOnElse={userReviews.isLoading && !userReviews?.value}
            onElse={
              <FadeInOut className="-mt-4">
                <WishListSkeleton />
              </FadeInOut>
            }
            elseThen={<ErrorMessage />}
          >
            <FadeInOut>
              <PaginationContextProvider
                currentPageNumber={currentPageNumber}
                setPage={setPage}
                total={userReviews?.value?.totalItems!}
                pageSize={pageSize}
              >
                <ReviewMainSection
                  review={userReviews?.value!}
                  onRefetch={userReviews.refetch}
                  isRefetching={userReviews.isRefetching}
                />
              </PaginationContextProvider>
            </FadeInOut>
          </IfElse>
        </AnimatePresence>
      </div>
    </Section>
  );
};

ReviewsPage.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

ReviewsPage.auth = true;

export default ReviewsPage;
