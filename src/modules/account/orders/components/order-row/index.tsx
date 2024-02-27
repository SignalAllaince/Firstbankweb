import Badge from "@/components/badge";
import Button from "@/components/button";
import Icon from "@/components/icon";
import { IOrderDetails } from "@/types/api.types";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

// const texts = {
//   pending: "order placed",
//   error: "order cancelled - unsuccessful payment",
//   success: "delivered",
// };

function SingleOrder({ order }: { order: IOrderDetails }) {
  const router = useRouter();
  return (
    <div className="flex items-start justify-between border-b border-brand-light pb-4">
      <div className="item-start flex max-w-[550px] gap-3 text-sm font-light">
        <div className="flex h-[100px] w-[100px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-brand-light text-brand-blue">
          <Icon
            IconComp={ShoppingBagIcon}
            className="opacity-80"
            boxSize={10}
          />
        </div>
        <div className="flex h-[100px] flex-col justify-between">
          <p>Order No. - {order.id}</p>
          <div className="flex items-center gap-3">
            <p className="text-xs text-brand-dark">
              Date - {dayjs(order.dateCreated).format("DD MMMM YYYY")}
            </p>
            <Badge variant={order.orderStatus}>{order.orderStatus}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs">
              To be delivered between{" "}
              {dayjs(order.dateCreated).add(3, "day").format("dddd, MMMM DD")}{" "}
              and{" "}
              {dayjs(order.dateCreated).add(7, "day").format("dddd, MMMM DD")}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <Button
          variant="secondary"
          size="xs"
          onClick={() => router.push(`/account/orders/${order.id}`, {})}
        >
          Order Details
        </Button>
      </div>
    </div>
  );
}

export default SingleOrder;
