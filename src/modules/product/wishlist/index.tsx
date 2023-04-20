import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import AppLayout from "@/components/layout/app-layout";
import { Menu, MenuButton, MenuItem, MenuItems } from "@/components/menu";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

const SearchPage: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div>
      <div className="w-full bg-white">
        <Section className="space-y-7 py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <p>Home</p>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <p>Search result</p>
            </div>
            <div>
              <p className="text-sm text-brand-medium">1-6 of 6 results</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Heading size="h3">Search Results - Umbrella</Heading>
            <div className="flex items-center gap-2">
              <p className="text-sm">Filter:</p>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="secondary"
                  size="small"
                  className="h-8 border-brand-light px-[6px] text-brand-darkest"
                  rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
                >
                  By Popularity
                </MenuButton>
                <MenuItems menuClasses="right-0 bg-white divide-y divide-gray-100 mt-[18px]">
                  <MenuItem>Highest to Lowest</MenuItem>
                  <MenuItem>Lowest to Highest</MenuItem>
                  <MenuItem>Best seller</MenuItem>
                  <MenuItem>New arrivals</MenuItem>
                  <MenuItem>Top sales</MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </Section>
      </div>

      {/* second section */}
      <section className="pb-10 pt-6">
        <Section className="space-x-5"></Section>
      </section>
    </div>
  );
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

SearchPage.auth = false;

export default SearchPage;
