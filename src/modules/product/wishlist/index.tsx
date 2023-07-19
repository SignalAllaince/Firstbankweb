import FadeInOut from "@/components/fade";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import PaginationContextProvider from "@/hooks/use-pagination";
import useGetWishlist from "@/hooks/wishlist/useGetWishList";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { ReactElement } from "react";
import WishListSkeleton from "./loading";
import WishListMainSection from "./main";

const WishListPage: NextPageWithLayout & ProtectedComponentType = () => {
  const [currentPageNumber, setPage] = React.useState(1);
  const pageSize = 8;
  const getWishList = useGetWishlist(currentPageNumber, pageSize);

  return (
    <div className="">
      <PageHead title="Wishlist" />
      <div className="w-full border-b border-brand-light bg-white">
        <Section className="space-y-7 py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Link href="/">Home</Link>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <p>Wishlist</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Heading size="h3">Wishlist</Heading>
          </div>
        </Section>
      </div>

      <AnimatePresence>
        <IfElse
          ifOn={!getWishList.isLoading && !!getWishList?.value}
          ifOnElse={getWishList.isLoading && !getWishList?.value}
          onElse={
            <FadeInOut>
              <WishListSkeleton />
            </FadeInOut>
          }
        >
          <FadeInOut>
            <PaginationContextProvider
              currentPageNumber={currentPageNumber}
              setPage={setPage}
              total={getWishList?.value?.totalItems!}
              pageSize={pageSize}
            >
              <WishListMainSection
                wishlistResult={getWishList?.value!}
                onRefetch={getWishList.refetch}
                isRefetching={getWishList.isRefetching}
              />
            </PaginationContextProvider>
          </FadeInOut>
        </IfElse>
      </AnimatePresence>
      {/* second section */}
    </div>
  );
};

WishListPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

WishListPage.auth = true;

export default WishListPage;
