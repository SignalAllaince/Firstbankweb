import AppLayout from "@/components/app-layout";
import Icon from "@/components/icon";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

const CheckoutPage: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div className="bg-white pb-10">
      <div className="w-full border-b border-gray-200 ">
        <Section className="py-8">
          <div className="flex items-center">
            <div className="flex items-center gap-1 text-sm">
              <p>Home</p>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <p>Others</p>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <p>Umbrella</p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

CheckoutPage.auth = false;

export default CheckoutPage;
