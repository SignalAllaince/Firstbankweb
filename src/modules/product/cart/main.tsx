import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import IfElse from "@/components/if-else";
import CheckoutModal from "@/components/modal/checkout";
import Section from "@/components/section";
import useGetCartList from "@/hooks/cart/useGetCartList";
import useDisclosure from "@/hooks/use-disclosure";
import { CartListResponse } from "@/types/api.types";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import CartProductRow from "./components/cart-row";

const CartPageSection = ({
  cartDetails,
}: {
  cartDetails: CartListResponse;
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const getCartList = useGetCartList();

  return (
    <>
      <div className="h-full bg-white pb-10">
        <div className="w-full border-b border-gray-200 ">
          <Section className="space-y-4 py-8">
            <div className="flex items-center">
              <div className="flex items-center gap-1 text-sm">
                <Link href="/">Home</Link>
                <Icon IconComp={ChevronRightIcon} boxSize={4} />
                <p>Cart</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Heading className="font-bold" size="h4">
                Cart
              </Heading>
              <Button
                href="/"
                variant="cart"
                size="xs"
                className="border-brand-blue text-brand-blue"
                rightIcon={<Icon IconComp={ArrowRightIcon} boxSize={4} />}
              >
                Continue shopping
              </Button>
            </div>
            {/* <Button onClick={onOpen}>Open Modals</Button> */}
          </Section>
        </div>
        <IfElse
          ifOn={cartDetails.items.length !== 0}
          ifOnElse={cartDetails.items.length === 0}
          onElse={
            <Section className="flex h-40 w-full items-center justify-center">
              <Heading>Empty Cart</Heading>
            </Section>
          }
        >
          <Section className="gap-x-4 pt-5 lg:grid lg:grid-cols-12">
            <div className="mb-8 space-y-6 overflow-hidden rounded bg-white pb-2 lg:col-span-8">
              <div className="flex flex-col overflow-x-auto lg:overflow-x-hidden">
                <div className="sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto lg:overflow-x-hidden">
                      <table className="min-w-[640px] text-left text-sm font-light sm:min-w-full">
                        <thead className="border-b font-medium">
                          <tr>
                            <th className="py-4 text-left font-medium text-brand-darkest">
                              Item Details
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartDetails.items.map((item) => (
                            <CartProductRow
                              price={item.productPriceString}
                              productQuantity={item.quantity}
                              onCartRefetch={getCartList.refetch}
                              isLoading={getCartList.isRefetching}
                              key={item.id}
                              name={item.productName}
                              productId={item.id}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="text-md space-y-5 bg-brand-lightest px-4 py-6 font-medium text-brand-darkest">
                <div className="flex items-center justify-between">
                  <h2>Order Summary</h2>
                  <h2>{cartDetails?.items?.length} Items</h2>
                </div>
                <div className="border-t border-brand-light"></div>
                <div className="flex items-center justify-between">
                  <h2>Total</h2>
                  <h2 className="text-lg">{cartDetails.subTotalString}</h2>
                </div>
                <div className="border-t border-brand-light"></div>
                <Button className="w-full uppercase" onClick={onOpen}>
                  Continue to Checkout
                </Button>
              </div>
            </div>
          </Section>
        </IfElse>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CartPageSection;
