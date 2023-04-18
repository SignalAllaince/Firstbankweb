import AppLayout from "@/components/app-layout";
import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import CartModal from "@/components/modal/cart";
import Section from "@/components/section";
import useDisclosure from "@/hooks/use-disclosure";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

const CartPage: NextPageWithLayout & ProtectedComponentType = () => {
  const { isOpen, onOpen, onOClose } = useDisclosure();

  return (
    <>
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
                variant="secondary"
                size="xs"
                className="border-0 border-b px-1 !text-sm"
                href="/"
                rightIcon={<Icon IconComp={ArrowRightIcon} boxSize={4} />}
              >
                Continue shopping
              </Button>
            </div>
            {/* <Button onClick={onOpen}>Open Modals</Button> */}
          </Section>
        </div>

        <Section className="grid grid-cols-12 gap-x-4 pt-3">
          <div className="col-span-8 mb-8 overflow-hidden rounded bg-white pb-2">
            <table className="w-full table-auto border-collapse border-spacing-0 rounded-full text-sm">
              <thead className="border-b border-brand-light">
                <tr className="py-2">
                  <th className="w-full py-4 text-left font-medium text-brand-darkest">
                    Item Details
                  </th>
                  <th className="w-full flex-auto py-4 text-left font-medium text-brand-darkest">
                    Quantity
                  </th>
                  <th className="w-full py-4 text-left font-medium text-brand-darkest">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="py-4  text-slate-700">
                    <div className="item-start flex max-w-sm gap-3 bg-slate-400">
                      <div className="flex h-[100px] w-[100px] min-w-max flex-shrink-0 bg-brand-light" />
                      <div className="flex h-full flex-col justify-between">
                        <p>
                          This Description should carry only the full name of
                          the product.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-slate-700">
                    <Heading size="h4">25,000</Heading>
                  </td>
                  <td className="py-4 text-slate-700">1961</td>
                </tr>
                <tr>
                  <td className="py-4  text-slate-700">TRX</td>
                  <td className="py-4 text-slate-700">4.65%</td>
                  <td className="py-4 text-slate-700">
                    <Heading size="h4">25,000</Heading>
                  </td>
                </tr>
                <tr>
                  <td className="py-4  text-slate-700">TRX</td>
                  <td className="py-4 text-slate-700">4.65%</td>
                  <td className="py-4 text-slate-700">
                    <Heading size="h4">25,000</Heading>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-4">
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
              <Button className="w-full uppercase">Continue to Checkout</Button>
            </div>
          </div>
        </Section>

        {/* second section */}
        {/* <section className="space-y-5  ">
        <div className="border-t-2 border-brand-lightest" />
      </section> */}
      </div>
      {/* Remove from cart modal */}
      <CartModal isOpen={isOpen} onOClose={onOClose} />
      {/* Add to wishlist modal */}
      {/* <WishListModal isOpen={isOpen} onOClose={onOClose} /> */}
      {/* Checkout Modal */}
      {/* <CheckoutModal isOpen={isOpen} onOClose={onOClose} /> */}
    </>
  );
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

CartPage.auth = false;

export default CartPage;
