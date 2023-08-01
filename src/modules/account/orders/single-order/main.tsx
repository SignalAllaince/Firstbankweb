import Badge from "@/components/badge";
import Button from "@/components/button";
import { ISinglOrderDetails } from "@/types/api.types";
import { usePathname } from "next/navigation";
import OrderProductRow from "../components/order-section";

const MainOrderSection = ({ order }: { order: ISinglOrderDetails }) => {
  const pathname = usePathname();
  const total = order.subTotal + order.taxAmount + order.shippingAmount;
  return (
    <>
      <div className="space-y-5 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-brand-darkest">
              Order No. - {order.id}
            </p>
            <Badge variant="pending">order placed</Badge>
          </div>
          <div className="flex items-center gap-2">
            {order.orderStatusString === "New" ? (
              <Button
                size="small"
                className="h-8 px-[8px]"
                href={`/cart/checkout?id=${order.id}`}
              >
                Continue to Checkout
              </Button>
            ) : (
              <Button
                size="small"
                className="h-8 px-[8px]"
                href={`${pathname}/track`}
              >
                Track Order
              </Button>
            )}

            {!(order.orderStatusString === "New") && (
              <Button size="small" className="h-8 px-[8px]">
                Rate Item
              </Button>
            )}
          </div>
        </div>
        <div className="space-y-5">
          {order.orderItems.map((item) => (
            <OrderProductRow key={item.productId} product={item} />
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
                  <p className="font-medium">{order.subTotalString}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="w-[170px]">Delivery/Shipping Cost:</p>
                  <p className="font-medium">{order.shippingAmountString}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="w-[170px]">Product Tax (7.5%):</p>
                  <p className="font-medium">{order.taxAmountString}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="w-[170px] text-sm font-medium">Total</p>
                  <p className="font-medium">₦ {total}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 border-t border-brand-light pt-4 font-light">
              <h3 className="text-lg font-medium">Delivery Details</h3>
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-medium">Delivery Address</p>
                  <p className="text-[13px]">
                    {order.shippingAddress.addressLine1}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium">State</p>
                  <p className="text-[13px]">
                    {order.shippingAddress.stateName}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium">City</p>
                  <p className="text-[13px]">
                    {order.shippingAddress.cityName}
                  </p>
                </div>
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
    </>
  );
};

export default MainOrderSection;
