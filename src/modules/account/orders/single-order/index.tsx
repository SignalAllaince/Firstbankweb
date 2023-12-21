import ErrorMessage from "@/components/error-message";
import FadeInOut from "@/components/fade";
import IfElse from "@/components/if-else";
import AccountLayout from "@/components/layout/account-layout";
import OrderLayout from "@/components/layout/orders-layout";
import PageHead from "@/components/page-head";
import useGetOrderById from "@/hooks/order/useGetOrderById";
import { NextPageWithLayout } from "@/types/component.types";
import { AnimatePresence } from "framer-motion";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import OrderLoading from "../history/loading";
import MainOrderSection from "./main";

export const getServerSideProps: GetServerSideProps<{
  query: ParsedUrlQuery;
}> = async (params) => {
  return {
    props: {
      query: params.query,
    },
  };
};

const DetailedSingleOrderPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const getOrder = useGetOrderById(props?.query?.orderId as string);

  return (
    <>
      <PageHead title={`Order ${props?.query?.orderId}`} />
      <AnimatePresence>
        <IfElse
          ifOn={!getOrder.isLoading && !!getOrder?.value}
          ifOnElse={getOrder.isLoading && !getOrder?.value}
          // ifOnElse={true}
          onElse={<OrderLoading />}
          elseThen={<ErrorMessage />}
        >
          <FadeInOut>
            <MainOrderSection
              refetch={getOrder?.refetch}
              order={getOrder?.value!}
            />
          </FadeInOut>
        </IfElse>
      </AnimatePresence>
    </>
  );
};

DetailedSingleOrderPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <OrderLayout isDetailsPageText="Order details">{page}</OrderLayout>
    </AccountLayout>
  );
};

export default DetailedSingleOrderPage;
