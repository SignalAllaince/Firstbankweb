import AppLayout from "@/components/app-layout";
import Button from "@/components/button";
import Heading from "@/components/heading";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import Image from "next/image";
import { ReactElement, useState } from "react";
import productImg from "../../../../public/images/shirt.jpg";
import PaymentMethods from "./components/payment-methods";

const CheckoutPage: NextPageWithLayout & ProtectedComponentType = () => {
  const [checked, setChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  return (
    <div className="bg-white pb-10">
      <div className="w-full border-b border-gray-200 ">
        <Section className="py-4">
          <div className="flex items-center">
            <Heading size="h4" className="text-brand-darkest">
              Checkout
            </Heading>
          </div>
        </Section>
      </div>
      <div>
        <Section className="py-10">
          <div className="mx-auto max-w-3xl">
            <Heading size="h5" className="pb-6">
              Item(s) Details
            </Heading>
            <div className="space-y-6">
              {/* Item rows */}
              <div className="flex items-start justify-between border-b border-brand-light pb-4">
                <div className="item-start flex max-w-sm gap-3 text-sm font-light">
                  <div className="flex h-[100px] w-[100px]  flex-shrink-0 bg-brand-light">
                    <Image
                      src={productImg}
                      alt="product image"
                      width={400}
                      height={400}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex h-[100px] flex-col justify-between">
                    <p className="break-words">
                      This Description should carry only the full name of the
                      product.
                    </p>
                    <div className="flex items-center gap-2">
                      <p>Quantity: 1</p>
                    </div>
                  </div>
                </div>
                <h2 className="font-bold">₦ 25,000</h2>
              </div>
              <div className="flex items-start justify-between border-b border-brand-light pb-4">
                <div className="item-start flex max-w-sm gap-3 text-sm font-light">
                  <div className="flex h-[100px] w-[100px]  flex-shrink-0 bg-brand-light">
                    <Image
                      src={productImg}
                      alt="product image"
                      width={400}
                      height={400}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex h-[100px] flex-col justify-between">
                    <p className="break-words">
                      This Description should carry only the full name of the
                      product.
                    </p>
                    <div className="flex items-center gap-2">
                      <p>Quantity: 1</p>
                    </div>
                  </div>
                </div>
                <h2 className="font-bold">₦ 25,000</h2>
              </div>

              {/* Total Price Row */}
              <div className="flex items-center justify-between border-b border-brand-light pb-4">
                <h2 className="font-bold uppercase">ITEM(S) TOTAL</h2>
                <h2 className="text-lg font-bold">₦ 25,000</h2>
              </div>
              {/* Shipping details */}
              <div className="space-y-4 pt-7 font-light">
                <Heading size="h5">Shipping Details</Heading>
                <div className="space-y-1">
                  <p className="text-xs">Delivery Address</p>
                  <p className="text-sm">
                    Plot 72, Unknown Estate, along Unknown Road, Unknown Town,
                    Lagos State, Nigeria.
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-4">
                    <p className="w-[170px]">Delivery/Shipping Cost:</p>
                    <p className="font-medium">₦ 2,000</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="w-[170px]">Product Tax (7.5%):</p>
                    <p className="font-medium">₦ 3,875</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-t border-brand-light py-4">
                  <h2 className="font-bold uppercase">TOTAL COST</h2>
                  <h2 className="text-lg font-bold">₦ 55,875</h2>
                </div>
              </div>
              {/* Toggle staff details and payment option */}
              {/* <StaffDetails checked={checked} setChecked={setChecked} /> */}
              <PaymentMethods
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
              <div>
                <Button className="w-full text-sm uppercase">
                  Proceed to payment
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout hasBanner={false} isCheckout>
      {page}
    </AppLayout>
  );
};

CheckoutPage.auth = false;

export default CheckoutPage;
