import Badge from "@/components/badge";
import Button from "@/components/button";
import useCancelOrder from "@/hooks/order/useCancelOrder";
import useNotification from "@/hooks/use-notification";
import { isCheckoutViable, isTrackingViable } from "@/lib/constants/rating";
import { splitCapitalizeWord } from "@/lib/utils/common.utils";
import { ISinglOrderDetails } from "@/types/api.types";
import dayjs from "dayjs";
import { usePathname } from "next/navigation";
import OrderProductRow from "../components/order-section";

const MainOrderSection = ({
  order,
  refetch,
}: {
  order: ISinglOrderDetails;
  refetch: () => void;
}) => {
  const pathname = usePathname();
  const cancelOrder = useCancelOrder(order?.id);
  const { toast } = useNotification();

  const cancelOrderHandler = () => {
    cancelOrder?.refetch().then(() => {
      toast({
        appearance: "success",
        description: `Order #${order?.id} has been cancelled successfully`,
      });
      refetch();
    });
  };

  const total =
    (order?.subTotal ?? 0) +
    (order?.taxAmount ?? 0) +
    (order?.shippingAmount ?? 0);

  return (
    <>
      <div className="space-y-5 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-brand-darkest">
              Order No. - {order?.id}
            </p>
            <Badge variant={order?.orderStatus}>
              {splitCapitalizeWord(order?.orderStatus)}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            {isCheckoutViable(order?.orderStatusString) ? (
              <Button
                size="small"
                className="h-8 px-[8px]"
                href={`/cart/checkout?id=${order?.id}`}
              >
                Continue to Checkout
              </Button>
            ) : null}
            {isTrackingViable(order?.orderStatusString) ? (
              <Button
                size="small"
                className="h-8 px-[8px]"
                href={`${pathname}/track`}
              >
                Track Order
              </Button>
            ) : null}
          </div>
        </div>
        <div className="space-y-5">
          {order?.orderItems?.map((item) => (
            <OrderProductRow key={item?.productId} product={item} />
          ))}
        </div>
        <div className="item-start flex gap-3 text-[13px] font-light">
          <div className="flex h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-[4px] bg-transparent"></div>
          <div className="flex-1 space-y-4">
            <div className="space-y-4 border-t border-brand-light pt-4 font-light">
              <h3 className="text-lg font-medium">Payment Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-4">
                  <p className="w-[170px]">Item Cost:</p>
                  <p className="font-medium">{order?.subTotalString}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="w-[170px]">Delivery/Shipping Cost:</p>
                  <p className="font-medium">{order?.shippingAmountString}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="w-[170px]">Product Tax (7.5%):</p>
                  <p className="font-medium">{order?.taxAmountString}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="w-[170px] text-sm font-medium">Total</p>
                  <p className="font-medium">₦ {total}.00</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 border-t border-brand-light pt-4 font-light">
              <h3 className="text-lg font-medium">Delivery Details</h3>
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-medium">Delivery Address</p>
                  <p className="text-[13px]">
                    {order?.shippingAddress?.addressLine1}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium">State</p>
                  <p className="text-[13px]">
                    {order?.shippingAddress?.stateName}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium">City</p>
                  <p className="text-[13px]">
                    {order?.shippingAddress?.cityName}
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium">Delivery Date</p>
                <p className="text-[13px]">
                  To be delivered between{" "}
                  {dayjs(order?.dateCreated)
                    .add(3, "day")
                    .format("dddd, MMMM DD")}{" "}
                  and{" "}
                  {dayjs(order?.dateCreated)
                    .add(7, "day")
                    .format("dddd, MMMM DD")}{" "}
                </p>
              </div>
              {isCheckoutViable(order?.orderStatusString) && (
                <div className="pt-5">
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={cancelOrderHandler}
                    isLoading={
                      cancelOrder?.isRefetching || cancelOrder?.isFetching
                    }
                  >
                    Cancel Order
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainOrderSection;
