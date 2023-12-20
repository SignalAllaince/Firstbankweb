import FadeInOut from "@/components/fade";
import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import useGetCheckoutDetails from "@/hooks/checkout/useGetCheckoutDetails";
import CheckoutContextProvider from "@/lib/context/checkout-context";
import { NextPageWithLayout } from "@/types/component.types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import CategoryLoading from "../category/loading";
import CheckoutMain from "./main";

export const getServerSideProps: GetServerSideProps<{
  query: ParsedUrlQuery;
}> = async (params) => {
  return {
    props: {
      query: params.query,
    },
  };
};

const CheckoutPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ query }) => {
  const userId = "7B0030007800640033006600640035003000";
  const checkoutDetails = useGetCheckoutDetails(userId, query?.id as string);

  return (
    <>
      <PageHead title="Checkout" />
      <IfElse
        ifOn={!checkoutDetails.isLoading && !!checkoutDetails?.value}
        ifOnElse={checkoutDetails.isLoading && !checkoutDetails?.value}
        onElse={<CategoryLoading />}
      >
        <CheckoutContextProvider details={checkoutDetails?.value!}>
          <FadeInOut>
            <CheckoutMain />
          </FadeInOut>
        </CheckoutContextProvider>
      </IfElse>
    </>
  );
};

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout hasBanner={false} isCheckout>
      {page}
    </AppLayout>
  );
};

export default CheckoutPage;
