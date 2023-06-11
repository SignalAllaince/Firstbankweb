import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import useGetCartList from "@/hooks/cart/useGetCartList";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";
import CartLoadingPage from "./loading";
import CartPageSection from "./main";

const CartPage: NextPageWithLayout & ProtectedComponentType = () => {
  const getCartList = useGetCartList();

  return (
    <>
      <PageHead title="Cart" />

      <IfElse
        ifOn={!getCartList.isLoading && !!getCartList?.value}
        ifOnElse={getCartList.isLoading && !getCartList?.value}
        onElse={<CartLoadingPage />}
      >
        <CartPageSection cartDetails={getCartList.value!} />
      </IfElse>
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
