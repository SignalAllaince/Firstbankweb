import AppLayout from "@/components/app-layout";
import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import CheckoutModal from "@/components/modal/checkout";
import CartProductBtn from "@/components/product-btn";
import Section from "@/components/section";
import useDisclosure from "@/hooks/use-disclosure";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";

const CartPage: NextPageWithLayout & ProtectedComponentType = () => {
  const { isOpen, onOClose, onOpen } = useDisclosure();

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
            {/* <table className="w-full table-auto border-collapse border-spacing-0 rounded-full text-sm">
              <thead className="border-b border-brand-light">
                <tr className="py-2">
                  <th className="min-w-[370px]  py-4 text-left font-medium text-brand-darkest">
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
                  <td className="py-4 text-slate-700">
                    <div className="item-start flex  gap-3">
                      <div className="flex h-[100px] w-[100px] min-w-max flex-shrink-0 bg-brand-light" />
                      <div className="flex h-[100px] flex-col justify-between">
                        <p className="font-light">
                          This Description should carry only the full name of
                          the product.
                        </p>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="cart"
                            size="xs"
                            className="border-brand-error text-brand-error"
                            leftIcon={<Icon IconComp={TrashIcon} boxSize={4} />}
                          >
                            Remove Item
                          </Button>
                          <Button
                            variant="cart"
                            size="xs"
                            className="border-brand-darkest text-brand-darkest"
                            rightIcon={
                              <Icon IconComp={HeartIcon} boxSize={4} />
                            }
                          >
                            Add to wishlist
                          </Button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-slate-700">25,000</td>
                  <td className="py-4 text-slate-700">1961</td>
                </tr>

                <tr>
                  <td className="py-4  text-slate-700">TRX</td>
                  <td className="py-4 text-slate-700">4.65%</td>
                  <td className="py-4 text-slate-700">25,000</td>
                </tr>
              </tbody>
            </table> */}

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
                          <th className="w-[200px] py-4 text-center font-medium text-brand-darkest">
                            Quantity
                          </th>
                          <th className="w-[200px] py-4 text-center font-medium text-brand-darkest">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="w-[550px] whitespace-pre-line py-4 text-slate-700 md:w-[480px] lg:w-[450px]">
                            <div className="item-start flex gap-3">
                              <div className="flex h-[100px] w-[100px]  flex-shrink-0 bg-brand-light" />
                              <div className="flex h-[100px] flex-col justify-between">
                                <p className="break-words">
                                  This Description should carry only the full
                                  name of the product.
                                </p>
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="cart"
                                    size="xs"
                                    className="border-brand-error text-brand-error"
                                    leftIcon={
                                      <Icon IconComp={TrashIcon} boxSize={4} />
                                    }
                                  >
                                    Remove Item
                                  </Button>
                                  <Button
                                    variant="cart"
                                    size="xs"
                                    className="border-brand-darkest text-brand-darkest"
                                    rightIcon={
                                      <Icon IconComp={HeartIcon} boxSize={4} />
                                    }
                                  >
                                    Add to wishlist
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="flex w-[200px] items-end justify-center whitespace-nowrap py-4">
                            {/* Cart btn */}
                            <div className="mt-7">
                              <CartProductBtn />
                            </div>
                          </td>
                          <td className="w-[200px] whitespace-nowrap py-4 text-center">
                            <p className="text-lg font-bold">₦ 25,000</p>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="w-[550px] whitespace-pre-line py-4 text-slate-700 md:w-[480px] lg:w-[450px]">
                            <div className="item-start flex gap-3">
                              <div className="flex h-[100px] w-[100px]  flex-shrink-0 bg-brand-light" />
                              <div className="flex h-[100px] flex-col justify-between">
                                <p className="break-words">
                                  This Description should carry only the full
                                  name of the product.
                                </p>
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="cart"
                                    size="xs"
                                    className="border-brand-error text-brand-error"
                                    leftIcon={
                                      <Icon IconComp={TrashIcon} boxSize={4} />
                                    }
                                  >
                                    Remove Item
                                  </Button>
                                  <Button
                                    variant="cart"
                                    size="xs"
                                    className="border-brand-darkest text-brand-darkest"
                                    rightIcon={
                                      <Icon IconComp={HeartIcon} boxSize={4} />
                                    }
                                  >
                                    Add to wishlist
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="flex w-[200px] items-end justify-center whitespace-nowrap py-4">
                            {/* Cart btn */}
                            <div className="mt-7">
                              <CartProductBtn />
                            </div>
                          </td>
                          <td className="w-[200px] whitespace-nowrap py-4 text-center">
                            <p className="text-lg font-bold">₦ 25,000</p>
                          </td>
                        </tr>
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
      {/* Remove from cart modal */}
      {/* <CartModal isOpen={isOpen} onOClose={onOClose} /> */}
      {/* Add to wishlist modal */}
      {/* <WishListModal isOpen={isOpen} onOClose={onOClose} /> */}
      {/* Checkout Modal */}
      <CheckoutModal isOpen={isOpen} onOClose={onOClose} />
    </>
  );
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

CartPage.auth = false;

export default CartPage;
