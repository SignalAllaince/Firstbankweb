import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import AppLayout from "@/components/layout/app-layout";
import CheckoutModal from "@/components/modal/checkout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import useGetCartList from "@/hooks/cart/useGetCartList";
import useDisclosure from "@/hooks/use-disclosure";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import CartProductRow from "./components/cart-row";

const CartPage: NextPageWithLayout & ProtectedComponentType = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const getCartList = useGetCartList();

  console.log(getCartList.value, "getCartList?.value");
  return (
    <>
      <PageHead title="Cart" />
      <div className="bg-white pb-10">
        <div className="w-full border-b border-gray-200 ">
          <Section className="space-y-4 py-8">
            <div className="flex items-center">
              <div className="flex items-center gap-1 text-sm">
                <p>Home</p>
                <Icon IconComp={ChevronRightIcon} boxSize={4} />
                <p>Cart</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Heading size="h4">Cart</Heading>
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
                        <CartProductRow />
                        <CartProductRow />
                        <div className="flex items-center justify-between border-b">
                          <div className="max-w-[400px] py-4 text-slate-700">
                            <div className="item-start flex animate-pulse gap-3">
                              <div className="flex h-[110px] w-[110px] flex-shrink-0 overflow-hidden  rounded-[4px] bg-brand-light">
                                <div className="h-full w-full bg-slate-200 object-cover object-center" />
                              </div>
                              <div className="flex h-[110px] flex-col justify-between">
                                <div className="space-y-2">
                                  <div className="h-2 w-40 max-w-[400px] bg-slate-200" />
                                  <div className="h-2 w-28 max-w-[400px] bg-slate-200" />
                                  <div className="h-2 w-20 max-w-[400px] bg-slate-200" />
                                </div>
                                <div className="h-2 w-14 bg-slate-200 px-2" />
                                <div className="h-5 w-14 bg-slate-200 px-2" />
                              </div>
                            </div>
                          </div>

                          <div className="flex w-[200px] flex-col items-center space-y-4 py-4 text-center">
                            <div className="h-4 w-20 bg-slate-200 px-2" />
                            <div className="h-6 w-24 bg-slate-200 px-2" />
                          </div>
                        </div>
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
                <h2>2 Items</h2>
              </div>
              <div className="border-t border-brand-light"></div>
              <div className="flex items-center justify-between">
                <h2>Total</h2>
                <h2 className="text-lg">50,000</h2>
              </div>
              <div className="border-t border-brand-light"></div>
              <Button className="w-full uppercase" onClick={onOpen}>
                Continue to Checkout
              </Button>
            </div>
          </div>
        </Section>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal isOpen={isOpen} onClose={onClose} />
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
