import Accordion from "@/components/accordion";
import AppLayout from "@/components/app-layout";
import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import CustomInput from "@/components/input";
import { Menu, MenuButton, MenuItem, MenuItems } from "@/components/menu";
import ProductCard from "@/components/product-card";
import Section from "@/components/section";
import { cn } from "@/lib/utils/component.utils";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { RadioGroup } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { ReactElement, useState } from "react";

const plans = [
  {
    name: "Under ₦5,000",
    value: "12GB",
  },
  {
    name: "₦5,000 - ₦9,999",
    value: "16GB",
  },
  {
    name: "₦10,000 - ₦19,999",
    value: "32GB",
  },
  {
    name: "₦20,000 - ₦39,999",
    value: "16GB",
  },
  {
    name: "₦40,000 Above",
    value: "16GB",
  },
];

const ratings = [
  {
    value: 4,
  },
  {
    value: 3,
  },
  {
    value: 2,
  },
  {
    value: 1,
  },
];

const SearchPage: NextPageWithLayout & ProtectedComponentType = () => {
  const [plan, setPlan] = useState(null);
  const [rating, setRating] = useState(null);

  return (
    <div className="">
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
        <Section className="grid grid-cols-12 gap-x-5">
          <div className="col-span-3 h-fit space-y-3 border-t border-brand-darkest">
            <Accordion title="Price">
              <RadioGroup value={plan} onChange={setPlan}>
                <RadioGroup.Label className="sr-only">Plan</RadioGroup.Label>
                <div className="space-y-5">
                  {plans.map((plan) => (
                    <RadioGroup.Option value={plan} key={plan.name}>
                      {({ checked, active }) => (
                        <div className="flex cursor-pointer items-center gap-4">
                          <span
                            aria-hidden="true"
                            className={cn(
                              "ring-brand-darkest",
                              active && checked ? "ring-2" : "",
                              checked ? "bg-brand-darkest" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 block h-[18px] w-[18px] rounded-full border-2 border-black border-opacity-80 p-0.5 ring-offset-1 focus:outline-none"
                            )}
                          />
                          <span className="text-sm">{plan.name}</span>
                        </div>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              <div className="space-y-3 pt-12">
                <p>Custom Price Range</p>
                <div className="flex max-w-[230px] items-center gap-2">
                  <CustomInput
                    borderColor="border-brand-light"
                    bg="bg-white"
                    name="min"
                    placeholder="min"
                  />
                  <Icon IconComp={MinusIcon} />
                  <CustomInput
                    borderColor="border-brand-light"
                    bg="bg-white"
                    name="max"
                    placeholder="max"
                  />
                </div>
              </div>
            </Accordion>
            <Accordion title="Rating">
              <RadioGroup value={rating} onChange={setRating}>
                <RadioGroup.Label className="sr-only">Ratings</RadioGroup.Label>
                <div className="space-y-5">
                  {ratings.map((rating) => (
                    <RadioGroup.Option value={rating} key={rating.value}>
                      {({ checked, active }) => (
                        <div className="flex cursor-pointer items-center gap-4">
                          <span
                            aria-hidden="true"
                            className={cn(
                              "ring-brand-darkest",
                              active && checked ? "ring-2" : "",
                              checked ? "bg-brand-darkest" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 block h-[18px] w-[18px] rounded-full border-2 border-black border-opacity-80 p-0.5 ring-offset-1 focus:outline-none"
                            )}
                          />
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rate) => (
                                <StarIcon
                                  key={rate}
                                  className={cn(
                                    rating.value > rate
                                      ? "text-brand-accent"
                                      : "text-gray-200",
                                    "h-4 w-4 flex-shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="text-sm">& Up</p>
                          </div>
                        </div>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </Accordion>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-x-4 gap-y-12">
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

SearchPage.auth = false;

export default SearchPage;
