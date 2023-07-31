import FadeInOut from "@/components/fade";
import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import useGetCheckoutDetails from "@/hooks/checkout/useGetCheckoutDetails";
import useShippingAsBilling from "@/hooks/checkout/useShippingAsBilling";
import CheckoutContextProvider from "@/lib/context/checkout-context";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import React, { ReactElement } from "react";
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
> &
  ProtectedComponentType = ({ query }) => {
  const userId = "7B0030007800640033006600640035003000";
  const checkoutDetails = useGetCheckoutDetails(userId, query?.id as string);
  const shippingAsBilling = useShippingAsBilling(query?.id as string);

  const makeCalls = React.useCallback(() => {
    shippingAsBilling.mutateAsync({}).then(() => {
      checkoutDetails.refetch();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    makeCalls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageHead title="Checkout" />
      <IfElse
        ifOn={!checkoutDetails.isLoading && !!checkoutDetails?.data?.data}
        // @ts-expect-error
        ifOnElse={checkoutDetails.isLoading && !checkoutDetails?.data?.data}
        onElse={<CategoryLoading />}
      >
        <CheckoutContextProvider details={checkoutDetails?.data?.data!}>
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

CheckoutPage.auth = true;

export default CheckoutPage;
