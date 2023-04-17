import AppLayout from "@/components/app-layout";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

const CartPage: NextPageWithLayout & ProtectedComponentType = () => {
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
    </>
  );
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

CartPage.auth = false;

export default CartPage;
