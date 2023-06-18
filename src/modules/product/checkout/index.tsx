import Button from "@/components/button";
import Heading from "@/components/heading";
import AppLayout from "@/components/layout/app-layout";
import PaymentModal from "@/components/modal/payment";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import useDisclosure from "@/hooks/use-disclosure";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { AnimatePresence, motion } from "framer-motion";
import { ReactElement, useState } from "react";
import CheckoutProduct from "./components/checkout-product";
import PaymentMethods from "./components/payment-methods";
import StaffDetails from "./components/staff-details";

const btnText = {
  details: "Proceed to payment",
  payment: "Confirm Order",
};
const CheckoutPage: NextPageWithLayout & ProtectedComponentType = () => {
  const [checked, setChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [level, setLevel] = useState<"details" | "payment">("details");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const checkoutHandler = () => {
    if (level === "details" && checked) {
      setLevel("payment");
      return;
    }
    onOpen();
  };
  const disable =
    (level === "details" && !checked) ||
    (level === "payment" && !paymentMethod);
  return (
    <>
      <PageHead title="Checkout" />
      <PaymentModal isOpen={isOpen} onClose={onClose} isLoading={false} />
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
            <div className="mx-auto max-w-[800px]">
              <Heading size="h5" className="pb-6">
                Item(s) Details
              </Heading>
              <div className="space-y-6">
                {/* Item rows */}
                <div className="grid grid-cols-2 gap-4 border-b border-brand-light">
                  <CheckoutProduct />
                  <CheckoutProduct />
                  <CheckoutProduct />
                  <CheckoutProduct />
                </div>

                {/* Total Price Row */}
                <div className="flex items-center justify-between border-b border-brand-light pb-4">
                  <h2 className="font-bold uppercase">SUBTOTAL</h2>
                  <h2 className="text-lg font-bold">₦ 25,000</h2>
                </div>
                {/* Shipping details */}
                <div className="space-y-4 pt-7 font-light">
                  <Heading size="h5">Delivery Details</Heading>
                  <div className="space-y-1">
                    <p className="text-xs">Delivery Address</p>
                    <p className="text-sm">
                      Plot 72, Unknown Estate, along Unknown Road, Unknown Town,
                      Lagos State, Nigeria.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs">Phone Number</p>
                    <p className="text-sm">09099096797</p>
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
                <AnimatePresence mode="wait">
                  <motion.div
                    key={level}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.3 }}
                  >
                    {level === "details" ? (
                      <StaffDetails checked={checked} setChecked={setChecked} />
                    ) : (
                      <PaymentMethods
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                <div>
                  <Button
                    className="w-full text-sm uppercase"
                    disabled={disable}
                    onClick={checkoutHandler}
                  >
                    {btnText[level]}
                  </Button>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout hasBanner={false} isCheckout>
      {page}
    </AppLayout>
  );
};

CheckoutPage.auth = true;

export default CheckoutPage;
