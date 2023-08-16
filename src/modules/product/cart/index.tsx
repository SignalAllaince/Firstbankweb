import Button from "@/components/button";
import FadeInOut from "@/components/fade";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import ProductCard from "@/components/product-card";
import ProductCardSkeleton from "@/components/product-card/skeleton";
import Section from "@/components/section";
import useGetCartList from "@/hooks/cart/useGetCartList";
import useGetWishlist from "@/hooks/wishlist/useGetWishList";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import { ReactElement } from "react";
import CartLoadingPage from "./loading";
import CartPageSection from "./main";

const CartPage: NextPageWithLayout & ProtectedComponentType = () => {
  const getCartList = useGetCartList();
  const getWishList = useGetWishlist(1, 4);

  return (
    <>
      <PageHead title="Cart" />
      <AnimatePresence>
        <IfElse
          ifOn={!getCartList.isLoading && !!getCartList?.value}
          ifOnElse={getCartList.isLoading && !getCartList?.value}
          onElse={
            <FadeInOut>
              <CartLoadingPage />
            </FadeInOut>
          }
        >
          <FadeInOut>
            <CartPageSection
              refetchCartDetails={getCartList.refetch}
              isRefetching={getCartList.isRefetching}
              cartDetails={getCartList.value!}
            />
          </FadeInOut>
        </IfElse>
      </AnimatePresence>

      <Section>
        <div className="space-y-6 py-10">
          <div
            className={`flex w-full items-center justify-between bg-[#B6D9A6] px-2 py-2`}
          >
            <Heading size="h5" className="font-medium">
              Wishlist
            </Heading>
            <Button
              href={`/wishlist`}
              variant="cart"
              size="xs"
              className="border-brand-blue font-light text-brand-blue"
              rightIcon={<Icon IconComp={ArrowRightIcon} boxSize={4} />}
            >
              See all
            </Button>
          </div>
          <AnimatePresence>
            <IfElse
              ifOn={!getWishList.isLoading && !!getWishList?.value}
              ifOnElse={getWishList.isLoading && !getWishList?.value}
              onElse={
                <FadeInOut className="product-grid grid gap-x-3 gap-y-10">
                  {[1, 2, 3, 4].map((i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </FadeInOut>
              }
            >
              <FadeInOut className="product-grid grid gap-x-3 gap-y-10">
                {getWishList?.value?.items.map((product) => (
                  <ProductCard
                    name={product.productName}
                    key={product.id}
                    imageSrc={product.productImage}
                    href={`/${product.slug}`}
                    price={product.productPriceString}
                    imageAlt={`${product.productName} image`}
                    isCategoryPage
                    id={product.productId}
                    // @ts-expect-error
                    rating={undefined}
                  />
                ))}
              </FadeInOut>
            </IfElse>
          </AnimatePresence>
        </div>
      </Section>
    </>
  );
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout isMainPage hasBanner={false}>
      {page}
    </AppLayout>
  );
};

CartPage.auth = true;

export default CartPage;
