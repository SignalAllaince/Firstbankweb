import Badge from "@/components/badge";
import Button from "@/components/button";
import AccountLayout from "@/components/layout/account-layout";
import OrderLayout from "@/components/layout/orders-layout";
import ItemReviewModal from "@/components/modal/review";
import useGetOrderById from "@/hooks/order/useGetOrderById";
import useDisclosure from "@/hooks/use-disclosure";
import { ProtectedNextPage } from "@/types/component.types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { usePathname } from "next/navigation";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import OrderProductRow from "../components/order-section";

export const getServerSideProps: GetServerSideProps<{
  query: ParsedUrlQuery;
}> = async (params) => {
  return {
    props: {
      query: params.query,
    },
  };
};

const DetailedSingleOrderPage: ProtectedNextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const pathname = usePathname();
  const getOrder = useGetOrderById(props?.query?.orderId as string);
  const { isOpen, onClose, onOpen } = useDisclosure();

  console.log(getOrder, "get single order details");
  return (
    <>
      <div className="space-y-5 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-brand-darkest">
              Order No. - BS83748748
            </p>
            <Badge variant="pending">order placed</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="small"
              className="h-8 px-[8px]"
              href={`${pathname}/track`}
            >
              Track Order
            </Button>

            <Button size="small" className="h-8 px-[8px]" onClick={onOpen}>
              Rate Item
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          <OrderProductRow />
          <OrderProductRow />
          <OrderProductRow />
        </div>
        <div className="item-start flex gap-3 text-[13px] font-light">
          <div className="flex h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-[4px] bg-transparent"></div>
          <div className="flex-1 space-y-4">
            <div className="space-y-4 border-t border-brand-light pt-4 font-light">
              <h3 className="text-lg font-medium">Payment Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-4">
                  <p className="w-[170px]">Item Cost:</p>
                  <p className="font-medium">₦ 40,000</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="w-[170px]">Delivery/Shipping Cost:</p>
                  <p className="font-medium">₦ 2,000</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="w-[170px]">Product Tax (7.5%):</p>
                  <p className="font-medium">₦ 3,875</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="w-[170px] text-sm font-medium">Total</p>
                  <p className="font-medium">₦ 45,875</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 border-t border-brand-light pt-4 font-light">
              <h3 className="text-lg font-medium">Delivery Details</h3>
              <div className="space-y-1">
                <p className="text-xs font-medium">Delivery Address</p>
                <p className="text-[13px]">
                  Plot 72, Unknown Estate, along Unknown Road, Unknown Town,
                  Lagos State, Nigeria.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium">Delivery Date</p>
                <p className="text-[13px]">
                  To be delivered between Monday, April 8 and Thursday, April 11
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ItemReviewModal isOpen={isOpen} onClose={onClose} />
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

DetailedSingleOrderPage.auth = true;

export default DetailedSingleOrderPage;
