import FadeInOut from "@/components/fade";
import Heading from "@/components/heading";
import IfElse from "@/components/if-else";
import BlurImage from "@/components/image";
import Pagination from "@/components/paginate";
import Section from "@/components/section";
import { IOrderDetails } from "@/types/api.types";
import { AnimatePresence } from "framer-motion";
import shirtImg from "../../../../../public/images/top.svg";
import SingleOrder from "../components/order-row";

function ClosedOrderHistory({ orders }: { orders: IOrderDetails[] }) {
  return (
    <div className="space-y-5">
      <div className="col-span-8 py-3 md:col-span-9">
        <AnimatePresence>
          <IfElse
            ifOn={orders.length !== 0}
            ifOnElse={orders.length === 0}
            onElse={
              <FadeInOut>
                <Section className="my-4 flex w-full flex-col items-center justify-center space-y-4 py-4">
                  <div className="max-w-xl">
                    <BlurImage src={shirtImg} alt={"djsdsd"} />
                  </div>
                  <div className="flex flex-col items-center space-y-3 text-center">
                    <Heading size="h4">You have no closed orders yet!</Heading>
                    <p className="font-light">
                      Browse our categories and order something nice for
                      yourself!
                    </p>
                  </div>
                </Section>
              </FadeInOut>
            }
          >
            <FadeInOut>
              <div className="space-y-5">
                {orders.map((order) => (
                  <SingleOrder order={order} key={order.id} />
                ))}
              </div>
              {/* Pagination */}
              <Pagination />
            </FadeInOut>
          </IfElse>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ClosedOrderHistory;
