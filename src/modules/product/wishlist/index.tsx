import Heading from "@/components/heading";
import Icon from "@/components/icon";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactElement } from "react";
import WishListRow from "./wishlist-row";

const WishListPage: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div className="bg-white">
      <PageHead title="Wishlist" />
      <div className="w-full border-b border-brand-light">
        <Section className="space-y-7 py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Link href="/">Home</Link>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <p>Wishlist</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Heading size="h3">Wishlist</Heading>
          </div>
        </Section>
      </div>

      {/* second section */}
      <section className="pb-20 pt-6">
        <Section className="space-y-5">
          <WishListRow />
          <WishListRow />
          <WishListRow />
          <WishListRow />
        </Section>
      </section>
    </div>
  );
};

WishListPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

WishListPage.auth = false;

export default WishListPage;
