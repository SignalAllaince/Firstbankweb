import AppLayout from "@/components/app-layout";
import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import Modal from "@/components/modal";
import Section from "@/components/section";
import useDisclosure from "@/hooks/use-disclosure";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

const CartPage: NextPageWithLayout & ProtectedComponentType = () => {
  const { isOpen, onOpen, onOClose } = useDisclosure();

  return (
    <>
      <div className="bg-white pb-10">
        <div className="w-full border-b border-gray-200 ">
          <Section className="space-y-5 py-8">
            <div className="flex items-center">
              <div className="flex items-center gap-1 text-sm">
                <p>Home</p>
                <Icon IconComp={ChevronRightIcon} boxSize={4} />
                <p>Cart</p>
              </div>
            </div>
            <Heading size="h4">Cart</Heading>
          </Section>
        </div>

        {/* second section */}
        {/* <section className="space-y-5  ">
        <div className="border-t-2 border-brand-lightest" />
      </section> */}
      </div>
      {/* Remove from cart modal */}
      <Modal isOpen={isOpen} closeModal={onOClose} closeOnOverlayClick>
        <div className="space-y-8 py-6 md:px-5">
          <div className="text-md mx-auto max-w-sm text-center font-light lg:text-lg">
            <p>Are you sure you want to remove this item from your cart?</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button className="w-full px-2 uppercase" variant="secondary">
              Remove item
            </Button>
            <Button className="w-full px-2 uppercase" href="/cart">
              No, Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Add to wishlist modal */}
      <Modal isOpen={isOpen} closeModal={onOClose} closeOnOverlayClick>
        <div className="space-y-8 py-6 md:px-5">
          <div className="text-md mx-auto max-w-sm text-center font-light lg:text-lg">
            <p>Are you sure you want to save this item to your wishlist?</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button className="w-full px-2 uppercase" variant="secondary">
              No, Cancel
            </Button>
            <Button className="w-full px-2 uppercase" href="/cart">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </Modal>

      {/* Checkout Modal */}
      <Modal isOpen={isOpen} closeModal={onOClose} closeOnOverlayClick>
        <div className="space-y-8 py-6 md:px-5">
          <div className="text-md font-light lg:text-lg">
            <p>
              Kindly provide the following details correctly in the fields below
              to continue
            </p>
          </div>
          <div className="space-y-4">
            <Button className="w-full px-2 uppercase" variant="secondary">
              No, Cancel
            </Button>
            <Button className="w-full px-2 uppercase" href="/cart">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

CartPage.auth = false;

export default CartPage;
